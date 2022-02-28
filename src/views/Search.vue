<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Search</h1>
      <h5>Search Experimental Data By Type And Mutation Type</h5>
    </div>
  </div>
  <form @submit.prevent="HPO">
    <div class="col mx-auto form-control-lg">
      <label for="">Most Common Forms Of Cardiomyopathy</label>
      <div class="row py-3">
        <div class="col">
          <select name="most-common" id="most-commonID" v-model="types">
            <option disabled selected value="">Select One</option>
            <option value="Hydertorophic">Hydertrophic Cardiomyopathy</option>
            <option value="Dilated Cardiomyopathy">
              Dilated Cardiomyopathy
            </option>
            <option value="Arrhythmogenic Right Ventricular Cardiomyopathy">
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
            <select name="mut-gene" id="mut-geneID" v-model="genes">
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

    <div v-if="item">
      <div :span="8" v-for="disease in item.catTermsMap" :key="disease">
        <div class="container text-start border border-3">
          <div class="row">
            <div class="row py-2">
              <div class="col">
                <b>CatLabel:</b>
                {{ disease.catLabel }}
              </div>
              <div class="row">
                <div class="col">
                  <b>OntologyId:</b>
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
import { computed, ref } from "vue";
export default {
  name: "Search",

  setup() {
    const types = ref("");
    const genes = ref("");
    const data = ref();
    let id = ref("");

    const type = types;
    const gene = genes;

    function HPO() {
      if ((type.value == "Hydertorophic") & (gene.value == "MYH7")) {
        id = 192600;
        searchCardio(id);
      }

      if ((type.value == "Hydertorophic") & (gene.value == "TNNT2")) {
        id = 115195;
        searchCardio(id);
      }

      if ((type.value == "Hydertorophic") & (gene.value == "MYBC3")) {
        id = 115197;
        searchCardio(id);
      }

      if ((type.value == "Hydertorophic") & (gene.value == "TPM1")) {
        id = 115196;
        searchCardio(id);
      }
    }

    async function searchCardio(id) {
      let search_data = await fetch(
        `https://hpo.jax.org/api/hpo/disease/OMIM:${id}`
      );
      data.value = await search_data.json();
    }

    const item = computed(() => {
      return data.value;
    });

    return { HPO, types, genes, searchCardio, item };
  },
};
</script>

<style></style>
