<script lang="ts" setup>
import { watch } from 'vue'
import BasicButton from '../components/BasicButton.vue'
import Layout from '../components/Layout.vue'
import { useScrollLock } from '../composables/useScrollLock'
type Props = {
  /** ダイアログタイトル */
  title: string
  /** ダイアログの補助テキスト */
  text: string
  /** 主ボタンのラベル */
  labelPrimary: string
  /** 副ボタンのラベル */
  labelSecondary?: string
  /** 表示のv-model */
  modelValue: boolean
  /** 主ボタンのクリック時の処理 */
  onClickPrimary: () => void
  /** 副ボタンのクリック時の処理 */
  onClickSecondary?: () => void
}

const { lockScroll, releaseScroll } = useScrollLock()

const props = withDefaults(defineProps<Props>(), {
  labelSecondary: '',
  onClickSecondary: undefined,
})

const model = defineModel<boolean>()

const handleClickPrimary = () => {
  props.onClickPrimary()
  model.value = false
}

watch(
  () => props.modelValue,
  (modelValue) => {
    if (modelValue) {
      lockScroll()
    } else {
      releaseScroll()
    }
  },
)

const handleClickSecondary = () => {
  if (!props.onClickSecondary) {
    return
  }
  props.onClickSecondary()
  model.value = false
}
</script>
<template>
  <Teleport to="body">
    <Transition>
      <div
        v-show="modelValue"
        class="modalBg"
        role="dialog"
        :aria-modal="modelValue ? modelValue : undefined"
        :aria-hidden="!modelValue"
        tabindex="-1"
      >
        <layout class="modalWrapper">
          <div class="modal colStart-4 colEnd-10">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
            <div class="buttonWrapper">
              <BasicButton
                :label="labelPrimary"
                type="primary"
                class="button"
                @click="handleClickPrimary"
              ></BasicButton>
              <BasicButton
                v-if="handleClickSecondary"
                :label="labelSecondary"
                class="button"
                type="secondary"
                @click="handleClickSecondary"
              ></BasicButton>
            </div>
          </div>
        </layout>
      </div>
    </Transition>
  </Teleport>
</template>
<style lang="scss" scoped>
@use '@/assets/style/utils/utils.scss' as *;

.modalBg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 70%);

  &.v-enter-active,
  &.v-leave-active {
    transition: opacity var(--base-duration) var(--easing-out-quat);

    .modal {
      transition: transform var(--base-duration) var(--easing-out-quat);
    }
  }

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;

    .modal {
      transform: scale(0.8);
    }
  }
}

.modalWrapper {
  height: 100%;
}

.modal {
  align-self: center;
  padding: 40px 56px;
  background-color: var(--color-background-primary);
  border-radius: 12px;
}

.title {
  margin-bottom: 16px;
  font-size: pxToRem(22);
  font-weight: var(--weight-bold);
}

.text {
  font-size: pxToRem(16);
  line-height: 1.75;
}

.buttonWrapper {
  display: grid;
  grid-auto-flow: row;
  row-gap: 8px;
  margin-top: 40px;
}

.button {
  width: 100%;
}
</style>
