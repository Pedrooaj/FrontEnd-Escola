<template>
    <div>
        <button id="modal-button" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
            Adicionar Aluno
        </button>
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel">Adicionar - <b>Aluno</b> </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="student-image">
                            <V-icon id="image" name="fa-user-graduate" />
                            <input type="file">
                        </div>
                        <div class="row">
                            <div class="col">
                                <input v-model="aluno.nome" type="text" class="form-control" placeholder="Nome"
                                    aria-label="First name">
                            </div>
                            <div class="col mb-3">
                                <input v-model="aluno.sobrenome" type="text" class="form-control"
                                    placeholder="Sobrenome" aria-label="Last name">
                            </div>
                            <div style="display: flex; align-items: start; flex-direction: column; " class="mb-3">

                                <input v-model="aluno.email" type="email" class="form-control"
                                    id="exampleFormControlInput1" placeholder="Email">
                            </div>
                            <div class="col">
                                <input @input="validateInput('idade', $event, integerPattern)" v-model="aluno.idade" type="text" class="form-control" placeholder="Idade">
                            </div>
                            <div class="col">
                                <input @input="validateInput('altura', $event, decimalPattern)"  v-model="aluno.altura" type="text" class="form-control" placeholder="Altura">
                            </div>
                            <div class="col">
                                <input @input="validateInput('peso', $event, decimalPattern)"  v-model="aluno.peso"  type="text" class="form-control"
                                    placeholder="Peso" title="Digite um número decimal válido" />
                            </div>


                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="createAluno()"  type="button" class="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';


const toast = useToast();
const aluno = ref({
    nome: "",
    sobrenome: "",
    email: "",
    idade: null,
    altura: null,
    peso: null
});


// Regex para validar numeros
const decimalPattern = /^[0-9]*\.?[0-9]*$/;
const integerPattern = /^\d+$/;

// Função genérica para validar os inputs com base na chave
const validateInput = (field, event, type) => {
  const value = event.target.value;

  if (!type.test(value)) {
    aluno.value[field] = value.slice(0, -1);
  } else {
    aluno.value[field] = value;
  }
};


const createAluno = async () => {
    try {
        await axios.post("http://localhost:3000/alunos", aluno.value, {
            withCredentials: true
        });
        toast.success("Sucesso ao adicionar aluno", { position: "bottom-left" })
    } catch (error) {
        toast.error("Erro ao cadastrar aluno", { position: "bottom-left" })
    }
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



#student-image {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
}

#student-image>#image {
    border-radius: 100%;
    border: 2px solid black;
    width: 30%;
    height: 85%;
    padding: 5px;

}

#student-image input[type="file"] {
    position: absolute;
    opacity: 0;
    width: 30%;
    height: 41%;
    left: 0;
    transform: translateX(120%);
    cursor: pointer;
}
</style>
