<template>
  <el-aside class="layout-sidebar" width="200px">
    <div>侧边栏</div>
  </el-aside>
</template>
  
  <script setup lang="ts">
</script>
  
  <style scoped lang="scss">
.layout-sidebar {
  width: 200px;
  background: #ddd;
}
/* element滚动条组件 隐藏水平滚动条 */
.sidebar-wrapper .el-scrollbar__wrap {
  overflow-x: hidden;
}
.is-horizontal {
  display: none;
}
</style>