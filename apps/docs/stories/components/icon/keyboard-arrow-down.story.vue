<script setup lang="ts">
import { Icon } from '@koralle/ui'
</script>

<template>
  <Story
    title="Components / Icon / KeyboardArrowDown"
    :layout="{ type: 'grid', width: '90%' }"
  >
    <Variant title="Type">
      <Icon
        icon="keyboard_arrow_down"
        type="outlined"
      />
      <Icon
        icon="keyboard_arrow_down"
        type="rounded"
      />
      <Icon
        icon="keyboard_arrow_down"
        type="sharp"
      />
    </Variant>

    <Variant title="Weight">
      <Icon
        icon="keyboard_arrow_down"
        :weight="100"
      />
      <Icon
        icon="keyboard_arrow_down"
        :weight="200"
      />
      <Icon
        icon="keyboard_arrow_down"
        :weight="300"
      />
      <Icon
        icon="keyboard_arrow_down"
        :weight="400"
      />
      <Icon
        icon="keyboard_arrow_down"
        :weight="500"
      />
      <Icon
        icon="keyboard_arrow_down"
        :weight="600"
      />
      <Icon
        icon="keyboard_arrow_down"
        :weight="700"
      />
    </Variant>

    <Variant title="Grade">
      <Icon
        icon="keyboard_arrow_down"
        :grade="-25"
      />
      <Icon
        icon="keyboard_arrow_down"
        :grade="0"
      />
      <Icon
        icon="keyboard_arrow_down"
        :grade="200"
      />
    </Variant>

    <Variant title="Size">
      <Icon
        icon="keyboard_arrow_down"
        :size="16"
      />
      <Icon
        icon="keyboard_arrow_down"
        :size="20"
      />
      <Icon
        icon="keyboard_arrow_down"
        :size="24"
      />
      <Icon
        icon="keyboard_arrow_down"
        :size="32"
      />
      <Icon
        icon="keyboard_arrow_down"
        :size="40"
      />
      <Icon
        icon="keyboard_arrow_down"
        :size="48"
      />
    </Variant>
  </Story>
</template>

<style lang="css" scoped></style>

<docs lang="md">
# Icon
</docs>
