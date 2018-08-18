<template>
  <div class="app-wrapper">
    <SidebarItem></SidebarItem>
    <TagViews class="main-rect"></TagViews>
  </div>
</template>

<script>
  import SidebarItem from './components/SidebarItem'
  import TagViews from './components/TagViews'
  export default{
    name:'LayOut',
    components: {
      SidebarItem,
      TagViews
    }
  }
</script>

<style scoped>
  .app-wrapper{
    overflow: hide;
    width: 200px;
  }
.main-rect{
  position: relative;
  left: 180px;
  right: 0;
  top: 100px;
}
</style>
