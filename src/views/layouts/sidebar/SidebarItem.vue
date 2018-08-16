<template>
  <div class="menu-wraper">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(item,index) in $router.options.routes">
        <el-submenu :index="item.path" v-if="item.hasChild">
          <template slot="title">
            <span>{{item.menuName}}</span>
          </template>
          <template v-for="(itemChild, index) in item.children">
            <el-submenu v-if="itemChild.hasChild">
              <template slot="title">
                <sapn>{{itemChild.menuName}}</sapn>
              </template>
              <el-menu-item v-for="(itemsubChild,index) in itemChild.children" :index="itemsubChild.path" ::key="index">
                <span>{{itemsubChild.menuName}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="itemChild.path" :key="index" v-else>
              <span>{{itemChild.menuName}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
          <span>{{item.menuName}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'layout',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-wraper{
    width: 180px;
    height: 100%;
    position:fixed;
    left:0;
    top:0;
    background:#304156;
  }
  .el-menu-vertical-demo {
    text-align: left;
  }

</style>
