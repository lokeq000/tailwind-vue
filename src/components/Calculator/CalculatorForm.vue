<template>
    <div class="form">
        <common-input class="mb-8" label="Валюта 1" placeholder="Введите название или код"/>
        <common-input class="mb-8" label="Валюта 2" placeholder="Введите название или код"/>
        <common-input class="" label="Количество" placeholder="Введите число"/>
    </div>
</template>

<script>
import CommonInput from "../UI/CommonInput.vue"
export default {
  components: { CommonInput },
}
</script>

<style lang="scss" module>
</style>