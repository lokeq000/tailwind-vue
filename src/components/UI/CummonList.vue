<template>
    <ul>
        <li 
            v-for="item in listItems" :key="item"
            class="flex items-center 2xl:text-15 xl:text-14 md:text-13 text-text-main 2xl:mb-3 xl:mb-3 md:mb-5"
        ><slot />{{ item }}</li>
    </ul>
</template>

<script>
export default {
    props: {
        listItems: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>