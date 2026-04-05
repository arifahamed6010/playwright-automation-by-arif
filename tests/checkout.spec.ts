import { test, expect } from '@playwright/test';

test('Checkout Test', async ({ page }) => {

  await page.goto('https://www.automationexercise.com/');

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await page.locator('[data-qa="login-email"]').fill('arifahamed5@gmail.com');

  await page.locator('[data-qa="login-password"]').fill('automation!123');

  await page.locator('[data-qa="login-button"]').click();

  await expect(page).toHaveTitle('Automation Exercise');

  await page.locator('[data-product-id="1"]').first().click();

  await page.getByText('View Cart').click();

  const checkoutBtn = page.locator('.check_out');

  await checkoutBtn.waitFor({ state: 'visible' });

  await checkoutBtn.click();

  await page.getByRole('link', { name: 'Place Order' }).click();

  const nameInput = page.locator('[data-qa="name-on-card"]');

  await nameInput.waitFor({ state: 'visible', timeout: 5000 });

  await nameInput.fill('Arif Ahamed');

  await page.locator('[data-qa="card-number"]').fill('346578911345');

  await page.locator('[data-qa="cvc"]').fill('475');

  await page.locator('[data-qa="expiry-month"]').fill('12');

  await page.fill('input[data-qa="expiry-year"]', '2030');

  await page.locator('[data-qa="pay-button"]').click();

  await expect(page.getByText('Your order has been confirmed')).toBeVisible();

});
