import {request} from "@/service/utils";

export default {
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.email
     * @param {String} params.data.password
     *
     * @returns {Promise}
     */
    login(params = {}) {
        return request('post', '/auth/login', params).then((response) => {
            return response;
        })
    },
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.name
     * @param {String} params.data.email
     * @param {String} params.data.password
     * @param {String} params.data.slog
     *
     * @returns {Promise}
     */
    register(params = {}) {
        return request('post', '/auth/register', params).then((response) => {
            return response;
        });
    }
};
