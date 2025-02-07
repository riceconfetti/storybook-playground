<script lang="ts" setup>
import Button from "../button/Button.vue";
import { RiCloseLine } from "@remixicon/vue";
import logo from "@/assets/logo.svg";

const props = withDefaults(
  defineProps<{
    /**
     * course code
     */
    code: string;
    /**
     * current course title
     */
    title: string;
    /**
     * current topic title
     */
    topic: string;
  }>(),
  {
    code: "C123",
    title: "Template Header",
    topic: "Component Library",
  }
);

defineEmits<{
  (event: "exit"): void;
}>();
</script>

<template>
  <header
    class="bg-primary-700 z-10 grid h-20 w-full grid-cols-[auto_auto_1fr] items-center gap-4 p-4 xl:p-2">
    <img
      class="h-8 w-24 object-contain object-center md:h-12 xl:h-16"
      :src="logo" />
    <div class="flex flex-col gap-1">
      <h1
        class="text-neutral-50 text-sm font-bold text-balance uppercase md:text-base">
        GFEBS {{ code }}
        {{ title }}
      </h1>
      <h2
        class="text-secondary-200 text-sm font-bold text-balance uppercase xl:inline">
        {{ topic }}
      </h2>
    </div>
    <Button
      id="app_exit"
      label="EXIT"
      variant="secondary"
      class="max-w-32 justify-self-end text-xs md:text-sm"
      @click="$emit('exit')">
      <template #icon>
        <RiCloseLine class="fill-currentColor size-6" />
      </template>
    </Button>
  </header>
</template>
