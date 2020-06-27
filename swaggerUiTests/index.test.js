const puppeteer = require("puppeteer");
const swaggerUiUrl = "https://jogtracker.herokuapp.com/api/swagger#/";

test("should to show 401 error after try to receive jogs without token", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(swaggerUiUrl);
  await page.click('#data_getV1DataSync span a[href="#!/data/getV1DataSync"]');
  await page.click("#data_getV1DataSync input");
  setTimeout(async () => {
    const text = await page.$eval(
      "#data_getV1DataSync .response_code pre",
      (code) => {
        return code.textContent;
      }
    );
    console.log(text);
    expect(text).toEqual("401");
    await browser.close();
  }, 2000);
});

test("should show token by uuid 'hello'", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(swaggerUiUrl);
  await page.click('span a[href="#!/auth/postV1AuthUuidlogin"]');
  await page.click("#auth_postV1AuthUuidlogin_content input[name='uuid']");
  await page.type(
    "#auth_postV1AuthUuidlogin_content input[name='uuid']",
    "hello"
  );
  await page.click('#auth_postV1AuthUuidlogin_content input[type="submit"]');
  setTimeout(async () => {
    const text = await page.$eval(
      "#auth_postV1AuthUuidlogin_content .response_code pre",
      (code) => {
        return code.textContent;
      }
    );
    console.log(text);
    expect(text).toEqual("201");
    await browser.close();
  }, 2000);
});
