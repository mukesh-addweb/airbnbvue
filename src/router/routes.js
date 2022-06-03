const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "signin", component: () => import("src/pages/SigninPage.vue") },
      { path: "signup", component: () => import("src/pages/SignupPage.vue") },
      {
        path: "register-property",
        component: () => import("src/pages/RegisterProperty.vue"),
      },
    ],
  },

  {
    path: "/signin",
    component: () => import("pages/Sigin.vue.vue"),
    children: [{ path: "", component: () => import("pages/Sigin.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
