const puppeteer = require("puppeteer");

test("open_mainpage", async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();

    await page.goto("https://www.youtube.com/");

    let data = await page.evaluate(()=>{ 
        
      let data= document.querySelector("html head title").innerText 
         
      return data
   });


    
    expect(data).toContain("YouTube");

    } 

  finally {
    await browser.close();
  }
}, 120000);


