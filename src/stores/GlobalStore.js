import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";



export const useGlobalStore = defineStore("Global", () => {
    const token = ref();
    
    const setToken = (value) => {
        token.value = value;
    }
    
    const getToken = computed(() => {
        return token.value;
    });

    const isAuth = async () => {
        try {
            const authorization =  `Bearer ${token.value}`;
        
            const res = await axios.get('http://localhost:3000/token/verify', {
            headers: {
                Authorization: authorization
            }
            });
            return res.data.authorization;
        } catch (error) {
            return false;
        } 
    }


        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
   


   

    return {
        token, setToken, getToken, isAuth
    }
})