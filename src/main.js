import { createApp } from "vue";
import App from "./App.vue";

//element plus import하기
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//global css
import "@/styles/main.css";

// createApp(App).mount("#app"); 바로 실행이 되는 형태라 쓸 수 없음.
const app = createApp(App);

app.use(ElementPlus);

app.mount("#app");
