<template>
  <tr class=".table-item__table td">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <slot
        name="actionCol"
        :btntext="btntext"
        :variant="variant"
        :isbn="isbn"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    title: String,
    isbn: String,
    btntext: String,
    variant: Boolean,
    isBookmarked: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
