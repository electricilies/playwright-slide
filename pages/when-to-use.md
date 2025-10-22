---
layout: center
class: text-center
transition: slide-up
---

# When to Use Playwright

Ideal scenarios and use cases

---
hideInToc: true
---

### ✅ Ideal For - Project Scope

<v-clicks>

- **New projects** starting from scratch
- **Modernizing legacy test suites** with better reliability
- **CI/CD pipeline automation** with Docker support
- **Projects with cross-browser requirements** (Chrome, Firefox, Safari)
- **JavaScript/TypeScript tech stack** teams

</v-clicks>

---
hideInToc: true
---

### ✅ Ideal For - Test Types

<div class="grid grid-cols-2 gap-4">

<div v-click>

#### Primary Use Cases
- **E2E functional testing**
- **Integration testing** (frontend + backend)
- **Visual regression testing**
- **API testing** with network interception

</div>

<div v-click>

#### Additional Capabilities
- **Performance testing** (basic metrics)
- **Accessibility testing** (with axe integration)
- **Mobile emulation** testing
- **Screenshot & video capture**

</div>

</div>

---
hideInToc: true
---

### ✅ Ideal For - Automation Scenarios

<v-clicks>

**Beyond Testing:**

- 🕷️ **Web scraping** - Data extraction from websites
- 📄 **PDF generation** - Automated document creation
- 📸 **Screenshot capture** - Visual documentation
- 🤖 **Automated social media interactions**
- 📝 **Form submission automation**
- 🔄 **Content migration** - Bulk data operations

</v-clicks>

---
hideInToc: true
---

### ✅ Ideal For - Team & Project Characteristics

<v-clicks>

**Perfect when you have:**

- Modern web apps built with **React, Vue, Angular, or Svelte**
- Need for **fast, reliable tests** with minimal flakiness
- Existing **CI/CD pipeline** infrastructure
- **Cross-browser testing** requirements (including Safari/WebKit)
- Teams comfortable with **JavaScript/TypeScript**
- Projects requiring **network control** and API mocking

</v-clicks>

---
hideInToc: true
---

### ❌ Avoid When

<v-clicks>

**Not recommended for:**

- ⛔ **Legacy IE support required** (IE is not supported)
- 🔒 **Team heavily invested in Selenium ecosystem** (migration cost)
- 🖥️ **Desktop application testing** (use Electron alternatives instead)
- 📱 **Mobile native apps** (use Appium for iOS/Android apps)
- 💾 **Extremely resource-constrained environments** (~300-400MB browsers)
- 🧩 **Need for mature third-party tool ecosystem** (smaller plugin library)

</v-clicks>

---
hideInToc: true
---

### Decision Matrix

<div class="grid grid-cols-2 gap-6">

<div class="bg-green-50 p-4 rounded">

#### Choose Playwright ✅

- New project
- Modern web stack
- Need reliability
- Cross-browser testing
- Network mocking needed
- Fast test execution
- Active Microsoft support

</div>

<div class="bg-red-50 p-4 rounded">

#### Choose Selenium ⚠️

- Legacy browser support
- Large existing test suite
- Mature ecosystem needed
- Multi-language requirements
- Established team expertise
- Desktop apps
- Native mobile apps

</div>

</div>