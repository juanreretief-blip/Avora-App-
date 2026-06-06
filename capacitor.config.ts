import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.avora.prototype",
  appName: "Avora",
  webDir: "dist",
  bundledWebRuntime: false,
  android: {
    backgroundColor: "#faf9f5",
  },
};

export default config;
