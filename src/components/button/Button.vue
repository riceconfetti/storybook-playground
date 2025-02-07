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
    variant?: "primary" | "secondary" | "outline" | "ghost";
  }>(),
  { variant: "secondary" }
);

const emit = defineEmits<{
  (e: "click", id: number): void;
}>();

const button = tv({
  base: "flex flex-1 items-center justify-center gap-2 rounded-sm font-bold uppercase tracking-wide outline-0 transition active:translate-y-0.5 p-2 px-4",
  variants: {
    style: {
      primary:
        "bg-secondary-200 text-primary-700 hover:bg-secondary-300",
      secondary:
        "bg-primary-700 text-neutral-50 hover:bg-primary-600 dark:bg-primary-800",
      outline:
        "ring-2 ring-primary-700/50 text-neutral-50 hover:bg-primary-600 hover:ring-primary-600",
      ghost: "hover:bg-primary-600 text-neutral-50",
    },
  },
  defaultVariants: {
    style: "secondary",
  },
});

const classes = computed(() => button({ style: props.variant }));

const onClick = () => {
  emit("click", 1);
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick">
    <slot name="icon" />
    {{ label }}
  </button>
</template>
