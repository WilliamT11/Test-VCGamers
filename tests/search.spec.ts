import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.vcgamers.com/');

  await page.waitForTimeout(3000);
});

test('Successful Product Search', async ({ page }) => {
  await page.locator('//*[@id="__layout"]/div/div[1]/header/div[2]/div[1]/input').fill('valorant');
  await page.locator('//*[@id="__layout"]/div/div[1]/header/div[2]/div[1]/input').press('Enter');

  const htmlCode = `<div data-v-175a6a1d="" class="col-lg-2 col-xl-2 col-md-4 col-sm-4 col-6 item-container mb-4"></div>`;

  expect(htmlCode).toContain('<div data-v-175a6a1d="" class="col-lg-2 col-xl-2 col-md-4 col-sm-4 col-6 item-container mb-4">');
  
});

test('Empty Search', async ({ page }) => {
  await page.locator('//*[@id="__layout"]/div/div[1]/header/div[2]/div[1]/input').press('Enter');

  await page.waitForTimeout(3000);

  const htmlCode = `<div data-v-175a6a1d="" class="col-lg-2 col-xl-2 col-md-4 col-sm-4 col-6 item-container mb-4"></div>`;

  expect(htmlCode).toContain('<div data-v-175a6a1d="" class="col-lg-2 col-xl-2 col-md-4 col-sm-4 col-6 item-container mb-4">');
  
});

// test('Invalid product Seacrh', async ({ page }) => {
//   await page.locator('//*[@id="__layout"]/div/div[1]/header/div[2]/div[1]/input').fill('ayam');
//   await page.locator('//*[@id="__layout"]/div/div[1]/header/div[2]/div[1]/input').press('Enter');

//   const showProduct = await page.locator('//p[contains(text(), "Produk tidak ditemukan")]').textContent();

//   expect(showProduct?.trim()).toBe('Produk tidak ditemukan');
  
// });


