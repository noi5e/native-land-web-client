import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },
  // OSS mode
  // generateOnly: true,
  // failOnDifference: true,
  // waitBeforeScreenshot: 30000,
  // Lost Pixel Platform (to use in Platform mode, comment out the OSS mode and uncomment this part )
  lostPixelProjectId: "clwrdm5tv1b1ty9qrfr9560g2",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
