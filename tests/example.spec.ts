
import { test, expect } from '@playwright/test';

test('Amazon navigation test', async ({ page }) => {
  test.setTimeout(60000);

  // Open Amazon India
  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  // Check that Amazon has opened
  await expect(page).toHaveURL(/amazon\.in/);

  // Check Account & Lists
  const account = page.locator('#nav-link-accountList-nav-line-1');
  await expect(account).toBeVisible({ timeout: 15000 });

  // Hover over Account & Lists
  await account.hover();

  // Open Create a Wish List if available
  const wishListLink = page.getByRole('link', {
    name: 'Create a Wish List',
  });

  if (await wishListLink.isVisible().catch(() => false)) {
    await wishListLink.click();
  } else {
    console.log('Create a Wish List link was not visible.');
  }

  // Return to Amazon home page before opening the category menu
  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  // Open All Categories menu
  const menuButton = page.getByRole('button', {
    name: 'Open All Categories Menu',
  });

  await expect(menuButton).toBeVisible({ timeout: 15000 });
  await menuButton.click();

  // Open Men's Fashion
  const mensFashion = page.getByRole('button', {
    name: "Men's Fashion",
    exact: true,
  });

  await expect(mensFashion).toBeVisible({ timeout: 10000 });
  await mensFashion.click();

  console.log('Amazon navigation test completed.');
});