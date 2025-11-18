import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log("Step 1: Navigating to UIT student portal...");
    await page.goto("https://student.uit.edu.vn/");
    await page.waitForLoadState("networkidle");

    console.log("Step 2: Filling in username...");
    const usernameField = page.getByRole("textbox", { name: "Tên truy cập *" });
    await usernameField.click();
    await usernameField.fill("23520161");

    console.log("Step 3: Filling in password...");
    const passwordField = page.getByRole("textbox", { name: "Mật khẩu *" });
    await passwordField.click();
    await passwordField.fill("Abcd1234");

    console.log("Step 4: Parsing CAPTCHA question...");
    // Find the CAPTCHA label text
    const captchaLabel = await page
      .locator(
        'label[for*="captcha"], .form-item:has(input[name*="captcha"]) label',
      )
      .first()
      .textContent();

    if (!captchaLabel) {
      throw new Error("Could not find CAPTCHA question");
    }

    console.log(`CAPTCHA question: ${captchaLabel}`);

    // Extract answer from brackets
    const match = captchaLabel.match(/\(([^)]+)\)/);
    if (!match) {
      throw new Error("Could not extract CAPTCHA answer from brackets");
    }

    const captchaAnswer = match[1];
    console.log(`CAPTCHA answer: ${captchaAnswer}`);

    console.log("Step 5: Filling in CAPTCHA...");
    // Find the CAPTCHA textbox - it should be the third textbox or we can use partial name match
    const captchaField = page
      .getByRole("textbox")
      .filter({ hasText: /What|abbreviation/i })
      .or(page.locator('input[name*="captcha"]'))
      .first();

    await captchaField.click();
    await captchaField.fill(captchaAnswer);

    console.log("Step 6: Clicking login button...");
    await page.getByRole("button", { name: "Đăng nhập" }).click();

    // Wait for navigation after login
    await page.waitForURL("**/user/**", { timeout: 10000 });
    console.log("Login successful!");

    console.log("Step 7: Navigating to schedule page...");
    await page.goto("https://student.uit.edu.vn/sinhvien/tkb");
    await page.waitForLoadState("networkidle");

    console.log("Step 8: Extracting course information...");
    const courses = await page.evaluate(() => {
      const bodyText = document.body.innerText;
      const lines = bodyText.split("\n");
      const results = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        // Match course codes with pattern: ^[A-Z]{2,3}\d*\.\w+(\.\d+)?
        if (line.match(/^[A-Z]{2,3}\d+\.[A-Z]\d+(?:\.\d+)?$/)) {
          // Get the next few lines to build the full entry
          let fullEntry = line;
          for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
            const nextLine = lines[j].trim();
            if (nextLine && !nextLine.match(/^Tiết|^Thứ|^\(|^VN$|^P /)) {
              fullEntry += " " + nextLine;
            }
            // Stop when we hit another course code or Sĩ số line
            if (
              lines[j + 1]?.trim().match(/^[A-Z]{2,3}\d+\.[A-Z]\d+/) ||
              lines[j].trim().match(/^Sĩ số \d+$/)
            ) {
              break;
            }
          }
          results.push(fullEntry);
        }
      }

      return results;
    });

    console.log(
      "\n=== COURSES MATCHING PATTERN /^[A-Z]{2,3}\\d*\\.\\w+(\\.\\d+)? .*/ ===\n",
    );
    courses.forEach((course, index) => {
      console.log(`${index + 1}. ${course}`);
    });
    console.log(`\nTotal courses found: ${courses.length}`);
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  } finally {
    console.log("\nClosing browser...");
    await browser.close();
  }
}

// Run the script
main().catch(console.error);
