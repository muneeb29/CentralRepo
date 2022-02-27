<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Search</h1>
      <h5>Search Experimental Data By Type And Mutation Type</h5>
    </div>
  </div>
  <form @submit.prevent="query">
    <div class="row py-3">
      <div class="col mx-auto form-control-lg">
        <label for="">Most Common Forms Of Cardiomyopathy</label>

        <div class="row py-3">
          <div class="col">
            <select name="most-common" id="most-commonID">
              <option disabled selected value="">Select One</option>
              <option>Hydertrophic Cardiomyopathy</option>
              <option>Dilated Cardiomyopathy</option>
              <option>Arrhythmogenic Right Ventricular Cardiomyopathy</option>
              <option value="">Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-2">
      <div class="col mx-auto form-control-lg">
        <label for="">Mutated Gene Type</label>

        <div class="row">
          <div class="col">
            <select name="mut-gene" id="mut-geneID">
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
  </div>
</template>

<script>

export default {
  
};
</script>

<style></style>
