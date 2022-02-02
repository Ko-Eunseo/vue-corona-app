<template>
  <el-container class="main">
    <el-header><BasicHeader /></el-header>
    <el-container>
      <el-aside width="menuWidth"
        ><SideMenu
          :isCollapse="isCollapse"
          @menuSelect="
            (item) => {
              $emit('menuSelect', item);
            }
          "
      /></el-aside>
      <!-- sidemenu에서 basiclayout으로 가고, 그다음 app.vue로 보냄. -->
      <el-container>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import BasicHeader from "./BasicHeader.vue";
import SideMenu from "./SideMenu.vue";
import useBreakpoint from "@/composables/useBreakpoint";
import { computed } from "vue";
export default {
  name: "BasicLayout",
  components: { BasicHeader, SideMenu },
  setup() {
    const { type } = useBreakpoint();
    const isCollapse = computed(() => type.value === "sm");
    const menuWidth = computed(() => (isCollapse.value ? "65px" : "200px"));
    return {
      isCollapse,
      menuWidth,
    };
  },
};
</script>

<style scoped>
.el-header {
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
}
.main {
  height: 100%;
}
</style>
