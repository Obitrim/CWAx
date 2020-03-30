<template>
    <div class="table-responsive">
        <table class="table" :class="{ 'text-center': centerText }">
            <slot name="headings"/>
            <slot/>
        </table>
    </div>
</template>

<script>
export default {
  props: {
      centerText: {
          type: Boolean,
          default: false
      }
  }  
};
</script>