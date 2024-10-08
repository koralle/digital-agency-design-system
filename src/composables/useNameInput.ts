import { computed, defineComponent, h, readonly, ref, watch } from 'vue'
import TextInput from '../components/TextInput.vue'

type Arg = {
  label: string
  placeHolder?: string
  supportText?: string
  isRequired: boolean
}

/**
 * 氏名のインプットコンポーネントを作成するcomposableです
 */
export const useNameInput = ({
  label,
  placeHolder,
  supportText,
  isRequired,
}: Arg) => {
  const name = ref<string>('')
  const isChanged = ref<boolean>(false)
  const isValid = computed<boolean>(() => {
    // 必須事項でない場合はつねにtrue
    if (!isRequired) {
      return true
    }
    // 内容が変更されて、空の場合はinvalid
    if (isChanged.value && name.value === '') {
      return false
    }
    // 上記以外ではvalid
    return true
  })

  watch(name, () => {
    // 入力内容が変更されたらisChangedをtrueにする
    if (!isChanged.value && name.value !== '') {
      isChanged.value = true
    }
  })

  // コンポーネント描画関数
  const render = () =>
    h(TextInput, {
      type: 'text',
      label,
      modelValue: name.value,
      placeHolder,
      supportText,
      errorText: '必須項目です',
      isRequired,
      isValid: isValid.value,
      'onUpdate:modelValue': (value: string) => {
        name.value = value
      },
    })

  const UseNameInputComponent = defineComponent({ render })
  return { name: readonly(name), UseNameInputComponent }
}
