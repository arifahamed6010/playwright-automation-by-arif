import { test, expect } from '@playwright/test';

test('Signup test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.locator('[data-qa="signup-name"]').fill('Test');
  await page.locator('[data-qa="signup-email"]').fill('testing209@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mr.' }).click();
  await page.locator('[data-qa="password"]').fill('pass!13');
  await page.locator('#days').selectOption('10')
  await page.locator('[data-qa="months"]').selectOption('3'); // March
  await page.selectOption('#years', { label: '1990' });
  await page.locator('#first_name').fill('Arif');
  await page.locator('[data-qa="last_name"]').fill('Ahamed');
  await page.locator('[data-qa="company"]').fill('Test company');
  await page.locator('#address1').fill('RJ street');
  await page.locator('#country').selectOption('India');
  await page.locator('#state').fill('Tamil Nadu');
  await page.locator('#zipcode').fill('12345');
  await page.locator('#city').fill('trichy');
  await page.locator('#mobile_number').fill('9977002211');
  await page.locator('[data-qa="create-account"]').click();
  const message = await page.locator('[data-qa="account-created"]');
  await expect(message).toHaveText('Account Created!');
  const text = await message.textContent();
  console.log("The message is:", text);
});

