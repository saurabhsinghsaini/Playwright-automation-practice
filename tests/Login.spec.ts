import { test, expect } from '@playwright/test';

test('Amazon basic test', async ({ page }) => {

    test.setTimeout(0);

    await page.goto('https://www.amazon.in/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle(/Amazon/);

    console.log('Amazon opened successfully');

    await page.pause();
});