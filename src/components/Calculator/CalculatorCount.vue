<template>
    <div>
        <calculator-form class="mb-9" />
        <calculator-result />
    </div>
</template>

<script>
import CalculatorForm from "../Calculator/CalculatorForm.vue"
import CalculatorResult from "../Calculator/CalculatorResult.vue"
export default {
  components: { CalculatorForm, CalculatorResult },

}
</script>