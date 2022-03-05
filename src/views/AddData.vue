<template>
  <div id="addData">
    <div class="row">
      <div class="col border border-3 py-3">
        <h1>Add Data</h1>
        <h5>
          Insert Graph Data By Filling In the Forms & Uploading A CSV File
        </h5>
      </div>

      <div class="container bg-white py-3"></div>
    </div>

    <div class="container border">
      <div class="row py-4">
        <div class="col text-start">
          <h4>Cardiomyopathy Information</h4>
        </div>

        <vee-form
          :validation-schema="schema"
          @submit="addpart1"
          :initial-values="data1"
        >
          <div class="row">
            <div class="col form-control-lg">
              <div class="text-start">
                <label for="">Enter The Data Source</label>

                <div class="col">
                  <vee-field
                    type="text"
                    name="datasource"
                    v-model="datasource"
                    class="form-control form-control-lg"
                  />
                  <ErrorMessage class="text-danger mx-2" name="datasource" />
                </div>

                <label for="">Most Common Forms Of Cardiomyopathy</label>

                <div class="col">
                  <vee-field
                    as="select"
                    name="mostcommon"
                    v-model="mostcommon"
                    class="form-select form-select-lg"
                  >
                    <option disabled selected value="">Select One</option>
                    <option value="hydertrophicardiomyopathy">
                      Hydertrophic Cardiomyopathy
                    </option>
                    <option value="dilatedcardiomyopathy">
                      Dilated Cardiomyopathy
                    </option>
                    <option value="arrhythmogenicright">
                      Arrhythmogenic Right Ventricular Cardiomyopathy
                    </option>
                    <option value="other">Other</option>
                  </vee-field>
                  <ErrorMessage class="text-danger mx-2" name="mostcommon" />
                </div>

                <label for="">Mutated Gene Type</label>

                <vee-field
                  as="select"
                  name="mutgene"
                  v-model="mutgene"
                  class="form-select form-select-lg"
                >
                  <option disabled selected value="">Select One</option>
                  <option value="MYH7">MYH7</option>
                  <option value="MYBC3">MYBC3</option>
                  <option value="TNNT2">TNNT2</option>
                  <option value="ACTC">ACTC</option>
                  <option value="TPM1">TPM1</option>
                  <option value="TNNC1">TNNC1</option>
                  <option value="TNNI3">TNNI3</option>
                  <option value="MYL2">MYL2</option>
                  <option value="TTN">TTN</option>
                  <option value="Other">Other</option>
                </vee-field>
                <ErrorMessage class="text-danger mx-2" name="mutgene" />
              </div>
            </div>
            <div v-show="datasource && mostcommon && mutgene" class="col mb-4">
              <div class="col mx-auto mt-4 mb-4">
                <h4 class="container bg-white mx-auto text-black">
                  Upload CSV File
                </h4>
              </div>
              <input
                @change="onFileChange"
                ref="inputFile"
                type="file"
                class="form-control mt-4"
              />
              <p>
                You will be redirected to the graph page when the file upload
                finishes
              </p>
            </div>
          </div>
          <div v-if="datasource && mostcommon && mutgene" class="col mx-auto">
            <button class="btn-dark btn-lg mt-5 px-5" type="submit">
              Add Additional Data With Csv File
            </button>
          </div>
          <div v-else class="col mx-auto">
            <button class="btn-dark btn-lg mt-5 px-5" type="submit">
              Add Data
            </button>
          </div>
        </vee-form>
      </div>
    </div>
  </div>
</template>

<script>
import Papa from "papaparse";
import { db, auth, addDoc, collection } from "../firebase/database";
import { mapState } from "vuex";
import router from "../router";

export default {
  computed: {
    // getting data from the vuex store
    ...mapState({
      csvFileContent: (state) => state.data.csvFileContent,
    }),
  },
  data() {
    return {
      schema: {
        datasource: "required",
        mostcommon: "required",
        mutgene: "required",
      },
      schematwo: {
        leftventricularenddiastolicvolume: "required",
        rightventricularenddiastolicvolume: "required",
        leftventricularendsystolicvolume: "required",
        rightventricularendsystolicvolume: "required",
        leftventricularejectionfraction: "required",
        rightventricularejectionfraction: "required",
        leftventricularmass: "required",
        rightventricularmass: "required",
        leftsystolicvolume: "required",
        rightsystolicvolume: "required",
        fibrosisscarring: "required",
        gender: "required",
        ageatmri: "required",
        apicalhcm: "required",
        suddencardiacdeath: "required",
        hypertension: "required",
        diabetes: "required",
        myectomy: "required",
      },
      data1: {
        datasource: "",
        mostcommon: "",
        mutgene: "",
      },
      data2: {
        leftventricularenddiastolicvolume: "",
        rightventricularenddiastolicvolume: "",
        leftventricularendsystolicvolume: "",
        rightventricularendsystolicvolume: "",
        leftventricularejectionfraction: "",
        rightventricularejectionfraction: "",
        leftventricularmass: "",
        rightventricularmass: "",
        leftsystolicvolume: "",
        rightsystolicvolume: "",
        fibrosisscarring: "",
        gender: "",
        ageatmri: "",
        apicalhcm: "",
        suddencardiacdeath: "",
        hypertension: "",
        diabetes: "",
        myectomy: "",
      },
      datasource: "",
      mostcommon: "",
      mutgene: "",

      leftventricularenddiastolicvolume: "",
      rightventricularenddiastolicvolume: "",
      leftventricularendsystolicvolume: "",
      rightventricularendsystolicvolume: "",
      leftventricularejectionfraction: "",
      rightventricularejectionfraction: "",
      leftventricularmass: "",
      rightventricularmass: "",
      leftsystolicvolume: "",
      rightsystolicvolume: "",
      fibrosisscarring: "",
      gender: "",
      ageatmri: "",
      apicalhcm: "",
      suddencardiacdeath: "",
      hypertension: "",
      diabetes: "",
      myectomy: "",

      selectedfile: "",
      filteredcsv: "",
    };
  },
  methods: {
    onFileChange(e) {
      console.log("datasource", this.datasource);
      console.log("file", e.target.files[0]);

      console.log("file type", e.target.files[0].type);
      this.selectedfile = e.target.files[0].name;
      console.log("selected file", this.selectedfile);

      console.log("selectedfile type", typeof this.selectedfile);
      if (!this.selectedfile.includes("csv")) {
        alert("Please upload a CSV file");
        this.$refs.inputFile.value = null;
        this.selectedfile = "";
      } else {
        console.log("You have selected the correct file type");
        this.papaParse(e);
      }
    },
    papaParse(e) {
      const dataSource = this.datasource;
      const mostCommon = this.mostcommon;
      const mutGene = this.mutgene;
      console.log("parsing this file with PapaParse", e.target.files[0]);
      Papa.parse(e.target.files[0], {
        async complete(results) {
          // loop through results.data and delete the empty keys and values
          for (var i = 0; i < results.data.length; i++) {
            for (var key in results.data[i]) {
              if (results.data[i][key] === "") {
                delete results.data[i][key];
              }
            }
          }

          const filteredData = [...results.data];
          this.csvFileContent = filteredData;

          console.log("data filteredData", this.csvFileContent);

          //MODIFICATIONS ⚙
          const userEmail = auth?.currentUser?.email;
          //This instructions below are used to get the date now
          let today = new Date();
          let date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
          let time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
          //we get date format 2022-3-4 19:51:15 (example)
          let createdAt = date + " " + time;
          /*We use addDoc it's a function in firebase to add a new document
            and we pass all data of document to add a new data source to the users collection
          */
          await addDoc(collection(db, "users"), {
            email: userEmail,
            dataSource,
            mostCommon,
            mutGene,
            csvContent: this.csvFileContent,
            createdAt,
          });
          //END MODIFICATIONS ⚙

          router.push("Showgraph");
        },
        header: true,
        skipEmptyLines: true,
      });
    },
    async addpart1() {
      console.log("csv file content", this.csvFileContent);
      console.log("addpart1");
      if (!this.selectedfile) {
        alert("Please upload a file");
      } else {
        console.log("adding part 1");
        try {
          const { datasource, mostcommon, mutgene, csvFileContent } = this;

          console.log("datasource", datasource);
          console.log("mostcommon", mostcommon);
          console.log("mutgene", mutgene);
          console.log("filteredcsv", csvFileContent);

          await this.$store.dispatch("addthedatawithfile", {
            // sending these values to the addthedatawithfile function
            // in vuex store
            datasource,
            mostcommon,
            mutgene,
            csvFileContent,
          });
        } catch (error) {
          console.log("error", error);
        }
      }
    },
    addpart2() {
      console.log("addpart2");
    },
  },
};
</script>

<style></style>
