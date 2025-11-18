---
layout: center
class: text-center
transition: slide-up
---

# Playwright vs Selenium

How do they compare?

---
hideInToc: true
---

### Playwright vs Selenium - Comparison

| Feature              | Playwright                                                 | Selenium                                |
| -------------------- | ---------------------------------------------------------- | --------------------------------------- |
| **Release Year**     | 2020                                                       | 2004                                    |
| **Maintained By**    | Microsoft                                                  | Open Source Community                   |
| **Language Support** | JavaScript, Python, .NET, Java (official) + Go (community) | Multiple (Java, Python, C#, Ruby, etc.) |
| **Browser Support**  | Chromium, Firefox, WebKit                                  | Chrome, Firefox, Safari, Edge, IE       |
| **Architecture**     | Browser DevTools Protocol                                  | WebDriver Protocol                      |

---
hideInToc: true
---

### Playwright vs Selenium - Key Differences

| Feature              | Playwright               | Selenium                  |
| -------------------- | ------------------------ | ------------------------- |
| **Auto-waiting**     | Built-in, intelligent    | Manual waits needed       |
| **Network Control**  | Native support           | Limited/complex           |
| **Parallel Testing** | Native support           | Requires additional setup |
| **Setup Complexity** | Simple, managed browsers | Manual driver management  |

---
hideInToc: true
---

### Playwright vs Selenium - Performance & Community

| Feature              | Playwright         | Selenium                           |
| -------------------- | ------------------ | ---------------------------------- |
| **Speed**            | Faster             | Slower                             |
| **Test Reliability** | High (less flaky)  | Moderate (requires careful design) |
| **Community Size**   | Growing rapidly    | Very large, mature                 |
| **Learning Curve**   | Moderate (new API) | Lower (established patterns)       |

<div class="mt-8 p-4 bg-blue-50 rounded">

**💡 Key Takeaway:** Playwright offers modern architecture and better reliability, while Selenium has a larger ecosystem and longer track record.

</div>

---
hideInToc: true
layout: figure
figureUrl: asset/github-microsoft-playwright-repos.png
---

### Playwright repos

---
hideInToc: true
layout: figure
figureUrl: asset/github-selenium-repo.png
---

### Selenium monorepo
