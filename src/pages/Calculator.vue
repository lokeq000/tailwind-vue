<template>
    <div :class="$style.calculator">
        <h1 :class="$style['calculator__title']">Валютный калькулятор</h1>
        <div :class="$style['calculator__main-content']">
            <div :class="$style['calculator__count-block']"><calculator-count /></div>
            <div :class="$style['calculator__images-block']"><calculator-block-image /></div>
        </div>
        <div class="calculator__footer"><calculator-footer /></div>
    </div>
</template>

<script>
import CalculatorCount from "../components/Calculator/CalculatorCount.vue"
import CalculatorBlockImage from "../components/Calculator/CalculatorBlockImage.vue"
import CalculatorFooter from "../components/Calculator/CalculatorFooter.vue"
export default {
  components: { CalculatorCount, CalculatorBlockImage, CalculatorFooter },
}
</script>

<style lang="scss" module>
.calculator {
    &__title {
        @apply font-medium text-primary text-34 mt-8 mb-10;
    }
    
    &__main-content {
        @apply 
            flex mb-8
            2xl:flex-row xl:flex-row md:flex-row sm:flex-col; 
            
    }

    &__count-block {
        @apply 
            mr-9
            2xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full;
    }

    &__images-block {
        @apply 
            mb-8
            2xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full;
    }

    &__footer {

    }
}
</style>