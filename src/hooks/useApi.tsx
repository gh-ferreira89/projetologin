import axios from 'axios';
import { idText } from 'typescript';

const api = axios.create({
    baseURL: process.env.REACT_APP_API

});

export const useApi = () => ({
    validadeToken: async (token: string) => {
        return {
            user: {id: 3, name: 'jose', email: 'jose@hotmail.com'},
        };
        const response = await api.post ('/validate', { token });
        return response.data;
    },
    signin: async (email: string, passaword: string) => {
         //return {
           // user: {id: 3, name: 'jose', email: 'jose@hotmail.com'},
            // token: '123456789'
         //};
        const response = await api.post ('/signin', { email, passaword });
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});