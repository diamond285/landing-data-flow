import {request} from "@/service/utils";

export default {
    getProfile() {
        return request('get', '/profile').then((response) => {
            return response;
        });
    }
}
