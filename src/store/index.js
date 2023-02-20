import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const store = createStore({
  state() {
    return {
      quotes: null,
    };
  },
  actions,
  getters,
  mutations,
});

export default store;
