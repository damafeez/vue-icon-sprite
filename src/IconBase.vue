<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-only
    class="vue-feather"
    v-bind="$attrs"
    v-on="$listeners"
    v-html="svg"
  />
</template>

<script>
import feather from 'feather-icons'
export default {
  name: 'IconBase',
  props: {
    name: {
      type: String,
      required: true,
    },
    // src: {
    //   type: String,
    //   default: require(`@/assets/icons.svg`),
    // },
  },
  computed: {
    svg() {
      const icon = feather.icons[this.name]
      return icon ? icon.toSvg().match(/<svg.*?>(.*?)<\/svg>/)[1] : undefined
    },
  },
}
</script>
<style lang="scss">
.vue-feather {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 2;
  stroke: currentColor;
  fill: currentColor;
  &[fill-only] {
    fill: currentColor;
    stroke: none;
  }
  &[stroke-only] {
    stroke: currentColor;
    fill: none;
  }

  // convenience classes
  &.xs,
  &[xs] {
    font-size: 0.5rem;
  }
  &.sm,
  &[sm] {
    font-size: 0.7rem;
  }
  &.md,
  &[md] {
    font-size: 1.5rem;
  }
  &.lg,
  &[lg] {
    font-size: 2rem;
  }
  &.xl,
  &[xl] {
    font-size: 4rem;
  }
}
</style>
