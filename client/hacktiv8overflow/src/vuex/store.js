import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

const http = axios.create({
  baseURL: `http://localhost:3000`
})

const state = {
  login: [],
  questions: [],
  createQuest: [],
  myquest: [],
  questID: [],
  signup: []
}

const mutations = {
  setUser (state, payload) {
    console.log('data mutation sbg payload user: ', payload)
    state.login = payload
  },
  setUserCreate (state, payload) {
    console.log('datamutasi signup', payload)
    state.signup = payload
  },
  setQuestions (state, payload) {
    console.log('data  mutation sbg payload questions: ', payload)
    state.questions = payload
  },
  setCreateQuest (state, payload) {
    console.log('ini mutations create question : ', payload)
    state.questions.push(payload)
    state.createQuest = payload
  },
  setMyQuestion (state, payload) {
    console.log('ini mutations my question : ', payload)
    state.myquest = payload
  },
  setId (state, payload) {
    console.log('mutations ', payload)
    state.questID = payload
  }
  // setDeleteMyQuest (state, payload) {
  //   console.log('id mutations yang akan di hapus  : ', payload)
  //   let idx = state.myquest.findIndex(mq => mq._id === payload)
  //   console.log('ini IDX==========>', idx)
  //   state.myquest.splice(idx, 1)
  // }
}
const actions = {
  getUser (context, payload) {
    http.post('/users/login', {
      username: payload.username,
      password: payload.password
    })
    .then(response => {
      console.log('data di action ====> ', response)
      localStorage.setItem('token', response.data.token)
      context.commit('setUser', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  createUser (context, payload) {
    http.post('/users/register', {
      fullname: payload.fullname,
      email: payload.email,
      username: payload.username,
      password: payload.password
    })
    .then(response => {
      context.commit('setUserCreate', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  getQuestion (context, payload) {
    http.get('/questions/all')
    .then(response => {
      console.log('ini response questions all user: ', response)
      context.commit('setQuestions', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  createQuestion (context, payload) {
    http.post('/questions/', {
      title: payload.title,
      content: payload.content
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('ini response create question : ', response)
      context.commit('setCreateQuest', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  myQuestion (context, payload) {
    http.get('/questions/', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('ini response my questions : ', response)
      context.commit('setMyQuestion', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  doDelMyQuest (context, payload) {
    console.log('ini payload buat delete', payload)
    http.delete(`/questions/${payload}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('ini response delete my questions : ', response)
      context.commit('setDeleteMyQuest', payload)
    })
    .catch(err => {
      console.log(err)
    })
  },
  doId (context, payload) {
    console.log('PAYLOAD ID', payload)
    http.get(`/questions/all/${payload}`)
    .then(response => {
      console.log('response id', response)
      context.commit('setId', response.data)
    })
  }
  // doEditMyQuest (context, payload) {
  //   console.log(' ini payload untuk update : ', payload)
  //   http.put(`/questions/${payload}`, {
  //     headers: {
  //       token: localStorage.getItem('token')
  //     }
  //   })
  //   .then(response => {
  //     console.log('ini response edit my quest : ', response)
  //     content.commit('setEditMyQuest', payload)
  //   })
  //   .catch
  // }
}
const store = new vuex.Store({
  state,
  mutations,
  actions
})

export default store
