<template>
  <el-container class="common-layout root-content" ref="layoutRef">
    <HeaderCom ref="HeaderRef"></HeaderCom>
    <el-container
      class="main-content"
      :style="{ height: `calc(100vh - ${data.headHeight}px)` }"
    >
      <SidebarCom></SidebarCom>
      <el-scrollbar wrap-class="main-scroll-body" class="flex-1" height="100%">
        <MainCom></MainCom>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import HeaderCom from "./components/Header.vue";
import SidebarCom from "./components/Sidebar.vue";
import MainCom from "./components/Main.vue";
import type { ComponentPublicInstance } from "vue";

import { reactive, ref, onMounted } from "vue";

interface Data {
  headHeight: number;
}

const HeaderRef = ref<ComponentPublicInstance | null>(null);
const data = reactive<Data>({
  headHeight: 0,
});

onMounted(() => {
  countHeight();
});

/* 获取主要区域的高度 */
function countHeight() {
  if (HeaderRef.value) {
    data.headHeight = HeaderRef.value.$el.clientHeight;
  }
}
</script>

<style scoped lang="scss">
.common-layout {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .main-content {
    flex: 1;
  }
  :deep(.main-scroll-body) {
    overflow-y: auto;
  }
}
</style>
