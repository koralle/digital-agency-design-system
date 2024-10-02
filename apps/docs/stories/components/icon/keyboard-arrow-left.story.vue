<script setup lang="ts">
import { Icon } from '@koralle/ui'
</script>

<template>
  <Story title="Components / Icon / KeyboardArrowLeft">
    <Variant title="Type">
      <Icon
        icon="keyboard_arrow_left"
        type="outlined"
      />
      <Icon
        icon="keyboard_arrow_left"
        type="rounded"
      />
      <Icon
        icon="keyboard_arrow_left"
        type="sharp"
      />
    </Variant>

    <Variant title="Weight">
      <Icon
        icon="keyboard_arrow_left"
        :weight="100"
      />
      <Icon
        icon="keyboard_arrow_left"
        :weight="200"
      />
      <Icon
        icon="keyboard_arrow_left"
        :weight="300"
      />
      <Icon
        icon="keyboard_arrow_left"
        :weight="400"
      />
      <Icon
        icon="keyboard_arrow_left"
        :weight="500"
      />
      <Icon
        icon="keyboard_arrow_left"
        :weight="600"
      />
      <Icon
        icon="keyboard_arrow_left"
        :weight="700"
      />
    </Variant>

    <Variant title="Grade">
      <Icon
        icon="keyboard_arrow_left"
        :grade="-25"
      />
      <Icon
        icon="keyboard_arrow_left"
        :grade="0"
      />
      <Icon
        icon="keyboard_arrow_left"
        :grade="200"
      />
    </Variant>

    <Variant title="Size">
      <Icon
        icon="keyboard_arrow_left"
        :size="16"
      />
      <Icon
        icon="keyboard_arrow_left"
        :size="20"
      />
      <Icon
        icon="keyboard_arrow_left"
        :size="24"
      />
      <Icon
        icon="keyboard_arrow_left"
        :size="32"
      />
      <Icon
        icon="keyboard_arrow_left"
        :size="40"
      />
      <Icon
        icon="keyboard_arrow_left"
        :size="48"
      />
    </Variant>
  </Story>
</template>

<style lang="css" scoped></style>

<docs lang="md">
# Icon
</docs>
