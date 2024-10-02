<script setup lang="ts">
import { Icon } from '@koralle/ui'
</script>

<template>
  <Story title="Components / Icon / KeyboardArrowUp">
    <Variant title="Type">
      <Icon
        icon="keyboard_arrow_up"
        type="outlined"
      />
      <Icon
        icon="keyboard_arrow_up"
        type="rounded"
      />
      <Icon
        icon="keyboard_arrow_up"
        type="sharp"
      />
    </Variant>

    <Variant title="Weight">
      <Icon
        icon="keyboard_arrow_up"
        :weight="100"
      />
      <Icon
        icon="keyboard_arrow_up"
        :weight="200"
      />
      <Icon
        icon="keyboard_arrow_up"
        :weight="300"
      />
      <Icon
        icon="keyboard_arrow_up"
        :weight="400"
      />
      <Icon
        icon="keyboard_arrow_up"
        :weight="500"
      />
      <Icon
        icon="keyboard_arrow_up"
        :weight="600"
      />
      <Icon
        icon="keyboard_arrow_up"
        :weight="700"
      />
    </Variant>

    <Variant title="Grade">
      <Icon
        icon="keyboard_arrow_up"
        :grade="-25"
      />
      <Icon
        icon="keyboard_arrow_up"
        :grade="0"
      />
      <Icon
        icon="keyboard_arrow_up"
        :grade="200"
      />
    </Variant>

    <Variant title="Size">
      <Icon
        icon="keyboard_arrow_up"
        :size="16"
      />
      <Icon
        icon="keyboard_arrow_up"
        :size="20"
      />
      <Icon
        icon="keyboard_arrow_up"
        :size="24"
      />
      <Icon
        icon="keyboard_arrow_up"
        :size="32"
      />
      <Icon
        icon="keyboard_arrow_up"
        :size="40"
      />
      <Icon
        icon="keyboard_arrow_up"
        :size="48"
      />
    </Variant>
  </Story>
</template>

<style lang="css" scoped></style>

<docs lang="md">
# Icon
</docs>
