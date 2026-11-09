async page => {
 const base='http://127.0.0.1:8770',out='output/playwright/netflix-integration';const checks=[],errors=[];const check=(ok,name)=>{if(!ok)throw new Error(name);checks.push(name)};
 page.on('pageerror',error=>errors.push(error.message));await page.emulateMedia({reducedMotion:'reduce'});
 const visit=async path=>{const response=await page.goto(base+path);check(response.status()===200,`${path}: HTTP 200`);await page.locator('main h1').waitFor();await page.evaluate(()=>document.fonts.ready);};
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:1000});
  await visit('/');
  check(JSON.stringify(await page.locator('.projects-section article h3').allTextContents())===JSON.stringify(['WaspadAI','UM RAG Assistant','Numora Assessment & Question Variants']),`${width}: featured projects unchanged`);
  check(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),`${width}: homepage fits`);
  await visit('/projects/');check(await page.locator('#project-results article').count()===7,`${width}: seven collection entries`);
  await page.getByRole('tab',{name:'AI / ML',exact:true}).click();check(await page.locator('#project-results article').count()===3,`${width}: three AI/ML entries`);
  const card=page.locator('#project-results article').filter({has:page.getByRole('heading',{name:'Netflix Catalog ML & Analytics',exact:true})});
  await card.getByRole('link',{name:'View Case Study',exact:true}).click();await page.getByRole('heading',{name:'Netflix Catalog ML & Analytics',exact:true}).waitFor();
  check(page.url().includes('category=ai-ml'),`${width}: category context retained`);
  await page.evaluate(()=>document.fonts.ready);
  check(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),`${width}: case study fits`);
  const apps=page.getByRole('region',{name:'Explore the Applications',exact:true});await apps.scrollIntoViewIfNeeded();
  check(await apps.getByRole('link').count()===8,`${width}: four demo/source pairs`);
  check(await apps.getByRole('listitem').count()===4,`${width}: four application rows`);
  check(await apps.locator('a').evaluateAll(links=>links.every(link=>link.getBoundingClientRect().height>=44)),`${width}: application links have touch targets`);
  check(await page.getByRole('link',{name:'Back to projects',exact:true}).first().getAttribute('href')==='/projects?category=ai-ml',`${width}: return keeps AI/ML filter`);
  check(await page.getByRole('link',{name:'WaspadAI',exact:true}).getAttribute('href')==='/projects/waspadai?from=projects&category=ai-ml',`${width}: next case wraps within AI/ML`);
  await apps.screenshot({path:`${out}/applications-${width}.png`,animations:'disabled'});
  await page.getByText(/Annual\/all generalization failed: 2,395.37 versus 137.75/).scrollIntoViewIfNeeded();check(true,`${width}: failed annual result remains visible`);
  check(await page.getByText(/Median absolute error worsened to 1.66 years versus 1.00/).count()===1,`${width}: regression tradeoff is explicit`);
  await page.screenshot({path:`${out}/detail-${width}.png`,fullPage:true,animations:'disabled'});
 }
 await page.setViewportSize({width:1440,height:1000});await visit('/projects/netflix-catalog-ml/');await page.reload();await page.locator('.project-gallery').waitFor();check(true,'Direct URL reload works on plain static server');
 for(let i=1;i<=6;i++){
  await page.getByRole('button',{name:`Show image ${i}`,exact:true}).click();
  await page.waitForFunction(()=>{const image=document.querySelector('.gallery-stage img:not([data-exiting="true"])');return image&&image.complete&&image.naturalWidth>0;});
  check(true,`Gallery slide ${i}: actual image decoded`);
 }
 const stage=page.locator('.gallery-stage');await stage.focus();await page.keyboard.press('ArrowRight');check(await page.locator('.gallery-count').innerText()==='01 / 06','Gallery keyboard wraps from sixth slide');
 await page.keyboard.press('ArrowLeft');check(await page.locator('.gallery-count').innerText()==='06 / 06','Gallery keyboard reverses');
 const html=await(await page.request.get(base+'/projects/netflix-catalog-ml/')).text();
 for(const [name,fragment] of [['title','<title>Netflix Catalog ML &amp; Analytics'],['canonical','https://shafwan.digital/projects/netflix-catalog-ml/'],['global preview','social-preview-hero-20261103.jpg'],['open graph','property="og:url"']])check(html.includes(fragment),`Initial HTML has ${name}`);
 const report=await page.request.get(base+'/reports/projects/netflix-catalog-ml.md');check(report.status()===200,'Public report accessible');const reportText=await report.text();
 check(reportText.includes('2395.37')&&reportText.includes('45.33')&&reportText.includes('1.66'),'Report includes failed annual, seasonal baseline and median-error tradeoff');
 await visit('/projects/waspadai/');check(await page.getByRole('region',{name:'Explore the Applications'}).count()===0,'Existing case keeps its original structure');
 await page.emulateMedia({reducedMotion:'no-preference'});await visit('/projects/netflix-catalog-ml/');await page.getByRole('region',{name:'Explore the Applications'}).scrollIntoViewIfNeeded();check(await page.getByRole('link',{name:'Open Audience Ratings demo',exact:true}).isVisible(),'Normal motion leaves demo controls usable');
 check(errors.length===0,`No uncaught errors: ${errors.join('; ')}`);
 return {checks,errors,viewportWidths:[320,390,768,1440],environment:'local production static server'};
}
