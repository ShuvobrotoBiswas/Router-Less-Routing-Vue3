<template>
  <div style="margin-top: 10%">
    <div class="row flex-center text-h4">Welcome to this experiment Step-2</div>
    <div class="row flex-center text-h4 text-red">Routerless routing</div>
    <div class="row flex-center">
      <q-btn
        flat
        label="Go to Page 0 (Home)"
        color="primary"
        @click="$router.push({ name: 'home' })"
      />
      <q-btn
        flat
        label="Go back to Page 1 (Login)"
        color="primary"
        @click="$router.push({ name: 'login' })"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
