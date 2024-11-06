<template>
    <div :style="{ backgroundImage: `url(${bg2})` }" id="container">
        <div id="sidebar">
            <Sidebar />
        </div>
        
        <div id="children">
            <RouterView />  
        </div>
    
    </div>
</template>

<style scoped>

    #children{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #container{
        width: 100%;
        min-height: 100dvh;
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: 1fr;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
</style>



<script setup>
import bg2 from "../assets/bg-2.svg"
import Sidebar from '../components/Sidebar.vue';
</script>