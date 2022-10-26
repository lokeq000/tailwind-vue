<template>
    <div class="header bg-gray">
        <div class="2xl:container xl:container py-4">
            <ul>
                <li><nuxt-link to="calculator">Калькулятор</nuxt-link></li>
                <li><nuxt-link to="course">Курс рубля</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
.header {
    ul {
        @apply flex text-12 text-text-gray-500;

        li {
            @apply mr-8 font-medium;

            &:last-child {
                @apply mr-0;
            }
        }
    }
}
.nuxt-link-exact-active {
    @apply text-text-gray-700;
}
</style>
