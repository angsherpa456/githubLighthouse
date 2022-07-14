module.exports = async (browser, context) => {
  const page = await browser.newPage();
  await page.authenticate({'username': `${process.env.LHCI_STAGING_ENVIRONMENT_USERNAME}`, 'password': `${process.env.LHCI_STAGING_ENVIRONMENT_PASSWORD}`});
  await page.goto(context.url, { waitUntil: 'networkidle2' });
  await page.close();
};
