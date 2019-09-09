<template>
  <button
    @click="onClick"
    :class="getClasses"
  >
    <slot></slot>
  </button>
</template>

<script>
const baseClass = 's4n-btn'

export default {
  name: 'S4NButton',

  props: {
    // Sizes
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    // Colors
    primary: Boolean,
    warning: Boolean,
    info: Boolean,
    error: Boolean,
    dark: Boolean,
    light: Boolean,
    link: Boolean,
    success: Boolean,
    // Store
    disabled: Boolean
  },

  computed: {
    getSize: function () {
      if (this.small) return ' ' + baseClass + '-small'
      if (this.large) return ' ' + baseClass + '-large'
      return ' ' + baseClass + '-medium'
    },
    getClasses: function () {
      let currentClasses = baseClass
      // Size class
      currentClasses += this.getSize
      // Colors classes
      if (this.primary) currentClasses += ' ' + baseClass + '-primary'
      if (this.warning) currentClasses += ' ' + baseClass + '-warning'
      if (this.info) currentClasses += ' ' + baseClass + '-info'
      if (this.error) currentClasses += ' ' + baseClass + '-error'
      if (this.dark) currentClasses += ' ' + baseClass + '-dark'
      if (this.light) currentClasses += ' ' + baseClass + '-light'
      if (this.link) currentClasses += ' ' + baseClass + '-link'
      if (this.success) currentClasses += ' ' + baseClass + '-success'
      // Store classes
      if (this.disabled) currentClasses += ' ' + baseClass + '-disabled'

      return currentClasses
    }
  },

  methods: {
    onClick: function (event) {
      this.$emit('click', event)
    }
  }
}
</script>
