<script setup lang="ts">

</script>

<template>

  <h1 class="text-4xl text-center underline">
   Pricing
  </h1>

  <div class="flex flex-auto gap-4 m-2 p-2 justify-center">

    <div class="card w-96 bg-base-200 border shadow-md">
      <div class="card-body">
        <span class="badge badge-xs badge-warning">Not Available</span>
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold text-primary">Basic</h2>
          <span class="text-xl font-bold">$10</span>
        </div>
        <ul class="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Access to core features</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>1 project</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Email support</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Basic analytics</span>
          </li>
          <li class="opacity-50">
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-base-300"/>
            <span class="line-through">Seamless cloud integration</span>
          </li>
          <li class="opacity-50">
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-base-300"/>
            <span class="line-through">Real-time collaboration tools</span>
          </li>
        </ul>
        <div class="mt-6">
          <button class="btn btn-primary btn-block">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="card w-96 bg-base-200 border shadow-sm">
      <div class="card-body">
        <span class="badge badge-xs badge-warning">Not Available</span>
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold text-primary">Standard</h2>
          <span class="text-xl font-bold">$15</span>
        </div>
        <ul class="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Everything in Basic, plus:</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Up to 5 projects</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Priority email support</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Advanced analytics</span>
          </li>
          <li class="opacity-50">
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Customizable templates</span>
          </li>
          <li class="opacity-50">
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-base-300"/>
            <span class="line-through">Real-time collaboration tools</span>
          </li>
        </ul>
        <div class="mt-6">
          <button class="btn btn-primary btn-block">Buy Now</button>
        </div>
      </div>
    </div>


    <div class="card w-96 bg-base-200 border shadow-sm">
      <div class="card-body">
        <span class="badge badge-xs badge-error">Not Available</span>
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold text-primary">Premium</h2>
          <span class="text-xl font-bold">$25</span>
        </div>
        <ul class="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Everything in Standard, plus:</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Unlimited projects</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>24/7 support</span>
          </li>
          <li>
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Team collaboration</span>
          </li>
          <li class="opacity-50">
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle text-success"/>
            <span>Advanced integrations</span>
          </li>
          <li class="opacity-50">
            <Icon name="material-symbols:check-rounded" class="size-4 me-2 inline-block align-middle invisible"/>
            <span class="line-through"></span>
          </li>
        </ul>
        <div class="mt-6">
          <button class="btn btn-primary btn-block">Buy Now</button>
        </div>
      </div>
    </div>

  </div>

</template>

