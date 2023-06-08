import {request} from "@/service/utils";

export default {
    getAllUsers() {
        return request('get', '/user/all').then((response) => {
            return response;
        });
    },
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.firstName
     * @param {String} params.data.lastName
     * @param {String} params.data.bio
     * @param {String} params.data.email
     * @param {String} params.data.password
     * @param {String} params.data.roleId
     *
     * @returns {Promise}
     */
    addUser(params = {}) {
        return request('post', '/user', params).then((response) => {
            return response
        })
    },
    searchUser(word) {
        return request('get', '/user/search?word=' + word).then((response) => {
            return response
        })
    }
}
