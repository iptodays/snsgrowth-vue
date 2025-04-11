<template>
  <UApp>
    <div class="min-sm:flex h-14 items-center px-2 max-sm:hidden">
      <div class="flex flex-1">
        <img src="~/assets/logo.svg" width="31px" alt="" srcset="">
        <span class="pl-1.5 text-xl font-bold	">
          SNSGrowth
        </span>
      </div>
      <nuxt-link class="nav-item" to="/">Home</nuxt-link>
      <UPopover mode="hover" class="mx-2 my-4" v-for="(item) in store.config?.platforms">
        <UButton class="flex nav-item m-0 cursor-pointer" variant="link">
          <span class="dropdown-toggle">
            {{ item.name }}
          </span>
        </UButton>
        <template #content>
          <div class="flex py-1 flex-col">
            <UButton class="nav-item cursor-pointer" v-for="service in item.services" variant="link" :onclick="() => serviceClick(service)">
              {{ service.name }}
            </UButton>
          </div>
        </template>
      </UPopover>
    </div>
    <NuxtPage />
    <div class="flex py-4 items-center justify-center min-sm:flex-row max-sm:flex-col max-sm:text-center">
      <span class="flex-1">
        Copyright © {{ (new Date()).getFullYear() }}. All Rights Reserved.
      </span>
      <nuxt-link class="nav-item" to="/">Terms & Conditions</nuxt-link>
      <nuxt-link class="nav-item" to="/faq">FAQ</nuxt-link>
      <nuxt-link class="nav-item" to="/">Privacy Policy</nuxt-link>
      <nuxt-link class="nav-item" to="/">Blog</nuxt-link>
    </div>
  </UApp>
</template>

<script lang="ts" setup>
import type { ServiceList } from './api/types';
import { useAppStore } from './store';

const store = useAppStore();


onMounted(() => {
  store.fetchConfig();
})

function serviceClick(service: ServiceList) {
  console.log(service);
}

</script>
