import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/login?%2F');

  await page.waitForTimeout(3000);

  await page.locator('strong[style="color: rgb(64, 208, 79); cursor: pointer;"]').first().click();

  await page.waitForTimeout(2000);
});

test('Verify Register with no input', async ({ page }) => {
  
  const isDisabled = await page.locator('button[disabled="disabled"]').first().getAttribute('disabled');
  
  expect(isDisabled).toBe('disabled');
  
});

test('Go to Login Page', async ({ page }) => {
  await page.locator('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/div[1]/img').click();
  
  const successMessage = await page.locator('//p[contains(text(), "Masuk ke Akunmu")]').textContent();
  
  expect(successMessage).toBe('Masuk ke Akunmu');
  
});

test('Verify Register with email is null', async ({ page }) => {

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Ulangi Password"]').fill('123456');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('123');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');
  
  const isDisabled = await page.locator('button[disabled="disabled"]').first().getAttribute('disabled');
  
  expect(isDisabled).toBe('disabled');
  
});

test('Verify Register with password is null', async ({ page }) => {
  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Ulangi Password"]').fill('123456');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('123');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');
  
  const isDisabled = await page.locator('button[disabled="disabled"]').first().getAttribute('disabled');
  
  expect(isDisabled).toBe('disabled');
  
});

test('Verify Register with confirm password is null', async ({ page }) => {
  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('123');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');
  
  const isDisabled = await page.locator('button[disabled="disabled"]').first().getAttribute('disabled');
  
  expect(isDisabled).toBe('disabled');
  
});

test('Verify Register with phone number is null', async ({ page }) => {
  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Ulangi Password"]').fill('123456');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');
  
  const isDisabled = await page.locator('button[disabled="disabled"]').first().getAttribute('disabled');
  
  expect(isDisabled).toBe('disabled');
  
});

test('Verify Register with wrong format email', async ({ page }) => {

  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Ulangi Password"]').fill('123456');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('123');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');
  
  await page.getByRole('button', { name: 'Daftar' }).click();

  const errorMessage = await page.locator('//p[contains(text(), "Pastikan email yang kamu tulis sudah benar")]').textContent();

  expect(errorMessage?.trim()).toBe('Pastikan email yang kamu tulis sudah benar');
  
});

test('Verify Register with password length less than 6', async ({ page }) => {

  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('1234');

  await page.locator('input[placeholder="Ulangi Password"]').fill('1234');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('123');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');

  await page.getByRole('button', { name: 'Daftar' }).click();

  const errorMessage = await page.locator('//p[contains(text(), "Password minimal 6 sampai 30 karakter.")]').textContent();

  expect(errorMessage?.trim()).toBe('Password minimal 6 sampai 30 karakter.');
  
});

test('Verify Register with password length greater than 30', async ({ page }) => {

  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('1234567890123456789012345678901');

  await page.locator('input[placeholder="Ulangi Password"]').fill('1234567890123456789012345678901');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('123');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');

  await page.getByRole('button', { name: 'Daftar' }).click();

  const errorMessage = await page.locator('//p[contains(text(), "Password minimal 6 sampai 30 karakter.")]').textContent();

  expect(errorMessage?.trim()).toBe('Password minimal 6 sampai 30 karakter.');
  
});

test('Verify Register with password not same with confirm password', async ({ page }) => {

  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Ulangi Password"]').fill('1234567');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('123');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');

  const isDisabled = await page.locator('button[disabled="disabled"]').first().getAttribute('disabled');
  
  expect(isDisabled).toBe('disabled');
  
});

test('Verify Register with phone number length less than 10', async ({ page }) => {

  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Ulangi Password"]').fill('123456');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('12345678');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');

  await page.getByRole('button', { name: 'Daftar' }).click();

  const errorMessage = await page.locator('//p[contains(text(), "Masukkan No. Ponsel / Whatsapp 10 sampai 25 karakter.")]').textContent();
  
  expect(errorMessage?.trim()).toBe('Masukkan No. Ponsel / Whatsapp 10 sampai 25 karakter.');
  
});

test('Verify Register with phone number length greater than 25', async ({ page }) => {

  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Ulangi Password"]').fill('123456');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('1234567890123456789012345');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');

  await page.getByRole('button', { name: 'Daftar' }).click();

  //No. ponsel / whatsapp anda minimal terdiri dari 10 karakter dan maksimal 25 karakter.
  const errorMessage = await page.locator('//p[contains(text(), "Masukkan No. Ponsel / Whatsapp 10 sampai 25 karakter.")]').textContent();

  expect(errorMessage?.trim()).toBe('Masukkan No. Ponsel / Whatsapp 10 sampai 25 karakter.');
  
});

test('Register Succes', async ({ page }) => {

  await page.locator('input[placeholder="Masukkan alamat email"]').fill('test1234@gmail.com');

  await page.locator('input[placeholder="Password Min. 6 Karakter"]').fill('123456');

  await page.locator('input[placeholder="Ulangi Password"]').fill('123456');

  await page.locator('input[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('12345678901');

  await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[2]/form/div[5]/div');

  await page.getByRole('button', { name: 'Daftar' }).click();

  const successMessage = await page.locator('//p[contains(text(), "Silahkan cek inbox email aktivasi")]').textContent();

  expect(successMessage?.trim()).toBe('Silahkan cek inbox email aktivasi');
  
});
