async page => {
 const context=await page.context().browser().newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
 try {
 const mobile=await context.newPage();await mobile.goto('http://127.0.0.1:8770/projects/netflix-catalog-ml/');const gallery=mobile.locator('.gallery-stage');await gallery.scrollIntoViewIfNeeded();const box=await gallery.boundingBox();
 const cdp=await context.newCDPSession(mobile);const x=box.x+box.width*.8,y=box.y+box.height*.55;
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});
 for(let i=1;i<=8;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x-i*25,y}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 await mobile.waitForFunction(()=>document.querySelector('.gallery-count').textContent==='02 / 06');
 return {checks:['Native Chromium touch swipe advances the project gallery'],environment:'390px touch emulation, reduced motion'};
 }finally{await context.close()}
}
