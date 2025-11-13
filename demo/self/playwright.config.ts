import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "brave",
      use: {
        browserName: "chromium",
        launchOptions: {
          executablePath: "/usr/bin/brave",
        },
      },
    },
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  use: {
    baseURL: "https://www.saucedemo.com/",
    // headless: false,
    screenshot: "on",
    video: "on",
    launchOptions: {
      // slowMo: 1000
    },
  },
  reporter: [
    ["line"],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
  testDir: "./test",
};

export default config;
