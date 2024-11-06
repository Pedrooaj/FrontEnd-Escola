<template>
    <aside>
        <ul>
            <button id="menu-btn" @click="status = !status"
                onclick="this.querySelector('span').classList.toggle('is-closed')" class="button">
                <span class="burger-4">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            <li @click="route.push('/dashboard/alunos')" id="item">
                <V-Icon scale="1.8" name="io-school-sharp" />
                <p id="text-side">Alunos</p>
            </li>
            <li @click="route.push('/dashboard/conta')"  id="item">
                <V-Icon scale="1.8" name="fa-user-circle" />
                <p id="text-side">Conta</p>
            </li>
            <li @click="route.push('/dashboard/info')" id="item">
                <V-Icon scale="1.8" name="gi-info" />
                <p id="text-side">Informativos</p>
            </li>
            <li v-on:click="handleLogout" id="logout">
                <V-Icon scale="1.8" name="ri-logout-box-line" color="red" />
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const status = ref(false);
const route = useRouter();

const handleLogout = () => {
    localStorage.removeItem('token');
    route.push('/login')
}

watch(status, (newValue) => {
    const side = document.querySelector('aside');
    const texts = document.querySelectorAll('#text-side');

    if (!newValue) {
        side.style.width = '20%';
        texts.forEach((item) => {
            item.style.opacity = '0';
        })
    } else {
        side.style.width = '100%';
        texts.forEach((item) => {
            item.style.opacity = '1';
        })
    }
})

</script>

<style scoped>
aside {
    background-color: #F1F1F1;
    height: 100%;
    padding: 20px 0;
    width: 20%;
    transition: all 0.3s ease-in-out;
}

aside ul {
    display: flex;
    align-items: start;
    margin: 0;
    padding: 0;
    flex-direction: column;
    gap: 25px;
    list-style: none;
}

aside ul li {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 12px;
}



aside ul li p {
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    font-weight: bold;
    font-size: 20px;
}



#logout {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
}

.button {
    background: none;
    border: 0;
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    cursor: pointer;
    padding: 0;
    margin: 0;
    scale: 0.7;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 3px;
}



.burger-4 {
    position: relative;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
}

.burger-4 span {
    width: 32px;
    height: 3px;
    background-color: black;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
}

.burger-4 span:nth-child(1) {
    top: 20%;
}

.burger-4 span:nth-child(2) {
    top: 50%;
}

.burger-4 span:nth-child(3) {
    top: 80%;
}

.is-closed.burger-4 span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    -webkit-transform: translateY(-50%) rotate(45deg);
    -moz-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    -o-transform: translateY(-50%) rotate(45deg);
}

.is-closed.burger-4 span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    -webkit-transform: translateY(-50%) rotate(-45deg);
    -moz-transform: translateY(-50%) rotate(-45deg);
    -ms-transform: translateY(-50%) rotate(-45deg);
    -o-transform: translateY(-50%) rotate(-45deg);
}

.is-closed.burger-4 span:nth-child(3) {
    transform: translateX(-50px);
    -webkit-transform: translateX(-50px);
    -moz-transform: translateX(-50px);
    -ms-transform: translateX(-50px);
    -o-transform: translateX(-50px);
    opacity: 0;
}
</style>