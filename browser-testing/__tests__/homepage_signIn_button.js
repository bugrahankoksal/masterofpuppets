const puppeteer = require("puppeteer");

test("homepage_signIn_button", async () => {
  const browser = await puppeteer.launch({
    "headless": false,
    //doesn't work without a head, idk why :( 
    
});
  try {
    const page = await browser.newPage();

    await page.goto("https://www.youtube.com/");
    
    await page.click('yt-formatted-string.size-small');
    await page.waitForTimeout(2000);
    
    let data = await page.evaluate(()=>{ 
        
        let data= document.querySelector("#headingText > span:nth-child(1)").innerText 
           
        return data
     });
     expect(data).toContain("Sign in");

    } 

  finally {
    await browser.close();
  }
}, 120000);


