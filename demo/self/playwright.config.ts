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
  ],
  use: {
    // headless: false,
    screenshot: "on",
    video: "on",
    launchOptions: {
      slowMo: 1000,
    },
  },
  reporter: [
    ["json"],
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
