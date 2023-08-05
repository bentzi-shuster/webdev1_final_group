// @ts-check
const { test, expect } = require('@playwright/test');


let endpoints = [
{
  path:"/",
  title:"Cats and Coffee",
  description:"This is a cat cafe with that has coffee.",

},
{
  path:"/about",
  title:"Cats and Coffee",
  description:"This is a cat cafe with that has coffee.",

},
{
  path:"/blog",
  title:"Cats and Coffee",
  description:"This is a cat cafe with that has coffee.",

},
{
  path:"/blog/1",
  title:"Cats and Coffee",
  description:"This is a cat cafe with that has coffee.",

}
]



test('has the right title', async ({ page }) => {
  for (let endpoint of endpoints) {
    await page.goto(endpoint.path); //playwright.config.js sets baseURL, look there for the full URL
    // check that the title is correct
    await expect(page).toHaveTitle(endpoint.title);
  }
});

// returns a 200 status code
test('status code is 200', async ({ page }) => {
  for (let endpoint of endpoints) {
    await page.goto(endpoint.path);
    const status = await page.evaluate(() => fetch('/').then((res) => res.status)); //the response status code from a js fetch request by the browser
    expect(status).toBe(200);
  }
});

// has the right description
test('has the right description', async ({ page }) => {
  for (let endpoint of endpoints) {
    await page.goto(endpoint.path);
    const description = await page.locator('meta[name="description"]').getAttribute('content'); //the description from the meta tag
    expect(description).toBe(endpoint.description);
  }
});
