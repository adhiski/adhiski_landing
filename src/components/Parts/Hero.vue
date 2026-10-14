<template>
  <div :class="TWMerge(
    'scroll-m-[125px]',
    'flex',
    'w-full',
    'items-center',
    'px-[25px] py-[45px]',
    'bg-accent'
  )">
    <div :class="TWMerge(
        'w-full',
        'max-w-[850px]',
        'mx-auto',
        'flex',
        'flex-col',
        'gap-[25px]'
    )">
        <span :class="TWMerge(
            'sm:hidden',
            'text-center',
            'text-[25px]'
        )">
            <span :class="TWMerge(
                'cursor-none',
                'transition',
                'ease-in',
                'opacity-50',
                'hover:opacity-100'
            )">Imagine It, </span>
            <span :class="TWMerge(
                'cursor-none',
                'transition',
                'ease-in',
                'opacity-50',
                'hover:opacity-100'
            )">Build It</span>
        </span>
        <div :class="TWMerge(
            'relative',
            'bg-[url(/decals/hero_ex.png)]',
            'bg-center',
            'bg-cover',
            'w-full',
            'h-[505px] max-sm:h-[350px]',
            'rounded-[42px]'
        )">
            <div :class="TWMerge(
                'max-sm:hidden',
                'absolute',
                'top-0',
                'left-0'
            )">
                <img src="/decals/SubtractLeft_top.png" alt="">
                <span :class="TWMerge(
                    'absolute',
                    'top-[50%]',
                    'translate-y-[-50%]',
                    'left-[57px]',
                    'flex',
                    'flex-col',
                    'text-[45px]'
                )">
                    <span :class="TWMerge(
                        'absolute',
                        'top-[-45px]',
                        'left-[-25px]',
                        'cursor-none',
                        'transition',
                        'ease-in',
                        'opacity-50',
                        'hover:opacity-100'
                    )">Imagine It, </span>
                    <span :class="TWMerge(
                        'bottom-0',
                        'left-[50px]',
                        'cursor-none',
                        'transition',
                        'ease-in',
                        'opacity-50',
                        'hover:opacity-100',
                        'text-[85px]'
                    )">Build It</span>
                </span>
            </div>
            <div :class="TWMerge(
                'absolute',
                'bottom-0',
                'left-0'
            )">
                <img src="/decals/SubtractLeft_bottom.png" alt="">
                <div :class="TWMerge(
                    'w-fit',
                    'absolute',
                    'top-[50%]',
                    'translate-y-[15%]',
                    'left-[45px]',
                    'flex',
                    'gap-[25px]',
                    'items-center',
                    'text-[24px]'
                )">
                    <ArrowDown />
                    Scroll Down
                    <ArrowDown />
                </div>
            </div>
            <img src="/decals/SubtractRight.png" alt="" :class="TWMerge(
                'max-md:hidden',
                'absolute',
                'top-0',
                'right-0'
            )">
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';
import { ArrowDown } from 'lucide-vue-next';


</script>

<style>

</style>