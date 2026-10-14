<template>
  <div id="contact" :class="TWMerge(
    'scroll-m-[125px] max-md:scroll-m-[90px]',
    'flex',
    'w-full',
    'items-center',
    'px-[25px] py-[45px]',
    'bg-info'
  )">
    <div :class="TWMerge(
        'flex',
        'max-md:flex-col',
        'md:items-center',
        'justify-between',
        'w-full max-w-[850px]',
        'gap-[25px]',
        'mx-auto'
    )">
        <div :class="TWMerge(
            'flex',
            'flex-col'
        )">
            <span :class="TWMerge(
                'text-[21px] max-md:text-[14px]',
                'opacity-50'
            )">Interested in collaborating with us,</span>
            <span :class="TWMerge(
                'text-[45px] max-md:text-[28px]',
                'font-bold'
            )">Contact us now!</span>
        </div>
        <div :class="TWMerge(
            'flex',
            'flex-col',
            'gap-[15px]',
            'max-md:p-[15px]',
            'max-md:rounded-[5px]',
            'max-md:border',
            'max-md:border-white/20'
        )">
            <Mail :size="35" />
            <span :class="TWMerge(
                'text-[21px]'
            )">{{ email }}</span>
            <a :href="`mailto:${email}`">
                <Button>
                    Contact us
                </Button>
            </a>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';
import { Mail } from 'lucide-vue-next';
import Button from '../Button.vue';

const email = "sales@adhiski.com"
</script>

<style>

</style>