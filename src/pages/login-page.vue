<template>
  <div style="margin-top: 10%">
    <div class="row flex-center text-h4">Welcome to this experiment Step-1</div>
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
        label="Go to Page 2 (Users)"
        color="primary"
        @click="$router.push({ name: 'users' })"
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
