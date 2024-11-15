<template>
    <div id="card">
        <img v-if="aluno.Fotos[0]" :src="aluno.Fotos[0].url" alt="Image">
        <V-icon id="image" v-else name="fa-user-graduate" />
        <div>
            <h5>{{ aluno.nome + " " + aluno.sobrenome }}</h5>
            <button id="modal-button" type="button" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#modal-edit">
                Editar
            </button>
            <div class="modal fade" id="modal-edit" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalLabel"><b>Aluno</b> - {{ aluno.nome + " " +
                                aluno.sobrenome }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="student-image-Edit">
                                <img id="image" v-if="aluno.Fotos[0]" :src="aluno.Fotos[0].url">
                                <V-icon v-else id="image" name="fa-user-graduate" />
                                <input type="file">
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Nome" aria-label="First name">
                                </div>
                                <div class="col mb-3">
                                    <input type="text" class="form-control" placeholder="Sobrenome"
                                        aria-label="Last name">
                                </div>
                                <div style="display: flex; align-items: start; flex-direction: column;" class="mb-3">
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="email@example.com">
                                </div>
                                <div class="col">
                                    <input v-model="aluno.idade" type="number" class="form-control" placeholder="Idade">
                                </div>
                                <div class="col">
                                    <input type="number" 
                                        class="form-control" placeholder="Altura">
                                </div>
                                <div class="col">
                                    <input type="number"
                                        class="form-control" placeholder="Peso">
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button @click="handleDelete" style="background-color: #ff6347; border: none;" type="button"
                                class="btn btn-secondary" data-bs-dismiss="modal">Deletar</button>
                            <button type="button" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    aluno: Object
});
import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/alunos/${props.aluno.id}`, {
        withCredentials: true
    }).then((result) => {
        toast.success("Aluno deletado com sucesso!", { position: 'bottom-left' })
    }).catch((error) => {
        toast.error("Erro ao deletar aluno! ", { position: 'bottom-left' })
    })
}

</script>

<style scoped>
#card {
    background-color: #D4EDDA;
    border-radius: 6px;
    width: 245px;
    height: 320px;
    padding: 12px;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 7px;
}


#card img {
    width: 100%;
    height: 75%;
}

#card svg {
    width: 100%;
    height: 75%;
    border: 1px solid black;
}

#student-image-Edit {
    width: 100%;
    height: 150px;
}

#student-image-Edit>#image {
    border-radius: 100%;
    border: 2px solid black;
    width: 30%;
    height: 90%;
}

#student-image-Edit input[type="file"] {
    position: absolute;
    opacity: 0;
    width: 30%;
    height: 90%;
    left: 0;
    transform: translateX(120%);
    cursor: pointer;
}
</style>