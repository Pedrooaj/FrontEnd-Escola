<template>
    <div :style="{ backgroundImage: `url(${bg})` }" id="container">
        <LoginForm />
    </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';
import bg from "../assets/bg.svg"


</script>

<style scoped>
#container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


}
</style>