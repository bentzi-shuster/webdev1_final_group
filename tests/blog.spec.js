// @ts-check
import { test, expect } from '@playwright/test';
let posts = [
    "Two Forms of Pre-rendering",
    "TEST 2"
];
for (let i = 0; i < posts.length; i++) {
    test(`Post ${posts[i]} is visible`, async ({ page }) => {
        await page.goto('/blog');
        expect(await page.isVisible(`text=${posts[i]}`)).toBeTruthy();
        //click on the post
        await page.click(`text=${posts[i]}`);
        await page.waitForTimeout(1000);
        //wait for url to change
        page.waitForURL(new RegExp(/(.*?)+\/blog\/(.*?)+/g));
        expect(await page.isVisible(`text=${posts[i]}`)).toBeTruthy();
        //expect the title is an h1
        expect(await page.isVisible('h1')).toBeTruthy();
        //expect the title is the same as the post
        expect(await page.innerText('h1')).toBe(posts[i]);
        
    });

}
