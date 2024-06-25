import axios from 'axios';
import VuexPersist from 'vuex-persist';

const state = {
    todos : [],
    test : 'Name'
};

const getters = {
    allTodos : (state) =>  state.todos
};

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
    },

    async addTodo({ commit }, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', 
            { title , completed : false});
        commit('addTodo', response.data);    
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('REMOVE_TODO', id);
    },
    async filterTodos({commit}, e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos', response.data)
    },

    async updateTodos({commit}, upTodo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${upTodo.id}`, upTodo)
        commit('updateTodo', response.data)
    }
};
 
const mutations = {
    setTodos : (state, resTodos) => (state.todos = resTodos),
    addTodo : (state, todo) => state.todos.unshift(todo),
    REMOVE_TODO : (state, id) => 
    ( state.todos= state.todos.filter(todo => todo.id !== id) ),
    updateTodo : (state,upTodo) => {
        const index = state.todos.findIndex(todo => todo.id === upTodo.id)
        if (index !== -1){
            state.todos.splice(index,1,upTodo);
        } 
    }
};

const vuexLocalStorage = new VuexPersist ({
       storage : window.localStorage,
       reducer : state => ({todos : state.todos})
})

export default {
    state,
    getters,
    actions,
    mutations 
}