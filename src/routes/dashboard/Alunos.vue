<template>
    <div id="contain">
        <Searchbar />

        <AlunosList v-if="alunos.length" :alunos="alunos" />
        <h1 style="color: white;" v-else>Nenhum aluno por aqui...</h1>
    </div>
</template>

<script setup>
import AlunosList from "../../components/AlunosList.vue";
import axios from 'axios';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Searchbar from "../../components/Searchbar.vue";


const alunos = ref([]);

async function getAlunos() {
    try {
        const response = await axios.get("http://localhost:3000/alunos");
        alunos.value = response.data;
    } catch (error) {
        console.log(error);

    }
}

let intervalId;

onMounted(() => {
    getAlunos();
    intervalId = setInterval(getAlunos, 5000);
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})

</script>

<style scoped>
    #contain {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #contain > h1{
     margin-bottom: auto;   
    }

</style>