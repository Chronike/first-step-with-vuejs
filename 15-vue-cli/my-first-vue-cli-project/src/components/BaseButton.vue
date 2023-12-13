<template>
  <button
    :class="{
      btn: true,
      'btn--primary': variant,
      'btn--secondary': !variant,
    }"
    @click="press"
  >
    <slot />{{ btntext }}
  </button>
</template>

<script>
export default {
  props: {
    btntext: String,
    variant: Boolean,
  },
  methods: {
    press() {
      this.$emit("press");
    },
  },
};
</script>

<style scoped>
.btn {
  border: 3px solid transparent;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}

.btn--primary {
  border-color: var(--primary-dark);
  background-color: var(--primary);
  color: #fff;
}

.btn--primary:hover {
  border-color: var(--primary);
  background-color: var(--primary-dark);
}

.btn--secondary {
  border-color: var(--primary);
  background-color: transparent;
  color: var(--primary);
}

.btn--secondary:hover {
  background-color: var(--primary);
  color: #fff;
}
</style>
