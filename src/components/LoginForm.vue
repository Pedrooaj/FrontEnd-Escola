<template>
    <form v-on:submit.prevent="handleSubmit()" id="formulario">
        <h1>Login</h1>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" v-model="user.email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">
                <VIcon name="io-lock-closed-outline" style="width: 16px;" /> Email seguro!
            </div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
            <a id="link" v-on:click="notAccount()">Não tem conta?</a>
        </div>
        <button style="font-size: 18px; font-weight: bold;" type="submit" class="btn btn-primary ">Login</button>
    </form>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import { useGlobalStore } from '../stores/GlobalStore';
import { useToast } from 'vue-toastification';
const store = useGlobalStore();
const toast = useToast();



const notAccount = () => router.push("/register");

const router = useRouter();

const user = ref({ email: "", password: "" });

const handleSubmit = async () => {
    try {
        const response = await axios.post("http://localhost:3000/token", user.value);
        store.setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success(`Seja bem vindo, ${response.data.nome}`, { position: "bottom-left" });
        router.push('/dashboard');
    } catch (error) {
        toast.error(error.response.data.errors[0], { position: "bottom-left" });
    }
}

</script>

<style scoped>
#link {
    margin-left: 2px;
    font-size: 0.9rem;
    color: blue;
    cursor: pointer;
    transition: 0.3s;
}

#link:hover {
    font-size: 1rem;
    opacity: 0.7;
}

#formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    width: auto;
    height: auto;
    padding: 60px 170px;
    background-color: azure;
    -webkit-box-shadow: 2px 10px 26px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 10px 26px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 10px 26px -6px rgba(0, 0, 0, 0.75);
}

@media (max-width: 1200px) {
    #formulario {
        width: 65%;
    }
}

#formulario>div {
    width: 120%;
}

#formulario>button {
    width: 100%;
    padding: 15px 0;
}
</style>