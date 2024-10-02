<script setup lang="ts">
import { useTemplateRef, defineExpose, useId } from 'vue'
import { ModalProps } from './modal'
import { onClickOutside } from '@koralle/composables'

const modalContentRefId = useId() ?? ('ui-modal-content' as const)
const modalContentRef = useTemplateRef<HTMLDivElement>(modalContentRefId)

const modalRefId = useId() ?? ('ui-modal' as const)
const modalRef = useTemplateRef<HTMLDialogElement>(modalRefId)

defineOptions({
  name: 'Modal',
  inheritAttrs: false,
})

const { title } = defineProps<ModalProps>()

defineExpose({
  showModal: () => modalRef.value?.showModal(),
})

onClickOutside(modalContentRef, () => {
  modalRef.value?.close()
})
</script>

<template>
  <Teleport to="body">
    <Transition>
      <dialog
        :ref="modalRefId"
        class="ui-modal"
      >
        <div :ref="modalContentRefId">
          <h1>{{ title }}</h1>
          <input type="text" />
          <input type="text" />
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>

<style lang="css" scoped>
@layer component;
:where(.ui-modal) {
  :where(&::backdrop) {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
