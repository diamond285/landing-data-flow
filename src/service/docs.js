import {request} from "@/service/utils";

export default {
    getMyDocs() {
        return request('get', '/document/my').then((response) => {
            return response;
        });
    },
    getDocsForMe() {
        return request('get', '/document/me').then((response) => {
            return response;
        });
    },
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.content
     * @param {String} params.data.test
     * @param {Array} params.data.route
     *
     * @returns {Promise}
     */
    createDoc(params = {}) {
        return request('post', '/document/create', params).then((response) => {
            return response
        })
    },
    passDocument(params = {}) {
        return request('post', '/document/pass', params).then((response) => {
            return response
        })
    },
    cancelDocument(params = {}) {
        return request('post', '/document/cancel', params).then((response) => {
            return response
        })
    }
}
