# Asset notes

Current hero: `public/assets/portrait-shafwan.png` is the user's supplied grayscale photograph with its white background removed using the built-in imagegen editing tool on 2026-10-13. The PNG is 1254x1254 RGBA with genuine alpha transparency. The edit was instructed to preserve the person, glasses, hair, shirt, expression, and folded-arm pose. Hero placement uses a 104% square frame centered over the green shapes, with the original lower photo edge aligned near the bottom. The older generated placeholder is retained below for provenance and is no longer referenced by the website.

The hero styling now uses muted sage/forest gradients. A CSS brightness factor of 1.035 and contrast factor of .98 gently lift the portrait; these adjustments do not alter the image file. A foreground page-color gradient creates the bottom fade without exposing the background through the subject.

`public/assets/portrait.png` was generated with the built-in imagegen tool, then processed by a second built-in imagegen background-extraction call. It is temporary demonstration imagery, not the user's photo.

Final generation brief:

> A friendly smiling young Indonesian male designer, short neat side-parted black hair, no facial hair or glasses, wearing a dark charcoal plaid long-sleeve button-up shirt, standing with folded arms, body turned slightly three quarters, face towards camera. Natural grayscale photography and soft studio light. Crop from head to below waist. Transparent background. Only the person; no graphics, logos, text, or objects.

Final background-extraction brief:

> Remove the entire black and gray studio background. Use real alpha transparency. Keep the grayscale person, face, pose, hairstyle, folded arms, shirt, and body shape. Retain the person only with clean hair and body edges.

`public/assets/project-preview.svg` is an original code-authored dummy learning-platform montage following the reference's teal and white project thumbnails. `favicon.svg` uses the reference's four-point star motif.

Hero technology badges: Python, PyTorch, and FastAPI SVG paths sourced from the Simple Icons project (https://github.com/simple-icons/simple-icons/tree/develop/icons), rendered in white on brand-colored tiles. Local assets: public/assets/python.svg, pytorch.svg, fastapi.svg.
