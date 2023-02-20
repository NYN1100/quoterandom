import { createApp, defineAsyncComponent } from "vue";

import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";
//import BaseButton from "./components/ui/BaseButton.vue";
//import BaseCard from "./components/ui/BaseCard.vue";
//import BaseSpinner from "./components/ui/BaseSpinner.vue";

const BaseSpinner = defineAsyncComponent(() =>
  import("./components/ui/BaseSpinner.vue")
);
const BaseCard = defineAsyncComponent(() =>
  import("./components/ui/BaseCard.vue")
);
const BaseButton = defineAsyncComponent(() =>
  import("./components/ui/BaseButton.vue")
);

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-spinner", BaseSpinner);

app.mount("#app");
