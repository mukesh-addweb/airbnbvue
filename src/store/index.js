import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        id: 'abcId',
        name: 'abc',
        email: 'abc@gmail.com',
        password: '123' 
      }
    ],
    bookedProperties: [
      {

      }
    ]
  },
  mutations: {
    registerUser(state, payload){
      console.log(payload)
      state.users.push(payload)
      console.log(state.users)
    }
  },
  getters:{
    getUsers(state){
      return state.users
    }
  },
  actions: {
  },
  modules: {
  }
})
