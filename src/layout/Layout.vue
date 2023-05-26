<template>
  <el-container class="common-layout root-content" ref="layoutRef">
    <HeaderCom ref="HeaderRef"></HeaderCom>
    <el-container class="flex main-content">
      <SidebarCom></SidebarCom>
      <el-scrollbar
        :height="data.contH"
        wrap-class="main-scroll-body"
        class="flex-1"
      >
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

import { reactive, ref, onMounted, watchPostEffect } from "vue";

interface Data {
  contH: number | string;
  headHeight: number;
  layHeight: number;
}

const HeaderRef = ref<ComponentPublicInstance | null>(null);
const layoutRef = ref<ComponentPublicInstance | null>(null);
const data = reactive<Data>({
  contH: "auto",
  headHeight: 0,
  layHeight: 0,
});

onMounted(() => {
  countHeight();
});

watchPostEffect(() => {
  // 判断浏览器高度是否变化--进行重新设置高度
  if (
    data.layHeight &&
    layoutRef.value &&
    data.layHeight !== layoutRef.value.$el.clientHeight
  ) {
    countHeight;
  }
});
/* 获取主要区域的高度 */
function countHeight() {
  if (HeaderRef.value && layoutRef.value) {
    data.headHeight = HeaderRef.value.$el.clientHeight;
    data.layHeight = layoutRef.value.$el.clientHeight;
    data.contH = data.layHeight - data.headHeight;
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