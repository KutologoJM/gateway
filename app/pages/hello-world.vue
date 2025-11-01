<script setup lang="ts">
definePageMeta({
  layout: 'test',
})
</script>

<template>
  <NuxtWelcome/>

  <section class="jersey-15-regular bg-gray-100/5">
    <div class="text-center p-2 m-2">
      <h2 class="text-3xl font-bold mb-4"> recipe.recipe_name </h2>
      <div id="buttons tailwind test">
        <button class="btn btn-primary">Hello daisyUI</button>
        <button class="btn btn-neutral">Neutral</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-error">Error</button>
      </div>
    </div>

  </section>


</template>

<style scoped>

</style>