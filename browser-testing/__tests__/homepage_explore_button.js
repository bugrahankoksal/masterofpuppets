const puppeteer = require("puppeteer");


//this test fails
test("homepage_signIn_button", async () => {
  const browser = await puppeteer.launch({
    "headless": true
});
  try {
    const page = await browser.newPage();

    await page.goto("https://www.youtube.com/");
    

   // page.waitForSelector('ytd-guide-section-renderer.style-scope:nth-child(1) > div:nth-child(2) > ytd-guide-entry-renderer:nth-child(2) > a:nth-child(1) > tp-yt-paper-item:nth-child(1) > yt-formatted-string:nth-child(3)',{visible:true});
    await page.click("ytd-guide-section-renderer.style-scope:nth-child(1) > div:nth-child(2) > ytd-guide-entry-renderer:nth-child(1) > a:nth-child(1) > tp-yt-paper-item:nth-child(1)")

    await page.waitForTimeout(2000);
    

    let data = page.url();

     expect(data).toContain("https://www.youtube.com/");

    } 

  finally {
    await browser.close();
  }
}, 120000);


