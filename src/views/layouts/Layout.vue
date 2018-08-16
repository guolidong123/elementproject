<template>
  <div class="app-wrapper">
    <SidebarItem></SidebarItem>
  </div>
</template>

<script>
  import SidebarItem from './sidebar/SidebarItem'
  export default{
    name:'LayOut',
    components: {
      SidebarItem
    }
  }
</script>

<style scoped>
  .app-wrapper{
    overflow: hide;
    width: 200px;
  }

</style>
