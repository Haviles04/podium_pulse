<template>
  <form class="mt-10 [&>*]:m-8">
    <label for="years"
      ><p class="text-2xl">{{ label }}</p>
      <select
        v-model="value"
        :name="label"
        :id="label + 'select'"
        size="5"
        class="bg-background text-primary block"
        @change="handleChange"
      >
        <option v-for="item in items" :value="item.round ?? item">
          {{ item.raceName ?? item }}
        </option>
      </select>
    </label>
  </form>
</template>

<script setup>
const { modelValue, label, items } = defineProps([
  "modelValue",
  "label",
  "items",
]);
const emit = defineEmits(["update:modelValue", "handleResultsChange"]);

const value = computed({
  get() {
    return modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const handleChange = () => {
  emit("handleResultsChange");
};
</script>
