<script lang="ts" setup>
import { computed } from 'vue'
import { getRandomString } from '../utils/getRandomString'

type Props = {
  /** 値（v-modelでも使える） */
  modelValue: string
  /** インプットのラベルです */
  label: string
  /** テキスト入力のタイプです。未指定の場合はtextになります */
  type?:
    | 'text'
    | 'email'
    | 'tel'
    | 'number'
    | 'password'
    | 'date'
    | 'datetime-local'
    | 'search'
    | 'url'
    | 'week'
  /** プレースホルダのテキストです */
  placeHolder?: string
  /** 内容を補足するサポートテキスト */
  supportText?: string
  /** エラー時に表示するテキスト */
  errorText?: string
  /** 必須かどうか。未指定の場合はfalse */
  isRequired?: boolean
  /** 妥当性 */
  isValid?: boolean
  /** フォーカスアウト時のコールバック関数 */
  onBlur?: () => void
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  isRequired: false,
  isValid: true,
  placeHolder: '',
  isDisabled: false,
  supportText: undefined,
  errorText: undefined,
  onBlur: undefined,
})

const model = defineModel<string>()

// aria-describledby用のエラー文言のid名です
const errorIdName = `textInput${getRandomString()}`

// 状態に応じたクラス名を返します
const stateClassName = computed<string | null>(() => {
  if (props.isDisabled) {
    return 'isDisabled'
  }
  if (!props.isValid) {
    return 'isInvalid'
  }
  return null
})
</script>
<template>
  <div :class="stateClassName">
    <label class="textInputWrapper">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span
          class="requiredText"
          :class="isRequired ? null : 'optional'"
          >{{ isRequired ? '必須' : '任意' }}</span
        ></span
      >
      <span
        v-if="props.supportText !== undefined"
        class="supportText"
        >{{ props.supportText }}</span
      >
      <input
        v-model="model"
        class="textInput"
        :type="props.type"
        :placeholder="props.placeHolder"
        :required="props.isRequired"
        :aria-invalid="!isValid"
        :aria-describedby="errorIdName"
        :onBlur="onBlur"
        :disabled="props.isDisabled"
      />
    </label>

    <span
      v-if="props.errorText !== undefined"
      v-show="!props.isValid"
      :id="errorIdName"
      class="errorText"
      >{{ props.errorText }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/style/utils/utils.scss' as *;

.textInputWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.labelWrapper {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
}

.label {
  font-size: pxToRem(14);
}

.requiredText {
  margin-left: 8px;
  font-size: pxToRem(12);
  color: var(--color-text-alert);

  &.optional {
    color: var(--color-text-description);
  }
}

.textInput {
  padding: 12px 16px;
  font-size: pxToRem(16);
  border: 1px solid var(--color-border-field);
  border-radius: 8px;

  &::placeholder {
    color: var(--color-text-placeHolder);
  }
}

.supportText {
  display: block;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-description);
}

.errorText {
  display: block;
  margin-top: 8px;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-alert);
}

// エラー時のスタイル
.isInvalid {
  .label {
    color: var(--color-text-alert);
  }

  .textInput {
    border-color: var(--color-border-alert);
    box-shadow: 0 0 0 1px var(--color-border-alert);
  }
}

// 非活性時のスタイル
.isDisabled {
  .label {
    color: var(--color-text-disabled);
  }

  .textInput {
    background-color: var(--color-background-secondary);
    border-color: var(--color-border-disabled);
  }
}
</style>
