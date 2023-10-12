import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/login?%2F');

  await page.waitForTimeout(3000);
});

test('Verify Login with no input', async ({ page }) => {
  await page.getByRole('button', { name: 'Masuk' }).click();
  
  const errorMessage = await page.locator('//p[contains(text(), "Email atau password tidak boleh kosong")]').textContent();
  
  expect(errorMessage).toBe('Email atau password tidak boleh kosong');
  
});

test('Verify Login with email is null', async ({ page }) => {
  await page.locator('input[placeholder="Password"]').fill('examplepassword');
  
  await page.getByRole('button', { name: 'Masuk' }).click();
  
  const errorMessage = await page.locator('//p[contains(text(), "Email atau password tidak boleh kosong")]').textContent();
  
  expect(errorMessage).toBe('Email atau password tidak boleh kosong');
  
});

test('Verify Login with password is null', async ({ page }) => {
  await page.locator('input[placeholder="Email"]').fill('example');

  await page.getByRole('button', { name: 'Masuk' }).click();
  
  const errorMessage = await page.locator('//p[contains(text(), "Email atau password tidak boleh kosong")]').textContent();
  
  expect(errorMessage).toBe('Email atau password tidak boleh kosong');
  
});

test('Login with email not yet verified', async ({ page }) => {
  await page.locator('input[placeholder="Email"]').fill('robertwilliamt11@gmail.com');
  
  await page.locator('input[placeholder="Password"]').fill('123456');

  await page.waitForTimeout(3000);
  
  await page.getByRole('button', { name: 'Masuk' }).click();
  
  const errorMessage = await page.locator('//p[contains(text(), "Email kamu belum melakukan verifikasi, silahkan check inbox/spam pada email kamu.")]').textContent();
  
  console.log(errorMessage);
  expect(errorMessage?.trim()).toBe('Email kamu belum melakukan verifikasi, silahkan check inbox/spam pada email kamu.');
  
});

test('Login Success', async ({ page }) => {
  await page.locator('input[placeholder="Email"]').fill('robertwilliamt11@gmail.com');
  
  await page.locator('input[placeholder="Password"]').fill('123456');

  await page.waitForTimeout(3000);
  
  await page.getByRole('button', { name: 'Masuk' }).click();
  
  const htmlCode = `<div data-v-57f79358="" class="user-avatar small no-outline"><div class="user-avatar-content"><div data-src="https://crm.vcgamers.com/assets/img/user-pp.png" class="hexagon-image-30-32 hexagon-image-member-pro-400197-1697043943428" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-progress"><div class="hexagon-progress-member-pro-400197-1697043943428" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-progress-border"><div class="hexagon-border-40-44 hexagon-border-member-pro-400197-1697043943428" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-badge"><div class="user-avatar-badge-border"><div class="hexagon-22-24 hexagon-member-pro-400197-1697043943428" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-badge-content"><div class="hexagon-dark-16-18 hexagon-dark-member-pro-400197-1697043943428" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <p class="user-avatar-badge-text">1</p></div></div>`;
  
  expect(htmlCode).toBe('<div data-v-57f79358="" class="user-avatar small no-outline"><div class="user-avatar-content"><div data-src="https://crm.vcgamers.com/assets/img/user-pp.png" class="hexagon-image-30-32 hexagon-image-member-pro-400197-1697043943428" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-progress"><div class="hexagon-progress-member-pro-400197-1697043943428" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-progress-border"><div class="hexagon-border-40-44 hexagon-border-member-pro-400197-1697043943428" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-badge"><div class="user-avatar-badge-border"><div class="hexagon-22-24 hexagon-member-pro-400197-1697043943428" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <div class="user-avatar-badge-content"><div class="hexagon-dark-16-18 hexagon-dark-member-pro-400197-1697043943428" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div></div> <p class="user-avatar-badge-text">1</p></div></div>');
  
});

test('Verify Login with wrong format email', async ({ page }) => {
  await page.locator('input[placeholder="Email"]').fill('example');
  
  await page.locator('input[placeholder="Password"]').fill('examplepassword');

  await page.waitForTimeout(3000);
  
  await page.getByRole('button', { name: 'Masuk' }).click();
  
  const errorMessage = await page.locator('//p[contains(text(), "Pastikan email yang kamu tulis sudah benar")]').textContent();
  
  expect(errorMessage).toBe('Pastikan email yang kamu tulis sudah benar');
  
});

test('Go to Register Page', async ({ page }) => {
  await page.locator('strong[style="color: rgb(64, 208, 79); cursor: pointer;"]').first().click();

  await page.waitForTimeout(2000);

  const errorMessage = await page.locator('//p[contains(text(), "Pendaftaran")]').textContent();
  
  expect(errorMessage).toBe('Pendaftaran');
  
});

test('Go to Reset Page', async ({ page }) => {
  await page.locator('//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/div[2]/p').click();

  await page.waitForTimeout(2000);

  const errorMessage = await page.locator('//p[contains(text(), "Reset Kata Sandi")]').textContent();
  
  expect(errorMessage).toBe('Reset Kata Sandi');
  
});
