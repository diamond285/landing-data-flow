import {request} from "@/service/utils";

export default {
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.role
     *
     * @returns {Promise}
     */
    addRole(params = {}) {
        return request('post', '/role', params).then((response) => {
            return response;
        })
    },
};
