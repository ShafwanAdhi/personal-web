import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { portfolio } from './src/data/portfolio.ts'

function escapeAttribute(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!)
}

export default defineConfig({
  plugins: [react(), {
    name: 'portfolio-static-pages',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const entry = bundle['index.html']
      if (!entry || entry.type !== 'asset') throw new Error('Missing portfolio HTML entry')
      const html = typeof entry.source === 'string' ? entry.source : new TextDecoder().decode(entry.source)
      const makePage = (title: string, description: string, path: string) => {
        const url = new URL(path, portfolio.meta.siteUrl).href
        const image = new URL(portfolio.meta.socialImage, portfolio.meta.siteUrl).href
        const metadata = [
          `<link rel="canonical" href="${escapeAttribute(url)}" />`,
          ...Object.entries({
            'og:type': 'website',
            'og:site_name': portfolio.identity.name,
            'og:title': title,
            'og:description': description,
            'og:url': url,
            'og:image': image,
            'og:image:secure_url': image,
            'og:image:type': 'image/jpeg',
            'og:image:width': '1200',
            'og:image:height': '630',
            'og:image:alt': portfolio.meta.socialImageAlt,
          }).map(([property, content]) => `<meta property="${property}" content="${escapeAttribute(content)}" />`),
          ...Object.entries({
            'twitter:card': 'summary_large_image',
            'twitter:title': title,
            'twitter:description': description,
            'twitter:image': image,
            'twitter:image:alt': portfolio.meta.socialImageAlt,
          }).map(([name, content]) => `<meta name="${name}" content="${escapeAttribute(content)}" />`),
        ].join('\n    ')
        return html
        .replace(/<title>.*?<\/title>/, `<title>${escapeAttribute(title)}</title>`)
        .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(description)}" />`)
        .replace(/<html lang="[^"]*">/, `<html lang="${escapeAttribute(portfolio.meta.language)}">`)
        .replace('</head>', `    ${metadata}\n  </head>`)
      }
      entry.source = makePage(portfolio.meta.title, portfolio.meta.description, '/')
      const routes = new Set<string>()
      for (const project of portfolio.work.projects) {
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id) || routes.has(project.id)) {
          throw new Error(`Project IDs must be unique URL slugs: ${project.id}`)
        }
        routes.add(project.id)
        this.emitFile({ type: 'asset', fileName: `projects/${project.id}/index.html`, source: makePage(`${project.title}${portfolio.meta.titleSeparator}${portfolio.identity.name}`, project.description, `/projects/${project.id}/`) })
      }
      this.emitFile({ type: 'asset', fileName: 'certifications/index.html', source: makePage(`${portfolio.certifications.title}${portfolio.meta.titleSeparator}${portfolio.identity.name}`, portfolio.certifications.pageDescription, '/certifications/') })
      this.emitFile({ type: 'asset', fileName: 'projects/index.html', source: makePage(`${portfolio.work.pageTitle}${portfolio.meta.titleSeparator}${portfolio.identity.name}`, portfolio.work.pageDescription, '/projects/') })
    },
  }],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
})
