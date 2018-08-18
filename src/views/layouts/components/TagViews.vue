<template>
  <div class="tags-view-container">
    <ReceiptBilling class="rect"></ReceiptBilling>
  </div>
</template>

<script>
import ReceiptBilling from '../../receipts/ReceiptBilling'
  export default {
    name: 'tagviews',
    components: {
      ReceiptBilling
    }
  }
</script>

<style scoped>
.tags-view-container{
  width: 100%;
}
  .rect{
    width: 100%;
  }
</style>

