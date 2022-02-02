<template>
  <h2 class="content-title">{{ content.label }}</h2>
  <component :is="targetComponent"></component>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "MainContent",
  props: {
    content: {
      // 오브젝트나 배열이 프롭일 경우 디폴트밸류를 선언할 때 메서드 형태로 작성한다.
      // 에러를 방지하기 위해 디폴트
      type: Object,
      default() {
        return {
          label: "Test Menu",
          path: "Test",
          index: "TestMenu",
        };
      },
    },
  },

  data() {
    return {
      targetComponent: null,
    };
  },
  watch: {
    content: {
      deep: true,
      handler: function (newValue) {
        this.targetComponent = defineAsyncComponent(() =>
          import(`@/components/${newValue.path}/${newValue.index}`)
        );
      },
    },
  },
};
</script>

<style></style>
