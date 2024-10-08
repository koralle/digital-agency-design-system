<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icon.vue'
import { LinkTag, useLink } from '../composables/useLinkComponent'
import { useDropDownAnimation } from '../composables/useDropDownAnimation'
import iconArrow from '@/assets/images/icon_arrow_accordion.svg'
import iconGlobe from '@/assets/images/icon_globe.svg'
import iconCheck from '@/assets/images/icon_check.svg'

type Props = {
  /** 言語リスト */
  languageList: { label: string; link: string; isCurrent: boolean }[]
  /** リンクタグ */
  linkTag: LinkTag
  /** サイズ */
  size?: 'small' | 'large'
}

const props = withDefaults(defineProps<Props>(), { size: 'small' })

const languageSelectorElement = ref<HTMLDetailsElement | null>(null)
const languageListElement = ref<HTMLElement | null>(null)
const languageItemElement = ref<HTMLElement | null>(null)

const { LinkComponent } = useLink({ tag: props.linkTag })

const { isOpened, hasAnimation, handleDropDown } = useDropDownAnimation(
  languageSelectorElement,
  languageListElement,
  languageItemElement,
)

const languageList = ref(props.languageList)
</script>
<template>
  <details
    ref="languageSelectorElement"
    class="languageSelector"
    :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }, size]"
  >
    <summary
      class="summary"
      @click="handleDropDown"
    >
      <Icon
        :iconSrc="iconGlobe"
        :width="16"
        :height="16"
        color="var(--color-text-body)"
        class="globeIcon"
        :ariaHidden="true"
        role="img"
      />
      <span class="summaryInner">Language</span>
      <Icon
        :iconSrc="iconArrow"
        :width="12"
        :height="7"
        color="var(--color-text-body)"
        class="dropDownIcon"
        :ariaHidden="true"
        role="img"
      />
    </summary>
    <div
      ref="languageListElement"
      class="languageList"
    >
      <div
        ref="languageItemElement"
        class="languageListInner"
      >
        <ul>
          <li
            v-for="item in languageList"
            :key="item.label"
            class="languageItem"
            :class="{ isCurrent: item.isCurrent }"
          >
            <Icon
              v-show="item.isCurrent"
              :iconSrc="iconCheck"
              :width="16"
              :height="16"
              color="var(--color-text-link)"
              class="checkIcon"
              :ariaHidden="true"
              role="img"
            />

            <LinkComponent
              :to="item.link"
              class="link"
              >{{ item.label }}</LinkComponent
            >
          </li>
        </ul>
      </div>
    </div>
  </details>
</template>
<style lang="scss" scoped>
@use '@/assets/style/utils/utils.scss' as *;

.languageSelector {
  // アニメーションが有効な場合はタイミングを上書き
  &.isOpened {
    .dropDownIcon {
      transform: rotate(180deg);
    }

    .languageList {
      border-color: var(--color-border-divider);
    }
  }

  &:not(.hasAnimation) {
    &[open] {
      .dropDownIcon {
        transform: rotate(180deg);
      }
    }
  }

  /** 大きいサイズ */
  &.large {
    .summary {
      height: 28px;
      padding: 0 5px 0 28px;
    }

    .globeIcon {
      top: 5px;
      width: 20px;
      height: 20px;
    }

    .summaryInner {
      font-size: pxToRem(16);
    }

    .link {
      font-size: pxToRem(16);
    }
  }
}

.summary {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  padding: 0 5px 0 24px;
  margin-bottom: 6px;
  font-size: pxToRem(14);
  line-height: 1;
  letter-spacing: 0.04em;
  border-radius: 4px;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:-webkit-details-marker {
    display: none;
  }

  &::-webkit-details-marker {
    // Safariの三角アイコン
    display: none;
  }
}

.globeIcon {
  position: absolute;
  top: 5px;
  left: 2px;
}

.dropDownIcon {
  position: absolute;
  top: 12px;
  right: 6px;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.languageList {
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 6px;
  transition:
    height var(--base-duration),
    border-color var(--base-duration) var(--easing-out-expo);
}

.languageListInner {
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: var(--color-background-primary);
}

.link {
  display: block;
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 20px;
  font-size: pxToRem(14);
  color: var(--color-text-body);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.languageItem {
  position: relative;
  display: flex;
  padding-right: 2px;
  padding-left: 2px;
  font-size: pxToRem(16);
  line-height: 1.7;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    background-color: var(--color-background-secondary);
  }

  &.isCurrent {
    .link {
      position: relative;
      display: block;
      font-weight: var(--weight-bold);
      color: var(--color-text-link);
      background-color: var(--color-background-link);

      &::before {
        position: absolute;
        top: 0;
        left: -2px;
        display: block;
        width: calc(100% + 4px);
        height: 100%;
        content: '';
      }
    }
  }

  .checkIcon {
    position: absolute;
    top: 8px;
    left: 4px;
    z-index: 1;
  }
}
</style>
