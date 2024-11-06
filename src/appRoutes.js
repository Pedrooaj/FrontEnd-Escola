import { createRouter, createWebHistory } from "vue-router"
import { useGlobalStore } from "./stores/GlobalStore"
import Alunos from "./routes/dashboard/Alunos.vue"
import Conta from "./routes/dashboard/Conta.vue"
import Informativos from "./routes/dashboard/Informativos.vue"


const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import('./routes/Dashboard.vue'),
        meta: {
            auth: true
        },
        children: [
            {
                path: 'alunos',
                name: 'alunos',
                component: Alunos
            },{
                path: 'conta',
                name: 'conta',
                component: Conta
            },{
                path: 'info',
                name: 'info',
                component: Informativos
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('./routes/Login.vue')
    },
    {
        path: "/register",
        name: "Register",
        component: () => import('./routes/Register.vue')
    }

]

const appRoutes = createRouter({
    history: createWebHistory(),
    routes
})


appRoutes.beforeEach((to, from, next) => {
    if(to.meta?.auth){
        const store = useGlobalStore();

        if(store.token){
            const isAuthenticated = store.isAuth();

            isAuthenticated.then((res) => {
                if(res){
                    next();
                }else{
                    next({name: "Login"})
                }
            })
        }else{
            next({name: "Login"})
        }
    }else{
        next();
    }
})

export default appRoutes;