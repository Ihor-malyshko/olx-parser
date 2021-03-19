const puppeteer = require("puppeteer");

exports.getData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });
  await page.goto("https://olx.ua");
  // await page.screenshot({ path: "full.png", fullPage: true });

  const data = await page.$$eval("#gallerywide > li", (items) =>
    items.map((item) => {
      const olxId = item.getAttribute("data-id");
      const title = item.querySelector(".inner > h4 > a > strong").textContent;
      const price = item.querySelector(".price").textContent;
      const filterPrice = price.replace("\n", "").replace("\t", "").trim();
      const link = item.querySelector(".inner > h4 > a").getAttribute("href");

      return { olxId, title, price: filterPrice, link };
    })
  );
  await browser.close();
  return data;
};
