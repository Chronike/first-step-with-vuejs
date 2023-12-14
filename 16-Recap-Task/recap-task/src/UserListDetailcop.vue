<template>
  <div class="user-list__details">
    <h2 class="user-list__details-hl">Details</h2>
    <dl>
      <dt>name:</dt>
      <dd>Leanne Graham</dd>

      <dt>email:</dt>
      <dd>{Sincere@april.biz}</dd>

      <dt>phone:</dt>
      <dd>1-770-736-8031 x56442</dd>

      <dt>company:</dt>
      <dd>Romaguera-Crona</dd>
    </dl>
    <p class="user-list__details-hint">
      Es wurde kein Nutzer gefunden / ausgewählt
    </p>
  </div>
</template>

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
