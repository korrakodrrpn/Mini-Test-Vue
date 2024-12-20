import { createRouter, createWebHistory } from "vue-router";
import UserList from "@/components/UserList.vue";
import UserForm from "@/components/UserForm.vue";

const routes = [
  {
    path: "/",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/add-user",
    name: "AddUser",
    component: UserForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
