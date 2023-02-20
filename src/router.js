import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

//import RandomQuote from "./quote/RandomQuote.vue";
//import QuoteDetail from "./quotes/QuoteDetail.vue";
import QuotesList from "./quotes/QuotesList.vue";
//import AddQuote from "./quote/AddQuote.vue";

const RandomQuote = defineAsyncComponent(() =>
  import("./quote/RandomQuote.vue")
);
const QuoteDetail = defineAsyncComponent(() =>
  import("./quotes/QuoteDetail.vue")
);
const AddQuote = defineAsyncComponent(() => import("./quote/AddQuote.vue"));

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/quote" },
    { path: "/quote", component: RandomQuote },
    { path: "/quotes", component: QuotesList },
    { path: "/quotes/:id", component: QuoteDetail, props: true },
    { path: "/addquote", component: AddQuote },
  ],
});
export default router;
