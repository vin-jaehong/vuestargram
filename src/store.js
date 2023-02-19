import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            name: 'buddy',
            age: 20,
            likes: 30,
            isLike: false,
            more: {

            },
        }
    },

    mutations: {
        changeName(state) {
            state.name = 'Buddy Vin';
        },
        increaseAge(state, data) {
            state.age += data;
        },
        toggleIsLike(state) {
            state.isLike != state.isLike; 
        },
        clickLikes(state) {
            state.isLike ? state.likes-- : state.likes++;
            state.isLike = !state.isLike;
        },
        setMore(state, data) {
            state.more = data;
        }
    },

    actions: {
        getData(context) {
            axios.get('https://codingapple1.github.io/vue/more0.json').then((post)=> {
                context.commit('setMore', post.data);
            });
        },
    },
});

export default store;