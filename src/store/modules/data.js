import { addDoc, usersCollection } from "../../firebase/database";

export default {
  state: {
    dataSource: "",
    mostCommonFormsOfCardiomyopathy: "",
    mutatedGeneType: "",
    csvFileContent: [],
  },
  mutations: {
    // mutations let you modify the initial data
    setSendMessageError(state, payload) {
      state.sendMessageError = payload.message;
    },
    setSendMessageSuccess(state, payload) {
      state.sendMessageSuccess = payload.message;
    },
  },
  actions: {
    // this action starts when the user clicks the register button
    // commit is used to start a mutation
    // the payload is the data of the form
    async addthedatawithfile({ commit }, payload) {
      const { datasource, mostcommon, mutgene, csvFileContent } = payload;

      try {
        console.log("payload", payload);
        const docRef = await addDoc(usersCollection, {
          // adding the datasource, mostcommon, mutgene, filteredcsv to the document
          datasource,
          mostcommon,
          mutgene,
          csvFileContent,
        });
        console.log("Document written with ID: ", docRef.id);
        // setting the success message
        commit("setSendMessageSuccess", {
          message: "The content has been saved successfully!",
        });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
