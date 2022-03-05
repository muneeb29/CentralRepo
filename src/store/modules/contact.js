import {
  addDoc,
  contactCollection
} from "../../firebase/database";

export default {
  // this is the initial data of the authentication vuex store
  state: {
    sendMessageError: '',
    sendMessageSuccess: '',
  },
  mutations: {
    // mutations let you modify the initial data
    setSendMessageError(state, payload) {
      state.sendMessageError = payload.message
    },
    setSendMessageSuccess(state, payload) {
      state.sendMessageSuccess = payload.message
    },
  },
  actions: {
    // this action starts when the user clicks the register button
    // commit is used to start a mutation
    // the payload is the data of the form
    async sendmessage({ commit }, payload) {

      const {
        name,
        email,
        message,
      } = payload

      // if there is no name, email, message
      // the execution of the function will be stopped
      if (!name || !email || !message) return

      // starting the process to send a message
      try {
        const docRef = await addDoc(contactCollection, {
          // adding the name, email and message to the document
          name,
          email,
          message,
        });
        console.log("Document written with ID: ", docRef.id);
        // setting the success message
        commit('setSendMessageSuccess', {
          message: 'The message has been sent successfully!'
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        // setting the error message
        commit('setSendMessageError', {
          message: 'There has been an error, please try again later.'
        });
      }
    },
  },
};