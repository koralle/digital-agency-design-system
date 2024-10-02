<script setup lang="ts">
import { Icon } from '@koralle/ui'
</script>

<template>
  <Story title="Components / Icon / KeyboardArrowRight">
    <Variant title="Type">
      <Icon
        icon="keyboard_arrow_right"
        type="outlined"
      />
      <Icon
        icon="keyboard_arrow_right"
        type="rounded"
      />
      <Icon
        icon="keyboard_arrow_right"
        type="sharp"
      />
    </Variant>

    <Variant title="Weight">
      <Icon
        icon="keyboard_arrow_right"
        :weight="100"
      />
      <Icon
        icon="keyboard_arrow_right"
        :weight="200"
      />
      <Icon
        icon="keyboard_arrow_right"
        :weight="300"
      />
      <Icon
        icon="keyboard_arrow_right"
        :weight="400"
      />
      <Icon
        icon="keyboard_arrow_right"
        :weight="500"
      />
      <Icon
        icon="keyboard_arrow_right"
        :weight="600"
      />
      <Icon
        icon="keyboard_arrow_right"
        :weight="700"
      />
    </Variant>

    <Variant title="Grade">
      <Icon
        icon="keyboard_arrow_right"
        :grade="-25"
      />
      <Icon
        icon="keyboard_arrow_right"
        :grade="0"
      />
      <Icon
        icon="keyboard_arrow_right"
        :grade="200"
      />
    </Variant>

    <Variant title="Size">
      <Icon
        icon="keyboard_arrow_right"
        :size="16"
      />
      <Icon
        icon="keyboard_arrow_right"
        :size="20"
      />
      <Icon
        icon="keyboard_arrow_right"
        :size="24"
      />
      <Icon
        icon="keyboard_arrow_right"
        :size="32"
      />
      <Icon
        icon="keyboard_arrow_right"
        :size="40"
      />
      <Icon
        icon="keyboard_arrow_right"
        :size="48"
      />
    </Variant>
  </Story>
</template>

<style lang="css" scoped></style>

<docs lang="md">
# Icon
</docs>
