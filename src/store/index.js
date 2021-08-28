import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        totalCount: 10,
        isLarryHappy: true,
        isJennyHappy: true,
    },

    getters: {
        happyStaff: state => {
            return state.isLarryHappy && state.isJennyHappy;
        }
    },

    mutations: {
        //Jenny

        removeTv(state, amount) {
            state.totalCount -= amount;
        }
    },

    actions: {
        //Larry

        removeTv(context, amount) {
            if (context.state.totalCount >= amount) {
                context.commit('removeTv', amount);
            }
        }
    }

});