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
        <UButton class="flex nav-item m-0 cursor-pointer	" variant="link">
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
    <div class="flex flex-col items-center pt-8 pb-12">
      <h4>
        <span class="text-3xl	font-medium	">
          Our Features 🎖️
        </span>
      </h4>
      <span class="text-2xl	relative my-2.5">
        Your Satisfaction Is Our # 1 Concern.
      </span>
      <div class="flex flex-wrap max-md:justify-center mix-sm:justify-start ">
        <div v-for="item in features" class="flex flex-col items-center p-4 lg:flex-[0_0_33.33%] md:flex-[0_0_50%] text-center">
          <img :src="useAssetsImage(item.img)" alt="">
          <span class="text-2xl font-medium py-4">
            {{ item.title }}
          </span>
          <span class="px-4 whitespace-pre-wrap">
            {{ item.description }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center pt-8 pb-12">
      <h4>
        <span class="text-3xl	font-medium	">
          How Does the Process Work? 💻
        </span>
      </h4>
    </div>
  </UApp>
</template>

<script lang="ts" setup>
import type { ServiceList } from './api/types';
import { useAppStore } from './store';

const { useAssetsImage } = useAssets()

const store = useAppStore();

const features = [
  {
    img: 'feature-1.png',
    title: '24/7 Customer Support',
    description: 'We Strive to Provide 24/7 Customer Support.\nOur Agents are ready to answer all of your questions and concerns.',
  },
  {
    img: 'feature-2.png',
    title: 'Fast Delivery',
    description: 'Dont Wait To Grow!\nOrders Typical start within Minutes of Purchase!',
  },
  {
    img: 'feature-3.png',
    title: 'Real Accounts',
    description: 'We Provide The Best Quality of Service The Market has to Offer!',
  }
]

onMounted(() => {
  store.fetchConfig();
})

function serviceClick(service: ServiceList) {
  console.log(service);
}

</script>
