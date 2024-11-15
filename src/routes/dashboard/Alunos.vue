<template>
    <div id="contain">
        <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
            <Searchbar />
            <AddModal />
        </div>
        <AlunosList v-if="alunos.length" :alunos="alunos" />
        <div style="color: white;" v-else><h1>Nenhum aluno por aqui...</h1></div>
    </div>
</template>

<script setup>
import AlunosList from "../../components/AlunosList.vue";
import axios from 'axios';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Searchbar from "../../components/Searchbar.vue";
import AddModal from "../../components/AddModal.vue";



const alunos = ref([]);

async function getAlunos() {
    try {
        const response = await axios.get("http://localhost:3000/alunos",{
            withCredentials: true
        });
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

    #contain > div{
     margin-bottom: auto;   
    }

</style>