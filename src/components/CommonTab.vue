<template>
    <ul :class="$style.tabs">
        <li
            v-for="item in tabsItems"
            :key="item.id"
            :class="[item.id === selectedItemID ? 'text-text-gray-700' : '']"
            @click="onLiClick(item.id)"
        >
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CommonTab',
        props: {
            tabsItems: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                selectedItemID: 1,
            };
        },
        methods: {
            onLiClick(id) {
                this.selectedItemID = id;
                this.$emit('selectTab', id);
            },
        },
    };
</script>

<style lang="scss" module>
.tabs {
    @apply flex text-12 text-text-gray-500;

    li {
        cursor: pointer;
        @apply mr-8;

        &:last-child {
            @apply mr-0;
        }
    }
}
</style>
