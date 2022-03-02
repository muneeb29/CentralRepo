<template>
  <form @submit.prevent="HPO">
    <div class="col mx-auto form-control-lg">
      <label for="">Most Common Forms Of Cardiomyopathy</label>
      <div class="row py-3">
        <div class="col">
          <select
            name="most-common"
            id="most-commonID"
            class="form-select mx-auto"
            style="width: auto"
            v-model="types"
          >
            <option disabled selected value="">Select One</option>
            <option value="Hydertorophic">Hydertrophic Cardiomyopathy</option>
            <option value="Dilated">Dilated Cardiomyopathy</option>
            <option value="Arrhythmogenic">
              Arrhythmogenic Right Ventricular Cardiomyopathy
            </option>
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
              v-model="genes"
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
      <div v-for="dis in ncbiList.result" :key="dis">
        <div class="container border text-start">
          <div class="row py-2">
            <div class="col">
              <b>Name:</b>
              {{ dis.name }}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <b>Description:</b>
              {{ dis.description }}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <b>Summary</b>
              {{ dis.summary }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="error">{{ error }}</div>
    <div v-if="hpoList">
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
export default {
  name: "Search",

  setup() {
    const hpoList = ref("");
    const ncbiList = ref("");
    const error = ref(null);
    const types = ref("");
    const genes = ref("");
    let id = ref("");
    let ids = ref("");

    const type = types;
    const gene = genes;

    function HPO() {
      if (type.value == "Hydertorophic" && gene.value == "MYH7") {
        id = 192600;
        searchCardio(id);
      }
      if (type.value == "Hydertorophic" && gene.value == "MYBPC3") {
        id = 115197;
        searchCardio(id);
      }

      if (type.value == "Hydertorophic" && gene.value == "TNNT2") {
        id = 115195;
        searchCardio(id);
      }

      if (type.value == "Hydertorophic" && gene.value == "ACTC") {
        id = 612098;
        searchCardio(id);
      }
      if (type.value == "Hydertorophic" && gene.value == "TPM1") {
        id = 115196;
        searchCardio(id);
      }

      if (type.value == "Hydertorophic" && gene.value == "TNNC1") {
        id = 613243;
        searchCardio(id);
      }
      if (type.value == "Hydertorophic" && gene.value == "TNNI3") {
        id = 613690;
        searchCardio(id);
      }

      if (type.value == "Hydertorophic" && gene.value == "MYL2") {
        id = 608758;
        searchCardio(id);
      }

      if (type.value == "Dilated" && gene.value == "MYH7") {
        id = 613426;
        searchCardio(id);
      }
      if (type.value == "Dilated" && gene.value == "TNNT2") {
        id = 601494;
        searchCardio(id);
      }
      if (type.value == "Dilated" && gene.value == "ACTC") {
        id = 613424;
        searchCardio(id);
      }
      if (type.value == "Dilated" && gene.value == "TPM1") {
        id = 611878;
        searchCardio(id);
      }
      if (type.value == "Dilated" && gene.value == "TNNC1") {
        id = 611879;
        searchCardio(id);
      }
      if (type.value == "Dilated" && gene.value == "TNNI3") {
        id = 611880;
        searchCardio(id);
      }
      
      else {
        id = 0;
      }

// NCBI Database
      if (gene.value == "MYH7") {
        ids = 4625;
        searchNCBI(ids);
      }
      if (gene.value == "MYBPC3") {
        ids = 4607;
        searchNCBI(ids);
      }
      if (gene.value == "TNNT2") {
        ids = 7139;
        searchNCBI(ids);
      }
      if (gene.value == "ACTC") {
        ids = 70;
        searchNCBI(ids);
      }
      if (gene.value == "TPM1") {
        ids = 7168;
        searchNCBI(ids);
      }
      if (gene.value == "TNNC1") {
        ids = 7134;
        searchNCBI(ids);
      }
      if (gene.value == "TNNI3") {
        ids = 7137;
        searchNCBI(ids);
      }
      if (gene.value == "MYL2") {
        ids = 4633;
        searchNCBI(ids);
      }
      if (gene.value == "TTN") {
        ids = 7273;
        searchNCBI(ids);
      }
    }
    async function searchCardio(id) {
      try {
        const resp = await fetch(
          `https://hpo.jax.org/api/hpo/disease/OMIM:${id}`
        );

        if (!resp.ok) {
          throw error("No Results Found!");
        }
        hpoList.value = await resp.json();
      } catch (e) {
        error.value = e;
      }
    }

    async function searchNCBI(ids) {
      try {
        const resp = await fetch(
          `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&format=json&id=` +
            ids
        );

        if (!resp.ok) {
          throw error("No Results Found!");
        }
        ncbiList.value = await resp.json();
        console.log(ncbiList.value);
      } catch (e) {
        error.value = e;
      }
    }

    return {
      HPO,
      types,
      genes,
      searchCardio,
      hpoList,
      ncbiList,
      searchNCBI,
      error,
    };
  },
};
</script>

