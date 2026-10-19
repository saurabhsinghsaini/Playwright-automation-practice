
import { test, expect } from '@playwright/test';

test('Amazon homepage smoke test', async ({ page }) => {
  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  // Verify that the browser navigated to Amazon
  await expect(page).toHaveURL(/amazon\.in/);

  // Verify that the page title contains Amazon
  await expect(page).toHaveTitle(/Amazon/i, { timeout: 15000 });

  console.log('Amazon homepage smoke test completed.');
});
