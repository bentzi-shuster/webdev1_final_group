// @ts-check
const { test, expect } = require('@playwright/test');

//check the privacy policy link goes to the privacy policy page
test('Privacy Policy link goes to privacy policy page', async ({ page,baseURL }) => {
    await page.goto('/');
    await page.click('text=Privacy Policy');
    //wait for url to change
    await page.waitForURL(new RegExp(/(.*?)+\/privacy.html/g));
    expect(await page.url()).toBe(`${baseURL}/privacy.html`);
    }
);

    