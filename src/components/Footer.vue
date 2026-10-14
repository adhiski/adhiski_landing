<template>
  <footer :class="TWMerge(
    'flex',
    'gap-[25px]',
    'px-[25px] py-[45px]',
    'bg-black'
  )">
    <div :class="TWMerge(
        'flex',
        'gap-[25px]',
        'md:items-center',
        'justify-between',
        'max-md:flex-col',
        'w-full max-w-[850px]',
        'mx-auto'
    )">
        <div :class="TWMerge(
            'flex-1',
            'flex',
            'flex-col',
            'gap-[15px]',
            'max-md:pb-[25px]',
            'max-md:border-b md:border-r',
            'border-white/10'
        )">
            <div :class="TWMerge(
                'flex',
                'flex-col',
                'gap-[10px]',
                'text-white/50',
                'text-[9px]'
            )">
                <img src="/white_logo_single.png" alt="adhiski" width="125">
                Copyright @2026 PT Adhiski Solusi Indonesia. All Rights Reserved.
            </div>

            <span :class="TWMerge(
                'text-white/20',
                'text-[12px]',
                'flex',
                'items-center',
                'gap-[10px]'
            )">
                <MapPin :size="17" />
                Jl. Mutiara raya 1 no.8 Rt.005/011 Pulogebang Indah Cakung Jakarta Timur
            </span>
        </div>
        <div :class="TWMerge(
            'flex',
            'flex-wrap',
            'gap-[45px]'
        )">
            <div :class="TWMerge(
                'flex',
                'flex-col',
                'gap-[15px]',
                'text-[14px]'
            )">
                <span>Landing</span>
                <a v-for="data in landing_navs" :href="data.to" :class="TWMerge(
                    'opacity-50',
                    'hover:underline'
                )">
                    {{ data.label }}
                </a>
            </div>
            <div :class="TWMerge(
                'flex',
                'flex-col',
                'gap-[15px]',
                'text-[14px]'
            )">
                <span>Social Media</span>
                <a v-for="data in social_navs" :href="data.to" :class="TWMerge(
                    'opacity-50',
                    'hover:underline'
                )">
                    {{ data.label }}
                </a>
            </div>
            <div :class="TWMerge(
                'flex',
                'flex-col',
                'gap-[15px]',
                'text-[14px]'
            )">
                <span>Social Media</span>
                <a :href="`mailto:${email}`" :class="TWMerge(
                    'opacity-50',
                    'hover:underline',
                    'flex',
                    'items-center',
                    'gap-[10px]'
                )">
                    <Mail :size="17" />
                    sales@adhiski.com
                </a>
                <a href="#" :class="TWMerge(
                    'opacity-50',
                    'hover:underline',
                    'flex',
                    'items-center',
                    'gap-[10px]'
                )">
                    <Phone :size="17" />
                    +62 838-7524-4570
                </a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';
import { Mail, MapPin, Phone } from 'lucide-vue-next';

const email = "sales@adhiski.com"
const landing_navs = [
    {
        label: "About Us",
        to: "#about"
    },
    {
        label: "Solutions",
        to: "#solution"
    },
    {
        label: "Why Us",
        to: "#why-us"
    },
]
const social_navs = [
    {
        label: "Instagram",
        to: "https://instagram.com/adhiski_"
    },
    {
        label: "Github",
        to: "https://github.com/adhiski"
    }
]
</script>

<style>

</style>