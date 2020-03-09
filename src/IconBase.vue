<template>
  <svg class="svg-icon" v-bind="$attrs" v-on="$listeners">
    <use :xlink:href="`${source}#${name}`" />
  </svg>
</template>
<script>
export default {
  name: 'IconBase',
  props: {
    name: {
      type: String,
      required: true,
    },
    src: {
      type: String,
    },
  },
  computed: {
    source() {
      if (this.src) return this.src
      if (this.$IconBaseSrc) return this.$IconBaseSrc
      try {
        return require('@/assets/icons.svg')
      } catch (error) {
        return console.error('[vue-icon-sprites]: sprites not found')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  color: inherit;
  stroke: currentColor;
  fill: currentColor;
}
.svg-icon.xs {
  font-size: 0.5rem;
}
.svg-icon.sm {
  font-size: 0.7rem;
}
.svg-icon.md {
  font-size: 1.5rem;
}
.svg-icon.lg {
  font-size: 2rem;
}
.svg-icon.xl {
  font-size: 4rem;
}
</style>
