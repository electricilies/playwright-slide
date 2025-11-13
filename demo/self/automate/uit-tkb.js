import { chromium } from "playwright";

async function scrapeUitSchedule() {
  const browser = await chromium.launch({
    headless: false,
    executablePath: "/usr/bin/brave",
  });
  const page = await browser.newPage();

  try {
    // Step 1: Navigate to the login page
    console.log("Navigating to https://student.uit.edu.vn/...");
    await page.goto("https://student.uit.edu.vn/");
    await page.waitForLoadState("networkidle");

    // Step 2: Fill in username
    console.log("Filling in username...");
    await page.getByRole("textbox", { name: "Tên truy cập" }).click();
    await page.getByRole("textbox", { name: "Tên truy cập" }).fill("23520161");

    // Step 3: Fill in password
    console.log("Filling in password...");
    await page.getByRole("textbox", { name: "Mật khẩu" }).click();
    await page
      .getByRole("textbox", { name: "Mật khẩu" })
      .fill(process.env.PASSWORD);

    // Step 4: Parse and fill CAPTCHA
    console.log("Solving CAPTCHA...");
    const captchaLabel = await page.evaluate(() => {
      const labels = Array.from(document.querySelectorAll("label"));
      const captchaLabel = labels.find(
        (label) =>
          label.textContent?.includes("What") ||
          label.textContent?.includes("abbreviation"),
      );
      return captchaLabel?.textContent || "";
    });

    // Extract the answer from parentheses
    const match = captchaLabel.match(/\(([^)]+)\)/);
    if (!match) {
      throw new Error("Could not parse CAPTCHA answer");
    }
    const captchaAnswer = match[1];
    console.log(`CAPTCHA answer: ${captchaAnswer}`);

    // Fill in CAPTCHA answer
    const captchaField = page.locator('input[type="text"]').nth(2);
    await captchaField.click();
    await captchaField.fill(captchaAnswer);

    // Step 5: Click login button
    console.log("Logging in...");
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    // Step 6: Navigate to schedule page
    console.log("Navigating to schedule page...");
    await page.goto("https://student.uit.edu.vn/sinhvien/tkb");
    await page.waitForLoadState("networkidle");

    // Step 7: Extract schedule data
    console.log("\nExtracting course information...");
    const coursePattern = /^[A-Z]{2,3}\d*\.\w+(\.\d+)? /;

    const courses = await page.evaluate(() => {
      const pattern = /[A-Z]{2,3}\d*\.\w+(\.\d+)?/;
      const allDivs = document.querySelectorAll("div");
      const results = [];

      allDivs.forEach((div) => {
        const immediateText = Array.from(div.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .map((node) => node.textContent?.trim() || "")
          .join("");

        if (pattern.test(immediateText)) {
          let container = div.parentElement;
          while (container && !container.classList.contains("views-field")) {
            if (container.tagName === "TD") {
              results.push(container.textContent?.trim() || "");
              break;
            }
            container = container.parentElement;
          }
        }
      });

      return [...new Set(results)];
    });

    // Filter and format courses matching the pattern
    console.log("\n=== MATCHING COURSES ===\n");
    courses.forEach((course) => {
      // Format the output to be more readable
      const formatted = course
        .replace(/([A-Z]{2,3}\d*\.\w+(\.\d+)?)/g, "\n$1 ")
        .replace(/(\d{2}\/\d{2}\/\d{2})/g, "\n  $1")
        .replace(/(VN|EN)/g, "\n  $1")
        .replace(/P\s+/g, "\n  Room: ")
        .replace(/Sĩ số/g, "\n  Size:")
        .trim();

      // Check if it starts with the pattern
      if (coursePattern.test(formatted)) {
        console.log(formatted);
        console.log("---");
      }
    });

    console.log("\n=== SCRAPING COMPLETED ===");
  } catch (error) {
    console.error("Error during scraping:", error);
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeUitSchedule();
