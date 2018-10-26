let file = require('@/assets/test.json');

export default {
    namespaced: true,

    state: {
        mock: [],
    },
    getters: {
        mock: state => state.mock,
    },
    mutations: {
        GET_MOCK( state, mock) {
            state.mock = mock
        },
    },
    actions: {
        getMockInfo( {commit} ) {
            commit('GET_MOCK', file);
        },
    }
}