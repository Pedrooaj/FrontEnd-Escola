import axios from "axios";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("Global", () => {        
    const isAuth = async () => {        
        try {
            const res = await axios.get('http://localhost:3000/token/verify', {
                withCredentials: true
            });
            return res.data.authorization;
        } catch (error) {
            return false;
        }
    }

    return {
        isAuth
    }
})