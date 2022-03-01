<template>
      <div class="row">
      <div class="col border border-3 py-3">
        <h1>Dashboard</h1>
        <h4>Welcome To The User Dashboard</h4>
      </div>
      </div>
      <div class="row py-4">
        <div class="col text-start">
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
          <button type="submit" class="form- bg-dark text-white">Delete Rows</button>
        </div>
        
        <div class="col">
          <button type="submit" class="form- bg-dark text-white">Delete All</button>
        </div>
        <div class="col">
          <button type="submit" class="form- bg-dark text-white">Add Data</button>
        </div>
        </div>

        <div class="row border">
           <div class="col border">
            <br/>
          </div>
          <div class="col border">
            <h4>ledv</h4>
          </div>
             <div class="col border">
            <h4>lesv</h4>
          </div>
             <div class="col border">
            <h4>lsv</h4>
          </div>
             <div class="col border">
            <h4>lvef</h4>
          </div>
             <div class="col border">
            <h4>lvmass</h4>
          </div>
             <div class="col border">
            <h4>redv</h4>
          </div>
             <div class="col border">
            <h4>resv</h4>
          </div>
             <div class="col border">
            <h4>rsv</h4>
          </div>
             <div class="col border">
            <h4>rvef</h4>
          </div>
             <div class="col border">
            <h4>scar</h4>
          </div>
             <div class="col border">
            <h4>gender</h4>
          </div>
             <div class="col border">
            <h4>AgeatMRI</h4>
          </div>
             <div class="col border">
            <h4>Sudden Cardiac Death</h4>
          </div>
             <div class="col border">
            <h4>Diabetes</h4>
          </div>
             <div class="col border">
            <h4>Myectomydate</h4>
          </div>
        </div>

        <div class="row">
          <div class="col border text-start">
            <input type="radio">
          </div>
        </div>

</template>

<script>
export default {

}
</script>

<style>

</style>