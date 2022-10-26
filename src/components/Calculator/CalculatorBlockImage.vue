<template>
    <div class="w-all bg-secondary 2xl:h-144 xl:h-132 rounded-3xl px-8 py-10 ">
        <h2 class="text-primary uppercase font-medium 2xl:mb-12 xl:mb-8 md:mb-6 2xl:text-18 xl:text-15 md:text-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</h2>
        <div class="flex w-full h-full">
            <cummon-list class="2xl:w-1/2 xl:w-1/2 md:w-all 2xl:pr-16 xl:pr-16 md:pr-0 h-full" :listItems="listItems"><div class="w-3 h-3 bg-transparent rounded-full border-red border-2 mr-3 flex-shrink-0"></div></cummon-list>
            <div class="w-1/2 2xl:flex 2xl:flex-wrap 2xl:flex-row xl:flex xl:flex-wrap xl:flex-row md:flex md:justify-center md:items-center md:flex-col h-80">
                <div :class="$style['img-item--1']"></div>
                <div :class="$style['img-item--2']"></div>
                <div :class="$style['img-item--3']"></div>
                <div :class="$style['img-item--4']"></div>
            </div>
        </div>
    </div>
</template>

<script>
import CummonList from "../UI/CummonList.vue"
export default {
  components: { CummonList },
    data() {
        return {
            listItems: [
                'incididunt ut labore et dolore magna aliqua',
                'incididunt ut labore et',
                'incididunt ut labore et dolore',
                'labore et dolore',
                'incididunt ut',
                'incididunt ut labore et dolore',
                'incididunt ut labore',
            ]
        }
    }
}
</script>

<style lang="scss" module>
.img-item {
    &--1 {
        background: url('@/assets/images/img-1.jpg');
        background-size: cover;
        @apply 
            2xl:w-48 2xl:h-48 2xl:mb-3 2xl:rounded-bl-none 2xl:rounded-tr-none
            xl:w-40  xl:h-40 2xl:mr-4 xl:mr-4 xl:mb-3 xl:rounded-bl-none xl:rounded-tr-none
            md:w-28 md:h-20 md:mr-0 md:mb-3 md:rounded-bl-2xl md:rounded-tr-2xl;
    }

    &--2 {
        background: url('@/assets/images/img-2.jpg');
        background-size: cover;
        @apply 
            2xl:w-48 2xl:h-48 2xl:mb-3 2xl:rounded-tr-4xl 2xl:overflow-hidden 2xl:rounded-tl-none 2xl:rounded-br-none
            xl:w-40 xl:h-40 xl:mb-3 xl:rounded-tr-4xl xl:overflow-hidden xl:rounded-tl-none xl:rounded-br-none
            md:w-28 md:h-20 md:mr-0 md:mb-3 md:overflow-hidden md:rounded-tl-2xl md:rounded-br-2xl;
    }

    &--3 {
        background: url('@/assets/images/img-3.jpg');
        background-size: cover;        
        @apply
            overflow-hidden
            2xl:w-48 2xl:h-48 2xl:mb-3 2xl:rounded-tl-none 2xl:rounded-br-none 2xl:rounded-bl-4xl
            xl:w-40 xl:h-40 2xl:mr-4 xl:mr-4 xl:mb-3 xl:rounded-tl-none xl:rounded-br-none xl:rounded-bl-4xl
            md:w-28 md:h-20 md:mr-0 md:mb-3 md:rounded-tl-2xl md:rounded-br-2xl md:rounded-bl-none;
    }

    &--4 {
        background: url('@/assets/images/img-4.png');
        background-size: cover;        
        @apply
            2xl:w-48 2xl:h-48 2xl:mb-3 2xl:rounded-tl-none 2xl:rounded-br-none
            xl:w-40 xl:h-40 xl:mb-3 xl:rounded-tl-none xl:rounded-br-none
            md:w-28 md:h-20 md:mr-0 md:rounded-tl-2xl md:rounded-br-2xl;
    }
}
</style>