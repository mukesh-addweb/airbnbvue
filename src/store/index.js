import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
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
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})


