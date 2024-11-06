import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import appRoutes from './appRoutes';
import { createPinia } from 'pinia';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { IoLockClosedOutline } from "oh-vue-icons/icons";
import { IoSchoolSharp } from "oh-vue-icons/icons";
import { FaUserCircle } from "oh-vue-icons/icons";
import { GiInfo } from "oh-vue-icons/icons";
import { RiLogoutBoxLine } from "oh-vue-icons/icons";
import { FaUserGraduate } from "oh-vue-icons/icons";

// Adiciona todos os ícones de uma vez
addIcons(IoLockClosedOutline, IoSchoolSharp, FaUserCircle, GiInfo, RiLogoutBoxLine, FaUserGraduate);

const app = createApp(App);
app.component("VIcon", OhVueIcon);
app.use(Toast);
app.use(createPinia());
app.use(appRoutes);

app.mount('#app');
