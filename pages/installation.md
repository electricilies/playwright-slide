---
layout: center
class: text-center
transition: slide-up
---

# Installation & Setup

Getting Playwright up and running

---
hideInToc: true
---

### Language Support

Playwright officially supports multiple languages:

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click>

#### Official (by Microsoft)
- **JavaScript/TypeScript** - Most mature
- **Python** - Feature parity
- **.NET** (C#/F#) - Full support
- **Java** - Enterprise ready

</div>

<div v-click>

#### Community Supported
- **Go** - golang-playwright
- **Ruby** - playwright-ruby
- **Others** - Growing ecosystem

</div>

</div>

---
hideInToc: true
---

### Installation & Setup - JavaScript/TypeScript

**Initialize Playwright in your project:**

::: code-group
```bash [npm]
npm init playwright@latest
```
```bash [yarn]
yarn create playwright
```
```bash [pnpm]
pnpm create playwright
```
:::

---
hideInToc: true
---

### Installation Prompts

When you run the installation command, you'll be prompted to choose:

<v-clicks>

- **TypeScript or JavaScript** (default: TypeScript)
- **Tests folder name** (default: `tests`, or `e2e` if tests already exists)
- **Add a GitHub Actions workflow** (recommended for CI)
- **Install Playwright browsers** (default: yes)

</v-clicks>

<div v-click class="mt-6 p-4 bg-blue-50 rounded text-sm">

💡 **Note:** You can re-run the command later; it does not overwrite existing tests.

</div>

---
hideInToc: true
---

### Update Playwright & Install Browsers

::: code-group
```bash [npm]
npm install -D @playwright/test@latest
npx playwright install --with-deps
```
```bash [yarn]
yarn add --dev @playwright/test@latest
yarn playwright install --with-deps
```
```bash [pnpm]
pnpm install --save-dev @playwright/test@latest
pnpm exec playwright install --with-deps
```
:::

<v-click>

**What gets installed:**
- Latest Playwright test runner (~300-400MB browsers)
- Chromium, Firefox, and WebKit binaries
- System dependencies for browsers

</v-click>

---
hideInToc: true
---

### Running Tests

::: code-group
```bash [npm]
npx playwright test
```
```bash [yarn]
yarn playwright test
```
```bash [pnpm]
pnpm exec playwright test
```
:::

<v-click>

**By default:**
- Tests run in **headless mode**
- Execute in **parallel** across all browsers
- Results displayed in terminal

</v-click>

---
hideInToc: true
---

### Running Tests in UI Mode

UI Mode provides an enhanced developer experience with watch mode and visual debugging:

::: code-group
```bash [npm]
npx playwright test --ui
```
```bash [yarn]
yarn playwright test --ui
```
```bash [pnpm]
pnpm exec playwright test --ui
```
:::

<v-click>

**Features:**
- 👁️ Watch mode with live updates
- 🔍 Visual test execution
- ⏱️ Time travel debugging
- 🎯 Locator picker tool

</v-click>

---
hideInToc: true
---

### HTML Test Reports

Playwright automatically generates detailed HTML reports:

::: code-group
```bash [npm]
npx playwright show-report
```
```bash [yarn]
yarn playwright show-report
```
```bash [pnpm]
pnpm exec playwright show-report
```
:::

<v-click>

**Report includes:**
- 📊 Test execution overview
- ✅ Pass/fail status for each test
- 📸 Screenshots and videos
- 🔍 Trace files for debugging
- 📈 Performance metrics

</v-click>

---
hideInToc: true
---

### Installation - Other Languages

**Python:**
```bash
pip install playwright
playwright install
```

<v-click>

**.NET:**
```bash
dotnet add package Microsoft.Playwright
pwsh bin/Debug/net6.0/playwright.ps1 install
```

</v-click>

<v-click>

**Java (Maven):**
```xml
<dependency>
  <groupId>com.microsoft.playwright</groupId>
  <artifactId>playwright</artifactId>
  <version>1.40.0</version>
</dependency>
```

</v-click>
