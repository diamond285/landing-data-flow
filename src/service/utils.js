import axios from 'axios'
import $storage from "@/storage";



const ERROR_STATUSES = { NOT_AUTHORIZED: 401, FORBIDDEN: 403 };

const instance = axios.create({baseURL: "http://localhost:8080"})

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const auth_token = $storage.local_storage.get('auth_token')
if (auth_token) {
    instance.defaults.headers.common.Authorization = `${auth_token}`;
}

const errorHandler = (error) => {
    const { status } = errorHandler.response
    if ($storage.local_storage.get('auth_token') || status === ERROR_STATUSES.NOT_AUTHORIZED) {
        $storage.local_storage.remove('auth_token');
        delete instance.defaults.headers.common.Authorization;
    }
    throw error;
}

export const request = (method, url, data = {}, options = {}) => {
    if (options.isFile) {
        instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    }
    const auth_token = $storage.local_storage.get('auth_token')
    if (auth_token) {
        instance.defaults.headers.common.Authorization = `${auth_token}`;
    }
    let responseType = 'json';
    if (options.isBlob) {
        responseType = 'blob';
    }
    return instance({
        method, url: url, ...data, responseType, headers: { ...options.headers },
    }).catch(errorHandler);
}

export const login = (token) => {
    $storage.local_storage.remove('auth_token');
    $storage.local_storage.set('auth_token', token)
    instance.defaults.headers.common.Authorization = `${token}`;
    //window.location.href = `${window.location.origin}${reload_url}`;
}

export const logout = () => {
    $storage.local_storage.remove('auth_token');
    window.local.reload();
}
