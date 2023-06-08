import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home";
import Signin from "@/views/signin";
import Signup from "@/views/signup";
import Directory from "@/views/directory";
import Contacts from "@/views/contacts";
import Admin from "@/views/admin";
import Docs from "@/views/docs/index.vue";
import My_docs from "@/views/my_docs/index.vue";
import Me_docs from "@/views/docs_me/index.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/sign-in',
        name: 'sing-in',
        component: Signin
    },
    {
        path: '/sign-up',
        name: 'sing-up',
        component: Signup
    },
    {
        path: '/directory',
        name: 'directory',
        component: Directory
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },
    {
        path: '/docs',
        name: 'docs',
        component: Docs
    },
    {
        path: '/my-docs',
        name: 'my-docs',
        component: My_docs
    },
    {
        path: '/me-docs',
        name: 'me-docs',
        component: Me_docs
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
