<template>
  <label class="text-primary" :for="label"
    ><span class="text-xl underline">{{ label }}</span>
    <select
      v-model="value"
      :name="label"
      :id="label + 'select'"
      size="5"
      class="bg-background text-primary block no-scrollbar m-1 border rounded-xl p-4 border-light"
      @change="handleChange"
    >
      <option v-for="item in items" :value="item.round ?? item">
        {{ item.raceName ?? item }}
      </option>
    </select>
  </label>
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
