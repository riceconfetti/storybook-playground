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
    style?: "default" | "outline" | "ghost";
    /**
     * size of the button
     */
    size?: "small" | "medium" | "large";
    /**
     * color of the button
     */
    color?: "primary" | "secondary" | "tertiary";
  }>(),
  { style: "default", color: "primary" }
);

const emit = defineEmits<{
  (e: "click", id: number): void;
}>();

const button = tv({
  base: "flex flex-1 items-center justify-center gap-2 rounded-md font-bold uppercase tracking-wide outline-0 transition active:translate-y-0.5 p-2 px-4",
  variants: {
    style: {
      default:
        "bg-(--primary) text-(--primary-foreground) dark:bg-(--btn-primary-dark) dark:text-(--text-primary-dark) ",
      outline: "",
      ghost: "",
    },
  },
  defaultVariants: {
    style: "default",
  },
});

const classes = computed(() => button({ style: props.style }));
const color = computed(() => ({
  "--btn-primary":
    props.color == "primary"
      ? "var(--color-oxfordblue)"
      : "var(--color-masblue)",
}));

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
  --primary: var(--color-spacecadet);
  --secondary: var(--color-saffron);
}
</style>
