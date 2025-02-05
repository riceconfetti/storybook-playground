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
  },
};

export default preview;
