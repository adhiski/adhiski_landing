<template>
  <div id="about" :class="TWMerge(
    'scroll-m-[125px]',
    'flex',
    'w-full',
    'items-center',
    'px-[25px] py-[45px]',
    'bg-box1'
  )">
    <div :class="TWMerge(
        'flex',
        'max-md:flex-col',
        'items-center',
        'w-full max-w-[850px]',
        'gap-[85px] max-md:gap-[25px]',
        'mx-auto'
    )">
        <div :class="TWMerge(
            'flex-1',
            'flex',
            'flex-col',
            'gap-[25px]'
        )">
            <div :class="TWMerge(
                'flex',
                'flex-col'
            )">
                <span :class="TWMerge(
                    'text-[21px]',
                    'text-white/50'
                )">About</span>
                <h1 :class="TWMerge(
                    'text-[45px]'
                )">Adhiski Solutions</h1>
            </div>
            <span :class="TWMerge(
                'py-[25px]',
                'border-t',
                'border-white/20',
                'text-white/50',
                'text-justify'
            )">
                Adhiski Solutions is a design and information technology company with four years of experience delivering creative services and technology-driven solutions. We bring together the worlds of design and ICT to help individuals, businesses, and organizations transform their ideas into practical, impactful results.
            </span>
        </div>
        <div :class="TWMerge(
            'w-full md:max-w-[277px]',
            'flex',
            'flex-col',
            'gap-[25px]'
        )">
            <div :class="TWMerge(
                'bg-accent',
                'rounded-[5px]',
                'p-[10px]',
                'flex',
                'flex-col',
                'gap-[10px]',
                'text-[12px]'
            )">
                <span>Our Vision</span>
                <span :class="TWMerge(
                    'py-[10px]',
                    'border-t',
                    'border-white/20',
                    'text-white/50',
                    'text-justify'
                )">
                    To become a trusted partner in design and information technology, recognized for creativity, technical excellence, and the ability to turn complex challenges into meaningful opportunities.
                </span>
            </div>
            <div :class="TWMerge(
                'bg-accent',
                'rounded-[5px]',
                'p-[10px]',
                'flex',
                'flex-col',
                'gap-[10px]',
                'text-[12px]'
            )">
                <span>Our Mission</span>
                <span :class="TWMerge(
                    'py-[10px]',
                    'border-t',
                    'border-white/20',
                    'text-white/50',
                    'text-justify'
                )">
                    To empower our clients through creative design and dependable technology, delivering solutions that improve workflows, solve problems, and create lasting value.
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';


</script>

<style>

</style>