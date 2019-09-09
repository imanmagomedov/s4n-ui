export const BaseMixin = {
  data: () => {
    return {
      baseClass: 'none'
    }
  },
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
    success: Boolean
  },
  computed: {
    getSizeClass () {
      if (this.small) return ' ' + this.baseClass + '-small'
      if (this.large) return ' ' + this.baseClass + '-large'
      return ' ' + this.baseClass + '-medium'
    },
    getColorClass () {
      if (this.primary) return ' ' + this.baseClass + '-primary'
      if (this.warning) return ' ' + this.baseClass + '-warning'
      if (this.info) return ' ' + this.baseClass + '-info'
      if (this.error) return ' ' + this.baseClass + '-error'
      if (this.dark) return ' ' + this.baseClass + '-dark'
      if (this.light) return ' ' + this.baseClass + '-light'
      if (this.link) return ' ' + this.baseClass + '-link'
      if (this.success) return ' ' + this.baseClass + '-success'
      return ''
    }
  }
}
