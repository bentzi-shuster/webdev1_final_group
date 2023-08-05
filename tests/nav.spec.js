// @ts-check
const { test, expect } = require('@playwright/test');

//check the nav menu logo goes to home page
test('nav logo goes to home page', async ({ page }) => {
    await page.goto('/about')
    let logotext = await page.locator("nav > a:has-text('Cats and Coffee')");
    await logotext.waitFor({ state: 'visible' });
    await logotext.click();
    await expect(page).toHaveURL('/');
});
// on a mobile device, the nav menu is hidden behind a hamburger menu
test('nav menu is hidden behind hamburger menu on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 385, height: 812 });
    let NavLinks = await page.locator('nav details a').all();
    for (let i = 0; i < NavLinks.length; i++) {
        await NavLinks[i].waitFor({ state: 'attached' })
        expect(await NavLinks[i].isVisible()).toBe(false);
    }
})
// on a desktop device, the nav menu is visible
test('nav menu is visible on desktop', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1024, height: 768 });
    let NavLinks = await page.locator('nav > ul a').all();
    for (let i = 0; i < NavLinks.length; i++) {
        await NavLinks[i].waitFor({ state: 'visible' })
        expect(await NavLinks[i].isVisible()).toBe(true);
    }
})

let navLinks=[  // set up an array of objects with the name of the link, the link itself, and the title for the link so we can loop over it and create the links
{"name":"Home","link":"/","title":"Home page for Cats and Coffee"},
{"name":"About","link":"/about","title":"About page for Cats and Coffee"},
{"name":"Blog","link":"/blog","title":"Blog page for Cats and Coffee"},
]
// check that the nav menu links go to the right page
test('nav menu links go to the right page', async ({ page }) => {
    for (let link of navLinks) {
        await page.goto(link.link);
        await page.waitForURL(link.link);
        let linktext = await page.locator(`nav > ul a:has-text("${link.name}")`);
        await linktext.waitFor({ state: 'visible' });
        await linktext.click();
        await expect(page).toHaveURL(link.link);
        // check that the text on the link is correct
        await expect(page.locator('nav > ul a:has-text("'+link.name+'")')).toHaveText(link.name);
        await expect(page.locator('nav > details > ul a:has-text("'+link.name+'")')).toHaveText(link.name);
    }
});
