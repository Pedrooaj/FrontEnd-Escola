<template>
    <form v-on:submit.prevent="handleSubmit()" id="formulario">
        <h1>Registrar-se</h1>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nome</label>
            <input v-model="user.nome" type="text" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">
                <VIcon name="io-lock-closed-outline" style="width: 16px;" /> Email seguro!
            </div>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
            <a id="link" v-on:click="isAcount()">Já tem conta?</a>
        </div>

        <button style="font-size: 18px; font-weight: bold;" type="submit" class="btn btn-primary">Registrar</button>
    </form>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const route = useRouter();

const user = ref({
    nome: "",
    email: "",
    password: ""
});



const isAcount = () => {
    route.push("/login")
}

const handleSubmit = async () => {
    try {
        await axios.post("http://localhost:3000/users", user.value);
        toast.success("Registrado com sucesso!", { position: "bottom-left" });
    } catch (error) {
        toast.error(error.response.data.errors[0], { position: "bottom-left" });
    }
}


</script>

<style scoped>
#button {
    display: flex;
    justify-content: center;
}

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
    width: 30%;
    height: auto;
    padding: 50px 15px;
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

@media (max-width: 550px) {
    #formulario{
        width: 75%;
    }
}

#formulario > div {
    width: 60%;
}

#formulario>button {
    width: 50%;
    padding: 15px 0;
}
</style>