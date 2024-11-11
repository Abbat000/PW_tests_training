import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands' }).click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN' }).click();
  await page.getByPlaceholder('Product Quantity').click();
  await page.getByPlaceholder('Product Quantity').click();
  await page.getByPlaceholder('Product Quantity').click();
  await page.getByPlaceholder('Product Quantity').fill('2');
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Proceed To Checkout' }).click();
  
});