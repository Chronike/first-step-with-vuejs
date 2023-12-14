<template>
  <div class="user-list__details">
    <h2 class="user-list__details-hl">Details</h2>
    <dl v-if="selectedUser">
      <dt>name:</dt>
      <dd>{{ selectedUser.name }}</dd>

      <dt>email:</dt>
      <dd>{{ selectedUser.email || "-" }}</dd>

      <dt>phone:</dt>
      <dd>{{ selectedUser.phone || "-" }}</dd>

      <dt>company:</dt>
      <dd>
        {{ selectedUser.company.name || "-" }}
      </dd>
    </dl>
    <p class="user-list__details-hint" v-else>
      Es wurde kein Nutzer gefunden / ausgewählt
    </p>
  </div>
</template>

<script>
export default {
  props: {
    selectedUser: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.user-list__details {
  width: 60%;
  padding: 1rem;
  color: #192a56;
}
.user-list__details-hl {
  color: #00a8ff;
}
.user-list__details dd {
  margin-bottom: 1rem;
}
.user-list__details-hint {
  border: 2px solid #e84118;
  border-radius: 5px;
  color: #e84118;
  padding: 0.5rem;
}
</style>
