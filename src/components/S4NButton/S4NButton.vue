<template>
  <button
    @click="onClick"
    :class="getClasses"
  >
    <slot></slot>
  </button>
</template>

<script>
import { BaseMixin } from '@/mixins/BaseMixin'

export default {
  name: 'S4NButton',

  props: {
    // Store
    disabled: Boolean
  },

  data: () => {
    return {
      baseClass: 's4n-btn'
    }
  },

  mixins: [ BaseMixin ],

  computed: {
    getClasses () {
      let currentClasses = this.baseClass
      // Size class
      currentClasses += this.getSizeClass
      // Color class
      currentClasses += this.getColorClass
      // Store classes
      if (this.disabled) currentClasses += ' ' + this.baseClass + '-disabled'
      return currentClasses
    }
  },

  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
