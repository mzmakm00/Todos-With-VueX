import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import todosModule from './modules/todos.js';
import buttonModule from './modules/button.js'

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key : 'todos',
    storage: window.localStorage,

    restoreState : (key, storage) => {
       
        const storedState = JSON.parse(storage.getItem(key));
       
        return ({ todosModule : {...storedState} }) || {}
    },

    reducer: (state) => ({
        todos: state.todosModule.todos,
        buttonClicked : state.buttonModule.buttonClicked
    }),
    
    filter : (mutation) => {
        return ['toggleButton'].includes(mutation.type);
    }
});

const store = new Vuex.Store({
    modules: {
        todosModule,
        buttonModule

    },
    
    plugins: [vuexLocalStorage.plugin]
});

export default store;
