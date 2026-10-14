<template>
  <div :class="TWMerge(
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
            )">Our</span>
            <h1 :class="TWMerge(
                'text-[45px]'
            )">Core Values</h1>
        </div>  
        <div :class="TWMerge(
            'grid',
            'grid-cols-4 max-md:grid-cols-2',
            'gap-[25px]'
        )">
            <div v-for="data in core" :class="TWMerge(
                'flex',
                'flex-col',
                'gap-[15px]',
                'py-[25px]',
                'border-t',
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
import { Lightbulb, ShieldCheck, Target, Users2 } from 'lucide-vue-next';

const core = [
    {
        icon: Lightbulb,
        head: "Innovation",
        content: "Exploring new ideas and better ways to solve problems."
    },
    {
        icon: Target,
        head: "Precision",
        content: "Paying attention to detail in every design and technical solution."
    },
    {
        icon: ShieldCheck,
        head: "Reliability",
        content: "Building solutions with quality, stability, and long-term value in mind."
    },
    {
        icon: Users2,
        head: "Collaboration",
        content: "Working closely with clients to understand their needs and goals."
    },
]
</script>

<style>

</style>