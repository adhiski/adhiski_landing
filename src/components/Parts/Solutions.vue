<template>
  <div id="solution" :class="TWMerge(
    'scroll-m-[125px] max-md:scroll-m-[90px]',
    'flex',
    'w-full',
    'items-center',
    'px-[25px] py-[45px]',
    'bg-box1'
  )">
    <div :class="TWMerge(
        'flex',
        'flex-col',
        'w-full max-w-[850px]',
        'gap-[45px]',
        'mx-auto'
    )">
        <div :class="TWMerge(
            'flex',
            'flex-col',
            'text-center'
        )">
            <span :class="TWMerge(
                'text-[21px]',
                'text-white/50'
            )">Better Solutions,</span>
            <h1 :class="TWMerge(
                'text-[45px]'
            )">Better Moves</h1>
        </div>
        <div :class="TWMerge(
            'flex',
            'flex-col'
        )">
            <div v-for="data in solutions" :class="TWMerge(
                'flex',
                'max-md:flex-col',
                'items-center',
                'gap-[45px]',
                'py-[25px]',
                'border-t',
                'border-white/20'
            )">
                <img :src="data.img" :alt="data.head" width="250">
                <div :class="TWMerge(
                    'flex-1',
                    'flex',
                    'flex-col',
                    'gap-[15px]'
                )">
                    <span :class="TWMerge(
                        'flex',
                        'items-center',
                        'gap-[15px]',
                        'text-[21px]'
                    )">
                        <component :is="data.icon"></component>
                        {{ data.head }}
                    </span>
                    <div :class="TWMerge(
                        'flex',
                        'max-md:flex-col',
                        'gap-[25px]',
                        'justify-between',
                        'text-white/50',
                        'text-[14px]'
                    )">
                        <span :class="TWMerge(
                            'flex-1'
                        )">{{ data.content }}</span>
                        <ul :class="TWMerge(
                            'flex-1',
                            'list-disc',
                            'list-inside'
                        )">
                            <li v-for="data in data.list.split('\n')">{{ data }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TWMerge from '@/utils/TWMerge';
import { CodeXml, MessageCircle, PaintbrushVertical } from 'lucide-vue-next';

const list = `Graphic & Brand Design
3D Modeling & Rendering
UI/UX Design
Web Design
Digital Content Creation
Game Asset Development`

const solutions = [
    {
        icon: PaintbrushVertical,
        img: "/decals/solutions-creative.png",
        head: 'Creatives',
        content: 'We combine creativity and technical artistry to develop compelling visual experiences, digital assets, and designs that bring ideas to life.',
        list: `Graphic & Brand Design
3D Modeling & Rendering
UI/UX Design
Web Design
Digital Content Creation
Game Asset Development`
    },
    {
        icon: CodeXml,
        img: "/decals/solutions-web_dev.png",
        head: 'Software Development',
        content: 'We engineer functional, maintainable, and scalable software solutions, transforming complex requirements into reliable digital products and applications.',
        list: `Full-Stack Web Development
Backend Systems & API Development
Database Design & Management
Application Development
Real-Time Systems & Integrations
Automation & Custom Tooling`
    },
    {
        icon: MessageCircle,
        img: "/decals/solutions-it_support.png",
        head: 'IT Support & Consulting',
        content: 'We help individuals and businesses solve technical challenges through reliable IT support, troubleshooting, and technology consulting to keep their systems running efficiently.',
        list: `Technical Support
System Troubleshooting
Network Support 
Server & System Administration
IT Consulting
Setup & Configuration`
    },
]
</script>

<style>

</style>