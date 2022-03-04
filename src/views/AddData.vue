<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Add Data</h1>
      <h5>Insert Graph Data By Filling In the Forms & Uploading A CSV File</h5>
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

    <div class="row py-2">
      <div class="col text-start form-control-lg">
        <div class="row">
          <!-- Button for adding data for either CSV File Or other inputs on left -->
          <!-- <div class="col mx-auto">
            <button class="btn-dark btn-lg px-5" type="submit">Add Data</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div v-show="datasource && mostcommon && mutgene" class="py-5">
    <h1 class="container bg-dark text-white">Or Enter Manually</h1>

    <div class="container bg-light py-5 hi-10">
      <vee-form
        :validation-schema="schematwo"
        @submit="addpart2"
        :initial-values="data2"
      >
        <div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">
                Left ventricular end diastolic volume (ledv)
              </label>
              <vee-field
                type="text"
                v-model="leftventricularenddiastolicvolume"
                name="leftventricularenddiastolicvolume"
                class="form-control mx-auto"
                placeholder="Enter left ventricular end diastolic volume (ledv)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="leftventricularenddiastolicvolume"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">
                Right ventricular end diastolic volume (redv)</label
              >
              <vee-field
                type="text"
                v-model="rightventricularenddiastolicvolume"
                name="rightventricularenddiastolicvolume"
                class="form-control mx-auto"
                placeholder="Enter right ventricular end diastolic volume (redv)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="rightventricularenddiastolicvolume"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">
                Left ventricular end systolic volume (lesv)</label
              >
              <vee-field
                type="text"
                v-model="leftventricularendsystolicvolume"
                name="leftventricularendsystolicvolume"
                class="form-control mx-auto"
                placeholder="Enter left ventricular end systolic volume (lesv)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="leftventricularendsystolicvolume"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">
                Right ventricular end systolic volume (resv)
              </label>
              <vee-field
                type="text"
                v-model="rightventricularendsystolicvolume"
                name="rightventricularendsystolicvolume"
                class="form-control mx-auto"
                placeholder="Enter right ventricular end systolic volume (resv)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="rightventricularendsystolicvolume"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">
                Left ventricular ejection fraction (lvef)
              </label>
              <vee-field
                type="text"
                v-model="leftventricularejectionfraction"
                name="leftventricularejectionfraction"
                class="form-control mx-auto"
                placeholder="Enter left ventricular ejection fraction (lvef)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="leftventricularejectionfraction"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">
                Right ventricular ejection fraction (rvef)
              </label>
              <vee-field
                type="text"
                v-model="rightventricularejectionfraction"
                name="rightventricularejectionfraction"
                class="form-control mx-auto"
                placeholder="Enter right ventricular ejection fraction (rvef)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="rightventricularejectionfraction"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label"> Left ventricular mass (lvmass)</label>
              <vee-field
                type="text"
                v-model="leftventricularmass"
                name="leftventricularmass"
                class="form-control mx-auto"
                placeholder="Enter left ventricular mass (lvmass)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="leftventricularmass"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Right ventricular mass (rvmass)</label>
              <vee-field
                type="text"
                v-model="rightventricularmass"
                name="rightventricularmass"
                class="form-control mx-auto"
                placeholder="Enter right ventricular mass (rvmass)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="rightventricularmass"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Left systolic volume (lsv)</label>
              <vee-field
                type="text"
                v-model="leftsystolicvolume"
                name="leftsystolicvolume"
                class="form-control mx-auto"
                placeholder="Enter left systolic volume (lsv)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="leftsystolicvolume"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Right systolic volume (rsv)</label>
              <vee-field
                type="text"
                v-model="rightsystolicvolume"
                name="rightsystolicvolume"
                class="form-control mx-auto"
                placeholder="Enter right systolic volume (rsv)"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="rightsystolicvolume"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Fibrosis/scarring (scar)</label>
              <vee-field
                type="text"
                v-model="fibrosisscarring"
                name="fibrosisscarring"
                class="form-control mx-auto"
                placeholder="Enter fibrosis/scarring (scar)"
              />
              <ErrorMessage class="text-danger mx-2" name="fibrosisscarring" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Gender</label>
              <vee-field
                type="text"
                v-model="gender"
                name="gender"
                class="form-control mx-auto"
                placeholder="Enter gender"
              />
              <ErrorMessage class="text-danger mx-2" name="gender" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Age at MRI</label>
              <vee-field
                type="text"
                v-model="ageatmri"
                name="ageatmri"
                class="form-control mx-auto"
                placeholder="Enter age at MRI"
              />
              <ErrorMessage class="text-danger mx-2" name="ageatmri" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Apical HCM</label>
              <vee-field
                type="text"
                v-model="apicalhcm"
                name="apicalhcm"
                class="form-control mx-auto"
                placeholder="Enter apical HCM"
              />
              <ErrorMessage class="text-danger mx-2" name="apicalhcm" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Sudden cardiac death</label>
              <vee-field
                type="text"
                v-model="suddencardiacdeath"
                name="suddencardiacdeath"
                class="form-control mx-auto"
                placeholder="Enter sudden cardiac death"
              />
              <ErrorMessage
                class="text-danger mx-2"
                name="suddencardiacdeath"
              />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Hypertension</label>
              <vee-field
                type="text"
                v-model="hypertension"
                name="hypertension"
                class="form-control mx-auto"
                placeholder="Enter hypertension"
              />
              <ErrorMessage class="text-danger mx-2" name="hypertension" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Diabetes</label>
              <vee-field
                type="text"
                v-model="diabetes"
                name="diabetes"
                class="form-control mx-auto"
                placeholder="Enter diabetes"
              />
              <ErrorMessage class="text-danger mx-2" name="diabetes" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col col-sm-5 mx-auto">
              <label class="form-label">Myectomy</label>
              <vee-field
                type="text"
                v-model="myectomy"
                name="myectomy"
                class="form-control mx-auto"
                placeholder="Enter myectomy"
              />
              <ErrorMessage class="text-danger mx-2" name="myectomy" />
            </div>
          </div>

          <button class="btn-dark btn-lg px-5" type="submit">Add Data</button>
        </div>
      </vee-form>
    </div>
  </div> -->
</template>

<script>
import Papa from "papaparse";
import {
  db,
  auth,
  doc,
  getDocs,
  updateDoc,
  usersCollection,
  query,
  where,
} from "../firebase/database";
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

          const userEmail = auth?.currentUser?.email;

          const q = query(usersCollection, where("email", "==", userEmail));

          let userDataDocumentId;

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            userDataDocumentId = doc?.id;
          });

          const userDataDocumentRef = doc(db, "users", userDataDocumentId);

          await updateDoc(userDataDocumentRef, {
            dataSource,
            mostCommon,
            mutGene,
            csvContent: this.csvFileContent,
          });

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
