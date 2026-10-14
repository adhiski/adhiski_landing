<template>
  <button :class="TWMerge(
    'cursor-pointer',
    'transition-all',
    'ease-in',
    'hover:brightness-95',
    'active:scale-95',
    'flex',
    'items-center',
    'justify-center',
    'gap-[10px]',
    'px-[15px] py-[10px]',
    'bg-white',
    'text-accent',
    'font-bold',
    'rounded-[5px]'
  )">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';


</script>

<style>

</style>