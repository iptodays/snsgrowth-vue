<template>
  <div class="flex flex-col items-center pt-8 pb-12">
    <h4>
      <span class="text-3xl	font-medium	">
        Our Features 🎖️
      </span>
    </h4>
    <span class="text-2xl	relative my-2.5  pb-11">
      Your Satisfaction Is Our # 1 Concern.
    </span>
    <div class="flex flex-wrap max-md:justify-center mix-sm:justify-start ">
      <div v-for="item in features" class="flex flex-col items-center py-4 lg:flex-[0_0_33.33%] md:flex-[0_0_50%] text-center">
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
  <div class="flex flex-col pt-8 pb-12 text-center">
    <h4>
      <span class="text-3xl	font-medium	">
        How Can Our Services Help You To Grow ? 🌱
      </span>
    </h4>
    <span class="my-2.5 px-5 pb-11">
      We can help you increase your presence on different popular social media platforms and help you connect with more people. We can also help you build your brand and improve your online visibility.
    </span>
    <UCollapsible v-for="item in qa" class="pb-6">
      <div class="flex items-center cursor-pointer group" block>
        <img src="~/assets/expand.svg" width="24" class="group-data-[state=open]:hidden" alt="">
        <img src="~/assets/fold.svg" width="24" class="group-data-[state=closed]:hidden" alt="">
        <span class="pl-2 text-2xl font-medium">
          {{ item.q }}
        </span>
      </div>
      <template #content>
        <div class="pl-8 pt-1.5 text-start">
          <span class="whitespace-pre-wrap">
            {{ item.a }}
          </span>
        </div>
      </template>
    </UCollapsible>
  </div>
  <div class="flex max-md:justify-center mix-sm:justify-start py-14">
    <img class="max-md:w-80 min-sm:w-96" src="~/assets/payments.png" alt="">
  </div>
</template>


<script lang="ts" setup>

const { useAssetsImage } = useAssets()

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

const qa = [
  {
    q: 'Increase your social media presence',
    a: 'We can help you get more likes, followers, and views on your social media pages, which can help you attract more attention and connect with more people. These social media services are designed dedicatedly.'
  },
  {
    q: 'Build your brand',
    a: 'We can help you get more followers, likes, and views on your social media pages, which can help you improve your online visibility and attract more attention to your brand. We provide 100% authentic real services, No fake accounts, and fake followers.'
  },
  {
    q: 'Improve your online visibility',
    a: 'We can help you get more new followers, likes, and views on your social media pages, which can help you attract more attention and connect with more people.'
  },
  {
    q: 'Connect with more people',
    a: 'We can help you get more likes, followers, and views on your social media pages through our social media marketing services which can help you connect with more people and build your brand. Buy followers from us to reach your target audience.'
  },
  {
    q: 'Save your valuable time',
    a: 'Growing a social media following can be a time-consuming task. If you\'re looking to save time, you may choose to buy social media likes, followers, and views. We can help you to achieve your social media goals without having to spend hours on marketing and promotion.'
  },
  {
    q: 'Make your social media profile look more popular',
    a: 'If you\'re looking to make your social media profile look more popular, Choosing to buy social media followers, likes, and views is a great option. We can help you to appear more credible and trustworthy to potential customers.'
  },
  {
    q: 'Improve Your social media ROI',
    a: 'If you\'re looking to improve your social media ROI, you may choose to buy social media followers, likes, and views. We can help you to get more value from your social media marketing efforts and see a higher return on investment.'
  },
  {
    q: 'Is This Website Secure ?',
    a: `Yes! Our website uses a secure server (SSL) to encrypt all of your personal information, including your credit or debit card number, name, and address before it is sent to us. This helps to protect your information from unauthorized access.

In addition to using a secure server, we also take extra security measures to help protect your payment information. We do not store your credit or debit card information on our servers and our employees do not have access to this information.`  }
]

</script>
