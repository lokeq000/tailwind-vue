<template>
    <div>
        <p class="mb-4 font-medium 2xl:text-16 sm:text-14">{{ label }}</p>
        <input
            type="text"
            :class="$style['common-input']"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            default: '',
        },
        placeholder: {
            default: '',
        },
        value: {
            default: '',
        },
    },
};
</script>

<style lang="scss" module>
    .common-input {
        @apply 
            block border border-input-gray text-text-gray-300 w-full p-5 h-12 rounded-md focus:border-input-gray outline-none;
    }
</style>
