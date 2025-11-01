<script setup lang="ts">

</script>

<template>
  <div>
    <div class="navbar bg-base-100 shadow-sm">

      <div class="navbar-start">

      </div>

      <div class="navbar-center border rounded-full m-2 p-2 gap-2 ">
        <a class="btn btn-ghost btn-primary text-xl" href="/">Home</a>
        <a class="btn btn-ghost btn-primary text-xl" href="/projects">Projects</a>
        <a class="btn btn-ghost btn-primary text-xl" href="/blog">Blog</a>
        <a class="btn btn-ghost btn-primary text-xl" href="/pricing">Pricing</a>
        <a class="btn btn-ghost btn-primary text-xl" href="/about">About</a>
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" class="theme-controller" value="solar"/>

          <!-- sun icon -->
          <Icon name="material-symbols:sunny-rounded" class="swap-on h-10 w-10 fill-current"/>


          <!-- moon icon -->

          <Icon name="material-symbols:mode-night" class="swap-off h-10 w-10 fill-current"/>

        </label>

      </div>

      <div class="navbar-end">
      </div>
    </div>
    <slot/>
  </div>

</template>

<style scoped>

</style>