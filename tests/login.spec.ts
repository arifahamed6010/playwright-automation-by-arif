import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://www.automationexercise.com/');

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await page.locator('[data-qa="login-email"]').fill('arifahamed5@gmail.com');

  await page.locator('[data-qa="login-password"]').fill('automation!123');

  await page.locator('[data-qa="login-button"]').click();

  await expect(page).toHaveTitle('Automation Exercise');

});


