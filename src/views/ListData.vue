<template>
  <div class="row py-4">
    <div class="col-12 border border-3 py-3">
      <h1>List Data</h1>
    </div>
    <div
      class="modal"
      :style="[itemDsDelete != '' ? { display: 'block' } : '']"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete {{ itemDsDelete }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="itemDsDelete = ''"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Are you sure you want to delete this?</strong></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="itemDsDelete = ''"
            >
              No
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteItem(itemDsDelete)"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-8 mx-auto">
      <div class="my-4" style="float: right">
        <router-link :to="{ name: 'AddData' }">
          <div class="btn btn-primary">Add Data</div>
        </router-link>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Data Source</th>
            <th scope="col">Form</th>
            <th scope="col">Gene Type</th>
            <th scope="col">Created At</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in dataAll" :key="index">
            <td>{{ data.dataSource }}</td>
            <td>{{ data.mostCommon }}</td>
            <td>{{ data.mutGene }}</td>
            <td>{{ data.createdAt }}</td>
            <td>
              <div
                v-if="currentUserEmail == data.email"
                class="btn btn-danger"
                @click="itemDsDelete = data.dataSource"
              >
                Delete
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {
  auth,
  getDocs,
  usersCollection,
  where,
  query,
  deleteDoc,
  db,
  doc,
} from "../firebase/database";
export default {
  data() {
    return {
      dataAll: [], //will contain all data source of the actual user
      itemDsDelete: "", //will contain the delete status if is empty the modal not displayed else he display the delete modal to confirm
      currentUserEmail: "",
    };
  },
  methods: {
    //MODIFICATIONS ⚙
    //The function load help us to get all data source of the current user, it's will executed every mount of ListData.vue
    async load() {
      //We use query to make a new query in our users collection and we add a condition using where
      const querySnapshot = await getDocs(usersCollection);
      querySnapshot.forEach((doc) => {
        if (doc.data().csvContent) {
          this.dataAll.push(doc.data());
        }
      });
      //We get all documents and we add them into our dataAll array
    },
    //The function deleteItem get the data source name in arguments and help us to delete a data source
    async deleteItem(DS) {
      //We get the document in our users collection using the name of dataSource (DS)
      let q = query(usersCollection, where("dataSource", "==", DS));
      q = query(q, where("email", "==", auth.currentUser.email));
      let userDataDocumentId;

      //We look for the document id of this data source
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        userDataDocumentId = doc?.id;
      });

      const userDataDocumentRef = doc(db, "users", userDataDocumentId);
      //And after we use the deleteDoc of firebase to delete our document from firebase
      await deleteDoc(userDataDocumentRef).then(() => {
        //We remove also the document from dataAll array
        this.dataAll = this.dataAll.filter((item) => item.dataSource != DS);
        this.itemDsDelete = "";
      });
    },
    // END MODIFICATIONS ⚙
  },
  mounted() {
    this.currentUserEmail = auth.currentUser.email;
    this.load();
  },
};
</script>
<style></style>
