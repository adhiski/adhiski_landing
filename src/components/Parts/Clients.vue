<template>
  <div :class="TWMerge(
    'scroll-m-[125px]',
    'flex',
    'w-full',
    'items-center',
    'px-[25px] py-[45px]',
    'bg-box2'
  )">
    <div :class="TWMerge(
        'flex',
        'flex-col',
        'items-center',
        'w-full max-w-[850px]',
        'gap-[25px]',
        'text-center',
        'mx-auto'
    )">
        <h3 :class="TWMerge(
            'text-white/50',
            'text-[18px]'
        )">Our Satisfied Clients</h3>
        <div :class="TWMerge(
            'w-fit',
            'grid',
            'gap-[45px]',
            'grid-cols-3',
            'items-center'
        )">
            <img v-for="data in clients" :src="data.img" :alt="data.label" width="200">
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';

const clients = [
    {
        label: "Polytoria",
        img: "/decals/logo/polytoria.png"
    },
    {
        label: "Brickplanet",
        img: "/decals/logo/bp.png"
    },
    {
        label: "Luduvo",
        img: "/decals/logo/luduvo.png"
    },
]
</script>

<style>

</style>