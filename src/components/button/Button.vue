<script lang="ts" setup>
import { computed } from "vue";
import { tv } from "tailwind-variants";
const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * style of the button
     */
    style?: "primary" | "secondary" | "outline" | "ghost";
    /**
     * size of the button
     */
    size?: "small" | "medium" | "large";
  }>(),
  { style: "secondary" }
);

const emit = defineEmits<{
  (e: "click", id: number): void;
}>();

const button = tv({
  base: "flex flex-1 items-center justify-center gap-2 rounded-md font-bold uppercase tracking-wide outline-0 transition active:translate-y-0.5 p-2 px-4",
  variants: {
    style: {
      primary: "bg-secondary-200 text-primary-700",
      secondary: "bg-primary-700 text-primary-100",
      outline: "border-2 border-primary-50/20 text-primary-200",
      ghost: "",
    },
  },
  defaultVariants: {
    style: "secondary",
  },
});

const classes = computed(() => button({ style: props.style }));
const color = computed(() => {
  switch (props.style) {
    case "primary":
      return {
        "--background": "var(--color-secondary-200)",
        "--foreground": "var(--color-primary-700)",
      };
    case "secondary":
      return {
        "--background": "var(--color-primary-700)",
        "--foreground": "var(--color-primary-200)",
      };

    case "outline":
      return {
        "--background": "var(--color-primary-700)",
        "--foreground": "var(--color-secondary-200)",
      };
  }
});

const onClick = () => {
  emit("click", 1);
};
</script>

<template>
  <button
    type="button"
    :class="classes"
    @click="onClick"
    :style="color">
    {{ label }}
  </button>
</template>

<style scoped>
:root {
  --primary: var(--color-primary-700);
  --primary-foreground: var(--color-primary-100);

  --secondary: var(--color-saffron);
}
</style>
