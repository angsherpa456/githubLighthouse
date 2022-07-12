module.exports = async (browser, context) => {
  console.log('conte ',process.env);
  const page = await browser.newPage();
  await page.authenticate({'username':'optile', 'password': 'optileDev2020'});
  await page.goto(context.url, { waitUntil: 'networkidle2' });
  await page.close();
};
