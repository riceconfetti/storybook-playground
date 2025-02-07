import type { Preview } from "@storybook/vue3";
import "../src/tailwind.css";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: theme,
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#061433" },
        { name: "Light", value: "#1c2d4e" },
      ],
    },
  },
};

export default preview;
