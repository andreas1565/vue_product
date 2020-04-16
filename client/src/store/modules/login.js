const APIURL = "http://localhost:1337/auth/get-token";
const state = {
    login: [],
}

const getters = {
    LoginData: state => state.login
}

const actions = {
    async Login({ commit }, Formdata) {
        const response = await fetch(APIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: Formdata.email,
                password: Formdata.password
            })
        });
        let result = await response.json();
        console.log(result);
        localStorage.setItem('token', result.token);
        localStorage.setItem('refreshToken', result.refreshToken);
        window.location.href = '/dashboard/products';
        commit('setLogin', result);
    }
}

const mutations = {
    setLogin: (state, login) => (state.login = login),
    logOut(state) {
        state.login = [],
            localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }

}
export default {
    state,
    getters,
    actions,
    mutations
};