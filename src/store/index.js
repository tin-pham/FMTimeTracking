import { createStore } from 'vuex';

import routine from '../../data/data.json';

export default createStore({
  state: {
    routine,
    dates: ['Daily', 'Weekly', 'Monthly'],
    currentDate: 'weekly',
  },

  mutations: {
    getRoutine() {
      console.log('Successfully Fetched');
    },
    changeDate(state, payload) {
      state.currentDate = payload;
    },
  },
  actions: {
    getRoutine(context) {
      context.commit('getRoutine');
    },
    changeDate(context, payload) {
      context.commit('changeDate', payload);
    },
  },
});
