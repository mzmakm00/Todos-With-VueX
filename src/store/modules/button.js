const state = {
   buttonClicked : false, 
}

const getters = {
    isButtonClicked : (state) => state.buttonClicked
}
const actions = {
    async toggleButtonClicked ({commit}){
        commit('toggleButton')
    }
}
const mutations = {
    toggleButton: (state) => (state.buttonClicked = !state.buttonClicked)
};

export default {
    state,
    getters,
    actions,
    mutations
};