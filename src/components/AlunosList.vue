<template>

    <ul id="lista">
        <AlunoCard v-for="aluno in alunos" :key="aluno.id" :aluno="{...aluno}" />
    </ul>

</template>

<script setup>
    import AlunoCard from './AlunoCard.vue';

    const props = defineProps({
        alunos: Object
    });

</script>

<style scoped>
#lista {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 20% 20%;
    grid-template-rows: auto;
    gap: 20px;
    justify-content: center;
    align-content: center;

}
</style>