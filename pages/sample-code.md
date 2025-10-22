---
layout: center
class: text-center
transition: slide-up
---

# Sample Code Examples

Writing tests with Playwright

---
hideInToc: true
---

### Basic Sample Code

```javascript
// filepath: tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('basic navigation test', async ({ page }) => {
  // Navigate to URL
  await page.goto('https://example.com');

  // Interact with elements
  await page.click('text=More information');

  // Assertions
  await expect(page).toHaveURL(/.*iana/);
  await expect(page.locator('h1')).toHaveText('IANA');
});
```

<v-click>

**Key Features:**
- Auto-waiting for elements
- Simple, readable syntax
- Built-in assertions

</v-click>

---
hideInToc: true
---

### Real-World Example - E-commerce Checkout (Part 1)

```javascript
// filepath: tests/checkout.spec.js
const { test, expect } = require('@playwright/test');

test.describe('E-commerce checkout flow', () => {
  test('complete purchase journey', async ({ page }) => {
    // Login
    await page.goto('https://shop.example.com/login');
    await page.fill('[data-testid="email"]', 'user@test.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('[data-testid="login-button"]');

    // Add to cart
    await page.goto('/products/laptop');
    await page.click('[data-testid="add-to-cart"]');
    await expect(page.locator('.cart-count')).toHaveText('1');
```

---
hideInToc: true
---

### Real-World Example - E-commerce Checkout (Part 2)

```javascript
    // Checkout
    await page.click('[data-testid="cart-icon"]');
    await page.click('text=Proceed to Checkout');

    // Fill shipping info
    await page.fill('#address', '123 Main St');
    await page.fill('#city', 'New York');
    await page.selectOption('#country', 'US');

    // Payment (mock)
    await page.fill('#card-number', '4111111111111111');
    await page.fill('#cvv', '123');

    // Complete order
    await page.click('text=Place Order');

    // Verify success
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.order-number')).toContainText('ORD-');
  });
});
```

---
hideInToc: true
---

### Advanced Feature - API Mocking

```javascript
// filepath: tests/advanced.spec.js
const { test, expect } = require('@playwright/test');

test('API mocking and network interception', async ({ page }) => {
  // Mock API response
  await page.route('**/api/products', (route) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({
        products: [
          { id: 1, name: 'Laptop', price: 999 },
          { id: 2, name: 'Mouse', price: 29 }
        ],
      }),
    });
  });

  await page.goto('/', { waitUntil: 'networkidle' });

  // Take screenshot
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
```

---
hideInToc: true
---

### Advanced Feature - Parallel Testing

```javascript
test('parallel testing with contexts', async ({ browser }) => {
  // Create isolated browser contexts
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

  const page1 = await context1.newPage();
  const page2 = await context2.newPage();

  // Run tests in isolation simultaneously
  await Promise.all([
    page1.goto('https://example1.com'),
    page2.goto('https://example2.com'),
  ]);

  // Each context maintains separate state
  // (cookies, localStorage, sessions)
});
```

<v-click>

**Benefits:** Faster test execution, isolated test environments, no state pollution

</v-click>