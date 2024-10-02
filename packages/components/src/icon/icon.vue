<script setup lang="ts">
import type { IconProps } from './icon'
import { computed, useId } from 'vue'

defineOptions({
  name: 'Icon',
})

const {
  id = useId() as string,
  role = '',
  icon = '',
  color = 'white',
  type = 'outlined',
  weight = 400,
  grade = 0,
  size = 48,
  fill = false,
  ariaLabel = '',
  ariaHidden = false,
} = defineProps<IconProps>()

const iconClass = computed(() => `material-symbols-${type}`)
const iconStyle = computed(() => ({
  'font-size': `${size}px`,
  'font-variation-settings': `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size}`,
  color: color,
}))
</script>

<template>
  <span
    :id="id"
    :role="role"
    class="ui-icon"
    :class="iconClass"
    :style="iconStyle"
    v-bind="$attrs"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden"
  >
    {{ icon }}
  </span>
</template>

<style lang="css" scoped></style>
