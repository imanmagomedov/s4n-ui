<template>
  <div
    :class="getClasses"
  >
    <h4 :class="baseClass + '__header'" v-if="hasHeaderSlot">
      <slot name="header"></slot>
    </h4>
    <slot></slot>
  </div>
</template>

<script>
import { BaseMixin } from '@/mixins/BaseMixin'

export default {
  name: 'S4NAlert',

  mixins: [ BaseMixin ],

  data: () => {
    return {
      baseClass: 's4n-alert'
    }
  },

  computed: {
    getClasses () {
      let currentClasses = this.baseClass
      // Color class
      currentClasses += this.getColorClass
      return currentClasses
    },
    hasHeaderSlot () {
      return !!this.$slots.header
    }
  }
}
</script>
