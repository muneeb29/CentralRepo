import {
  auth,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  usersCollection,
} from "../../firebase/database";
import router from "../../router";

export default {
  // this is the initial data of the authentication vuex store
  state: {
    userLoggedIn: false,
    registerEmailError: "",
    registerDuplicateEmailError: "",
    registerEmailSuccess: "",
    loginError: "",
    incorrectPasswordCount: 0,
    passwordInputEnabled: true,
    resetPasswordError: "",
    formCorrectlySubmitted: false,
    welcomeMessage: "",
  },
  getters:{
    get_user_loggedIn(state){
      return state.userLoggedIn;
    }
  },
  mutations: {
    // mutations let you modify the initial data
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
    setRegisterEmailError(state, payload) {
      state.registerEmailError = payload.message;
    },
    setRegisterDuplicateEmailError(state, payload) {
      state.registerDuplicateEmailError = payload.message;
    },
    setRegisterEmailSuccess(state, payload) {
      state.registerEmailSuccess = payload.message;
    },
    setLoginError(state, payload) {
      state.loginError = payload.message;
    },
    setIncorrectPasswordCount(state, payload) {
      state.incorrectPasswordCount = payload.count;
    },
    togglePasswordInputEnabled(state) {
      state.passwordInputEnabled = !state.passwordInputEnabled;
    },
    setResetPasswordError(state, payload) {
      state.resetPasswordError = payload.message;
    },
    toggleFormCorrectlySubmitted(state, payload) {
      state.formCorrectlySubmitted = payload.status;
    },
    setWelcomeMessage(state, payload) {
      state.welcomeMessage = payload.message;
    },
  },
  actions: {
    // this action starts when the user clicks the register button
    // commit is used to start a mutation
    // the payload is the data of the form
    async register({ commit }, payload) {
      commit("setRegisterEmailError", {
        message: "",
      });
      commit("setRegisterDuplicateEmailError", {
        message: "",
      });

      const {
        name,
        address,
        telephone,
        institutionalaffiliation,
        email,
        password,
      } = payload;

      // if there is no email, password, name
      // or institutional affiliation
      // the execution of the function will be stopped
      if (!email || !password || !name || !institutionalaffiliation) return;

      // starting the registration process
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser, {
            url: "http://localhost:8080/login/",
          }).then(async () => {
            const user = userCredential.user;
            console.log("USER", user);

            const docRef = await addDoc(usersCollection, {
              name,
              address,
              telephone,
              institutionalaffiliation,
              email,
            });
            console.log("Document written with ID: ", docRef.id);

            await auth.signOut();

            commit("setRegisterEmailSuccess", {
              message: `A verification email has been sent at ${email}. Please verify your email to use this app.`,
            });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          if (errorMessage.includes("invalid-email")) {
            commit("setRegisterEmailError", {
              message: "The email is invalid",
            });
          } else if (errorMessage.includes("email-already-in-use")) {
            commit("setRegisterDuplicateEmailError", {
              message: "The user already exists",
            });
          }
        });
    },
    // this action starts when the user clicks the login button
    // commit is used to start a mutation
    // the state can be passed to read the status of the initial data
    // the payload is the data of the form
    async login({ commit, state }, payload) {
      commit("setLoginError", {
        message: "",
      });

      // starting the login process
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("USER", user);
          commit("toggleAuth");
          router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          if (errorMessage.includes("invalid-email")) {
            commit("setLoginError", {
              message: "Please enter valid email",
            });
          } else if (errorMessage.includes("internal-error")) {
            commit("setLoginError", {
              message: "An internal error has happened",
            });
          } else if (errorMessage.includes("wrong-password")) {
            if (state.incorrectPasswordCount === 4) {
              commit("setLoginError", {
                message:
                  "You have reached the 5 login attempts, please try again later.",
              });
              commit("togglePasswordInputEnabled");
              return;
            }

            commit("setLoginError", {
              message: "The password is incorrect",
            });
            commit("setIncorrectPasswordCount", {
              count: state.incorrectPasswordCount + 1,
            });
          } else if (errorMessage.includes("too-many-requests")) {
            commit("setLoginError", {
              message:
                "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
            });
            commit("togglePasswordInputEnabled");
          }
        });
    },
    // this action starts when the user clicks
    // the resetpassword button
    // commit is used to start a mutation
    // the payload is the data of the form
    async resetpassword({ commit }, payload) {
      // starting the password reset process
      sendPasswordResetEmail(auth, payload.email)
        .then(() => {
          commit("toggleFormCorrectlySubmitted", {
            status: true,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          if (errorMessage.includes("user-not-found")) {
            commit("setResetPasswordError", {
              message: "The user is not found",
            });
          } else if (errorMessage.includes("missing-email")) {
            commit("setResetPasswordError", {
              message: "The email is missing",
            });
          }
        });
    },
    // this action starts when you open the app
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit("toggleAuth");
      }
    },
    // this is used to sign out a user
    async signout({ commit }) {
      await auth.signOut();
      commit("toggleAuth");
    },
  },
};
