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

- **New projects** starting from scratch
- **Modernizing legacy test suites** with better reliability
- **CI/CD pipeline automation** with Docker support
- **Projects with cross-browser requirements** (Chrome, Firefox, Safari)
- **Multi-language teams** (JavaScript, Python, .NET, Java)

<div class="mt-4 p-4 bg-green-50 rounded text-sm">

✨ **Official language support:** JavaScript/TypeScript, Python, .NET (C#/F#), Java<br>
🌟 **Community support:** Go, Ruby, and others

</div>

---
hideInToc: true
layout: two-cols-header
---

### ✅ Ideal For - Test Types

::left::

#### Primary Use Cases

- **E2E functional testing**
- **Integration testing** (frontend + backend)
- **Visual regression testing**
- **API testing** with network interception

::right::

#### Additional Capabilities

- **Performance testing** (basic metrics)
- **Accessibility testing** (with axe integration)
- **Mobile emulation** testing
- **Screenshot & video capture**

---
hideInToc: true
---

### ✅ Ideal For - Automation Scenarios

**Beyond Testing:**

- **Web scraping** - Extract data from dynamic websites with JavaScript rendering
- **PDF generation** - Automated document creation from web pages
- **Screenshot capture** - Visual documentation and monitoring
- **Browser automation** - Social media interactions, form submissions
- **Content migration** - Bulk data operations across web platforms
- **Data collection** - Automated information gathering and monitoring
- **Task automation** - Repetitive web-based workflows

<div class="mt-4 p-4 bg-blue-50 rounded text-sm">

💡 **Why Playwright excels at automation:** Built-in waiting mechanisms, network interception, and browser context isolation make it more reliable than traditional scraping tools.

</div>

---
hideInToc: true
---

### ❌ Avoid When

**Not recommended for:**

- **Legacy IE support required** (IE is not supported)
- **Team heavily invested in Selenium ecosystem** (migration cost)
- **Desktop application testing** (use Electron alternatives instead)
- **Mobile native apps** (use Appium for iOS/Android apps)
- **Extremely resource-constrained environments** (~300-400MB browsers)
- **Need for mature third-party tool ecosystem** (smaller plugin library)

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
