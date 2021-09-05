import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Vuestic UI
import { VaInput, VaButton, VaSelect, VaModal, VaCheckbox } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
// App
const app = createApp(App);
app.component("va-input", VaInput);
app.component("va-button", VaButton);
app.component("va-select", VaSelect);
app.component("va-modal", VaModal);
app.component("va-checkbox", VaCheckbox);
app.use(router);
app.mount("#app");