<template>
  <nav :class="TWMerge(
    'z-10000',
    'fixed',
    'flex',
    'max-md:flex-col',
    'items-center',
    'w-full',
    'px-[25px]',
    'py-[45px]',
    'bg-accent',
    'shadow-2xl',
    'shadow-accent'
  )">
    <div :class="TWMerge(
        'mx-auto',
        'flex',
        'w-full max-w-[850px]',
        'justify-between',
        'items-center'
    )">
      <a href="/">
        <img src="/a_logo_white.png" alt="adhiski" width="35">
      </a>
      <button @click="toggleNav" :class="TWMerge(
        'md:hidden',
        'cursor-pointer',
        'active:scale-90',
        'transition-all',
        'ease-in',
        'text-white',
        'hover:bg-white/10',
        'p-[10px]',
        'rounded-[5px]'
      )">
        <Menu />
      </button>
      <div :class="TWMerge(
        'max-md:hidden',
        'flex',
        'items-center',
        'gap-[45px]'
      )">
        <a v-for="nav in navs" :href="nav.to" :class="TWMerge(
          'transition-all',
          'ease-in',
          'hover:opacity-50',
          'text-[18px]'
        )">
          {{ nav.label }}
        </a>
        <!-- <a :href="`mailto:${email_contact}`">
          <Button>
            Contact Us
          </Button>
        </a> -->
      </div>
    </div>
    <div :class="TWMerge(
      'transition-all',
      'ease-in',
      'overflow-clip',
      'w-full',
      isOpen ? 'h-fit max-h-[10000px] pt-[45px]' : 'h-0 max-h-0 py-0',
      'md:hidden',
      'flex',
      'flex-col',
      'gap-[45px]',
      'bg-accent',
      'items-center',
    )">
      <a v-for="nav in navs" @click="toggleNav" :href="nav.to" :class="TWMerge(
        'transition-all',
        'ease-in',
        'hover:opacity-50',
        'text-[18px]'
      )">
        {{ nav.label }}
      </a>
      <!-- <a :href="`mailto:${email_contact}`">
        <Button>
          Contact Us
        </Button>
      </a> -->
    </div>
  </nav>
  <div :class="TWMerge(
    'h-[120px]'
  )"></div>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';
import Button from './Button.vue';
import { Menu } from 'lucide-vue-next';
import { ref } from 'vue';

const isOpen = ref(false)
const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const navs = [
  {
    label: "About",
    to: "#about"
  },
  {
    label: "Solutions",
    to: "#solution"
  },
  {
    label: "Why us",
    to: "#why-us"
  },
  {
    label: "Contact us",
    to: `#contact`
  }
]
</script>

<style>

</style>