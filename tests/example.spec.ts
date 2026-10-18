import { test, expect } from '@playwright/test';

test('Login page test', async ({ page }) => {

    test.setTimeout(0);

    await page.goto('https://www.amazon.in/', {
        waitUntil: 'domcontentloaded'
    });
    const dogProducts = page.getByRole('link', {
        name: 'Dog products'
    });

    for (let i = 0; i < 30; i++) {

        // Element mil gaya to click karo
        if (await dogProducts.count() > 0) {
            await dogProducts.click();
            console.log(dogProducts);
            break;
        }
        await page.mouse.wheel(0, 300);


        await page.waitForTimeout(3000);
    }

    // Page ko content load karne ka time
    await page.waitForTimeout(2000);


    await expect(page).toHaveURL(/amazon/);
    await page.mouse.wheel(0, 500);


    const productImage = page.locator(
        'img[alt*="PURINA SUPERCOAT Adult Dry Dog Food"]'
    );
    const nextButton = page.getByRole('button', {
        name: 'Next page'
    }).first();

    for (let i = 0; i < 20; i++) {
        if (await productImage.count() > 0) {
            await expect(productImage).toBeVisible();
            await productImage.click();
            break;


        }
        await nextButton.click();
        await page.waitForTimeout(1000);



    }
    await page.waitForTimeout(3000);


    //hover on Account & lists
    const account = page.locator('#nav-link-accountList-nav-line-1');


    await expect(account).toBeVisible({ timeout: 10000 });



    console.log('Count:', await account.count());

    await account.hover();
    await page.waitForTimeout(1000);


    await page.getByRole('link', { name: 'Create a Wish List' }).click();
    await page.waitForTimeout(3000);

    // open hamburger
    await page.getByRole('button', { name: 'Open All Categories Menu' }).click();

    await page.getByRole('button', {
        name: "Men's Fashion", exact: true
    }).click();

    //click Main menu
  const mainMenu = page.locator('a.hmenu-back-button:visible');


console.log('Count:', await mainMenu.count());

await mainMenu.first().click();

await page.pause();

        await page.getByRole('button', {
        name: "Men's Fashion", exact: true
    }).click();

    await page.pause();


});
