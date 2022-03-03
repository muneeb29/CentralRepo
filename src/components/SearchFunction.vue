<template>
  <form @submit.prevent="determine">
    <div class="col mx-auto form-control-lg">
      <label for="">Most Common Forms Of Cardiomyopathy</label>
      <div class="row py-3">
        <div class="col">
          <select
            name="most-common"
            id="most-commonID"
            class="form-select mx-auto"
            style="width: auto"
            v-model="type"
          >
            <option disabled selected value="">Select One</option>
            <option value="Hydertorophic">Hydertrophic Cardiomyopathy</option>
            <option value="Dilated">Dilated Cardiomyopathy</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row py-2">
      <div class="col mx-auto form-control-lg">
        <label for="">Mutated Gene Type</label>

        <div class="row">
          <div class="col">
            <select
              name="mut-gene"
              id="mut-geneID"
              class="form-select mx-auto"
              style="width: auto"
              v-model="gene"
              required
            >
              <option disabled selected value="">Select One</option>
              <option value="MYH7">MYH7</option>
              <option value="MYBPC3">MYBPC3</option>
              <option value="TNNT2">TNNT2</option>
              <option value="ACTC">ACTC</option>
              <option value="TPM1">TPM1</option>
              <option value="TNNC1">TNNC1</option>
              <option value="TNNI3">TNNI3</option>
              <option value="MYL2">MYL2</option>
              <option value="TTN">TTN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col py-4">
        <button class="btn-dark btn-lg px-5" type="submit">Search</button>
      </div>
    </div>
  </form>

  <div class="row py-3">
    <div class="col">
      <h4>Results:</h4>
    </div>
    <div v-if="ncbiList">
      <div class="container bg-dark text-white border py-2">
        <h6>Results For Gene:</h6>
      </div>
      <div v-for="dis in ncbiList.result" :key="dis">
        <div class="container border border-3">
          <div class="row mx-auto">
            <div class="col">
              <b> {{ dis.name }}</b>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <b>{{ dis.description }}</b>
            </div>
          </div>
          <div class="row text-start">
            <div class="col">
              {{ dis.summary }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <br />
      <br />
    </div>

    <div v-if="error">{{ error }}</div>
    <div v-if="hpoList">
      <div class="container bg-dark text-white border py-2">
        <h6>Results For Disease:</h6>
      </div>
      <div :span="8" v-for="disease in hpoList.catTermsMap" :key="disease">
        <div class="container text-start border border-3">
          <div class="row">
            <div class="row py-2">
              <div class="col">
                <b>Cat Label:</b>
                {{ disease.catLabel }}
              </div>
              <div class="row">
                <div class="col">
                  <b>Ontology ID:</b>
                  {{ disease.terms[0].ontologyId }}
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b>Gene Name:</b>
                  {{ disease.terms[0].name }}
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b>Gene Description:</b>
                  {{ disease.terms[0].definition }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import hpoCheck from "@/composables/hpoCheck";
import ncbiCheck from "@/composables/ncbiCheck";
export default {
  name: "SearchFunction",

  setup() {
    const type = ref("");
    const gene = ref("");

    const { hpoList, checkHPO, searchCardio, error } = hpoCheck();
    const { ncbiList, checkNCBI, searchNCBI, error1 } = ncbiCheck();

    function determine() {
      checkHPO(type, gene);
      checkNCBI(type, gene);
    }

    return {
      determine,
      type,
      gene,
      ncbiList,
      hpoList,
      searchNCBI,
      searchCardio,
      error,
      error1,
    };
  },
};
</script>
