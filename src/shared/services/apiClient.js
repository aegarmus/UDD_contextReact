import axios from 'axios';
import { envLoader } from '../../config/envLoader';

const { backendUrl } = envLoader;

export const apiClient = axios.create({
    baseURL: backendUrl,
    timeout: 5000,
});

