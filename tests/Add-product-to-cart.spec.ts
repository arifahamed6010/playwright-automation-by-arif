import { test, expect } from '@playwright/test';

test('Add to Cart Test', async ({ page }) => {

  await page.goto('https://www.automationexercise.com/');
    
  await page.locator('[data-product-id="1"]').first().click();

  await page.getByText('View Cart').click();

});


