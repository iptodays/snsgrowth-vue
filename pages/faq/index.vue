<template>
  <div class="flex flex-col items-center pb-12">
    <h4>
      <span class="text-3xl	font-medium">
        Frequently Asked Questions ❓
      </span>
    </h4>
    <span class="text-xl	relative my-2.5">
      For More Information: info@snsgrowth.net
    </span>
  </div>
  <UCollapsible v-for="item in faqs" class="pb-6">
    <div class="flex items-center cursor-pointer group" block>
      <img src="~/assets/expand.svg" width="24" class="group-data-[state=open]:hidden" alt="">
      <img src="~/assets/fold.svg" width="24" class="group-data-[state=closed]:hidden" alt="">
      <span class="pl-2 text-2xl font-medium">
        {{ item.q }}
      </span>
    </div>
    <template #content>
      <div class="pl-8 pt-1.5">
        <div v-if="item.isHtml">
          <p>Please Ensure The Following:</p>
          <ul class="list-disc py-2 pl-8">
            <li>Your <strong>Instagram</strong> account is set to <strong>public</strong>.</li>
            <li>You have typed in the <strong>correct Instagram username</strong>.</li>
            <li>You have <strong>not changed your Instagram username</strong> before the order’s completion.</li>
            <li>The <strong>account or post</strong>, still exists and has <strong>not been deleted</strong>.</li>
            <li>The video follows Instagram’s guidelines and has <strong>not been restricted</strong> or removed.</li>
            <li><strong>Allow 24 hours</strong> for completion of order delivery.</li>
          </ul>
          <p>You can always contact our customer support agents that are Ready to assist you 24/7.</p>
        </div>
        <span v-else class="whitespace-pre-wrap">
          {{ item.a }}
        </span>
      </div>
    </template>
  </UCollapsible>
</template>

<script lang="ts" setup>

const faqs = [
  {
    q: 'How Can I Pay ? And What Is Your Refund Policy ?',
    a: 'You can pay us using credit card.\nIf you are not satisfied with our services, you can contact our support agents and ask for a refund  within 30 days of your order.'
  },
  {
    q: 'My Credit Card Is Denied, What Do I Do Now ?',
    a: 'If your credit card is declined, please contact your bank for assistance or try using another card.\nYou can always contact our customer support agents that are Ready to assist you 24/7.'
  },
  {
    q: 'Followers & Likes Are Real ?',
    a: 'All our services are premium services from high quality and real users.'
  },
  {
    q: 'Is My Account Safe After Using Your Services ?',
    a: 'We have been serving clients since 2014 and none of our clients faced any issue.'
  },
  {
    q: 'My Order Did Not Start Yet, What Do I Do Now ?',
    isHtml: true
  },
  {
    q: 'Why are my Followers dropping ?',
    a: 'Occasionally Instagram will delete accounts that users mark as spam.  This causes follower counts to drop all across Instagram. Sometimes it  impacts our customers, sometimes it doesn\'t. If you experience drops  within first 30 days of your purchase, we will happily refill your  followers in accordance with our free refill policy.'
  },
  {
    q: 'Who owns snsgrowth.net ? ',
    a: 'KING & QUEEN MEDIA UG (haftungsbeschränkt)\nHirtenwiesenstr. 8A\n35085 Ebsdorfergrund \nGERMANY\n\ninfo@snsgrowth.net'
  }
]

</script>