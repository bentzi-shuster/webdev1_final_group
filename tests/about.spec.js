// @ts-check
const { test, expect } = require('@playwright/test');

let headers = [
    'Our Story',
    'The Cats',
    'The Coffee',
    'A Meeting Place',
    'Community and Connection',
    'Visit Us',
]

for (let i = 0; i < headers.length; i++) {
    test(`Header ${headers[i]} is visible`, async ({ page }) => {
        await page.goto('/about');
        expect(await page.isVisible(`text=${headers[i]}`)).toBeTruthy();
    });
}