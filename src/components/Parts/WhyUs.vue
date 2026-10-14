<template>
  <div id="why-us" :class="TWMerge(
    'scroll-m-[125px] max-md:scroll-m-[90px]',
    'flex',
    'w-full',
    'items-center',
    'px-[25px] py-[45px]',
    'bg-accent'
  )">
    <div :class="TWMerge(
        'flex',
        'flex-col',
        'w-full max-w-[850px]',
        'gap-[25px]',
        'mx-auto'
    )">
        <div :class="TWMerge(
            'flex',
            'flex-col'
        )">
            <span :class="TWMerge(
                'text-[21px]',
                'text-white/50'
            )">You might be think,</span>
            <h1 :class="TWMerge(
                'text-[45px]'
            )">Why Us?</h1>
        </div>  
        <div :class="TWMerge(
            'grid',
            'grid-cols-2',
            'gap-[25px]'
        )">
            <div v-for="data in core" :class="TWMerge(
                'flex',
                'flex-col',
                'gap-[15px]',
                'p-[15px]',
                'rounded-[5px]',
                'border',
                'border-white/20'
            )">
                <component :is="data.icon"></component>
                <span :class="TWMerge(
                    'text-[18px]'
                )">{{ data.head }}</span>
                <span :class="TWMerge(
                    'text-white/50',
                    'text-[12px]'
                )">{{ data.content }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';
import { Check, ShieldCheck, Target, Wrench } from 'lucide-vue-next';

const core = [
    {
        icon: Check,
        head: "Multidisciplinary Expertise",
        content: "From creative design to software development and IT support, we offer a versatile range of services under one roof."
    },
    {
        icon: Target,
        head: "Client-Focused Approach",
        content: "We listen to your needs and tailor our services to align with your goals and requirements."
    },
    {
        icon: ShieldCheck,
        head: "Practical Solutions",
        content: "We focus on solving real-world problems with effective, reliable, and purpose-driven solutions."
    },
    {
        icon: Wrench,
        head: "Four Years of Experience",
        content: "Our experience across design and ICT helps us approach projects with technical understanding and creative perspective."
    },
]
</script>

<style>

</style>