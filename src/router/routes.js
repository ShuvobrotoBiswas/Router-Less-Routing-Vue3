import shortid from "shortid";
import Login from "pages/login-page.vue";
import Users from "pages/users-page.vue";
import Home from "pages/IndexPage.vue";

const generateCode = () => {
  return shortid.generate();
};

const routes = [
  {
    path: "/:code",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: (to, from, next) => {
      if (!to.params.code) {
        to.params.code = generateCode();
        console.log("🚀 ~ file: routes.js:16 ~ generateCode", generateCode);
      }
      if (to.params.code === "HTW3@722") {
        next({ name: "login" });
      } else if (to.params.code === "HTW3@723") {
        next({ name: "users" });
      } else if (to.params.code === "HTW3@724") {
        next({ name: "home" });
      } else {
        next({ name: "404" });
      }
    },
    children: [
      { path: "/home", component: () => import("pages/IndexPage.vue") },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("pages/ErrorNotFound.vue"),
    props: true,
  },
];

export default routes;
