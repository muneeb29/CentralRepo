<template>
  <div>
    <h1 class="container bg-dark text-white">Add Data</h1>

    <div>
      <form>
        <div class="form-control-lg">
          <select v-model="selected">
            <option disabled value="">Select Cardiomyopathy Type</option>
            <option>Hydertrophic Cardiomyopathy</option>
            <option>Dilated Cardiomyopathy</option>
            <option>Restrictive Cardiomyopathy</option>
            <option>Transthyretin Amyloid Cardiomyopathy (ATTR-CM)</option>
          
          </select>
        </div>
        <div class="form-control-lg">
          <select v-model="selectedGene">
            <option disabled value="">Select Mutated Gene Type</option>
            <option>MYH7</option>
            <option>MYBPC3</option>
            <option>TNNT2</option>
            <option>ACTC</option>
            <option>TPM1</option>
            <option>TNNCI</option>
            <option>TNNI3</option>
            <option>MYL2</option>
            <option>TTN</option>
          </select>
          <br />
          <br />

          <h3>Data Type:</h3>

          <div>
            <!-- X-axis -->
            <input type="text" placeholder="Time(sec)" />
            <!-- Y-axis -->
            <input type="text" placeholder="Sarcomere length" />
            <!-- Round Y-axis -->
            <input type="number" placeholder="Y-Axis" />
            <!-- Amount of Y-axis -->
            <input type="number" placeholder="Y-Axis" />

            <button class="btn-dark btn-lg px-5" type="submit">Graph</button>
          </div>

          <br /><br />
          <div class="container bg-light py-5 hi-10">
            <h3>Upload CSV File</h3>
            <input type="file" class="form-control" id="customFile" />
            <br />
          </div>

          <button class="btn-dark btn-lg px-5" type="submit">Add Data</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
