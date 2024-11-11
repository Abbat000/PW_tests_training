import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('img').first().click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('link', { name: 'Contact Us' }).first().click();
  await expect(page.getByRole('main')).toContainText('Contact Information');
});