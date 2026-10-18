import { test, expect } from '@playwright/test';

test('AI Agent - Browser Demo', async ({ page }) => {

    await page.goto('https://www.amazon.in/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await page.waitForTimeout(5000);

    console.log('AI Agent Action: Open Amazon');

    console.log('Current URL:', page.url());

    console.log('Page Title:', await page.title());

    console.log('Page Text:', (await page.locator('body').innerText()).substring(0, 500));

    await page.pause();
});