<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Show Graph</h1>
    </div>

    <div class="container">
      <div class="row py-3">
        <div class="col">
          <h4>Forms Of Cardiomyopathy</h4>
        </div>
        <div class="col">
          <h4>Mutated Gene Types</h4>
        </div>
        <div class="col">
          <h4>X-Axis Of Experimental Data</h4>
        </div>
        <div class="col">
          <h4>Y-Axis Of Experimental Data</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <select name="most-common" id="most-commonID">
            <option disabled selected value="">Select One</option>
            <option>Hydertrophic Cardiomyopathy</option>
            <option>Dilated Cardiomyopathy</option>
            <option>Arrhythmogenic Right Ventricular Cardiomyopathy</option>
            <option value="">Other</option>
          </select>
        </div>
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
        <div class="col">
          <select name="exp1" id="exp1">
            <option value="ledv">ledv</option>
            <option value="lesv">lesv</option>
            <option value="lsv">lsv</option>
            <option value="lvef">lvef</option>
            <option value="lvmass">lvmass</option>
            <option value="redv">redv</option>
            <option value="resv">resv</option>
            <option value="rsv">rsv</option>
            <option value="rvef">rvef</option>
            <option value="scar">scar</option>
            <option value="gender">gender</option>
            <option value="AgeatMRI">AgeatMRI</option>
            <option value="SuddenCardiacDeath">SuddenCardiacDeath</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Myectomydate">Myectomydate</option>
          </select>
        </div>
        <div class="col">
          <select name="exp2" id="exp2">
            <option value="ledv">ledv</option>
            <option value="lesv">lesv</option>
            <option value="lsv">lsv</option>
            <option value="lvef">lvef</option>
            <option value="lvmass">lvmass</option>
            <option value="redv">redv</option>
            <option value="resv">resv</option>
            <option value="rsv">rsv</option>
            <option value="rvef">rvef</option>
            <option value="scar">scar</option>
            <option value="gender">gender</option>
            <option value="AgeatMRI">AgeatMRI</option>
            <option value="SuddenCardiacDeath">SuddenCardiacDeath</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Myectomydate">Myectomydate</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="py-5 center">
        <line-chart class="border border-2 bg-light"></line-chart>

        <div class="col border border-2">
          <h5>Data Source:</h5>
          <h5>Created At:</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/graphs/LineChart";
export default {
  components: { LineChart },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
