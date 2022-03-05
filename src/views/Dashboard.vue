<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Dashboard</h1>
      <h5>Welcome To The User Dashboard</h5>
    </div>
  </div>
  <div class="row py-4 px-4">
    <div class="col text-start">
      <select
        name="mut-gene"
        id="mut-geneID"
        class="form-select"
        style="width: auto"
        
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
      </select>
    </div>

    <div class="col">
      <button class="btn-dark btn-md px-3 rounded" type="submit">
        Delete Rows
      </button>
    </div>

    <div class="col">
      <button class="btn-dark btn-md px-3 rounded" type="submit">
        Delete All
      </button>
    </div>
    <div class="col">
      <button class="btn-dark btn-md px-3 rounded" type="submit">
        Add Data
      </button>
    </div>
  </div>

  <div class="row border">
    <div class="col border" style="width:auto">
      
    </div>
    <div class="col border">
      <h6>ledv</h6>
    </div>
    <div class="col border">
      <h6>lesv</h6>
    </div>
    <div class="col border">
      <h6>lsv</h6>
    </div>
    <div class="col border">
      <h6>lvef</h6>
    </div>
    <div class="col border">
      <h6>lvmass</h6>
    </div>
    <div class="col border">
      <h6>redv</h6>
    </div>
    <div class="col border">
      <h6>resv</h6>
    </div>
    <div class="col border">
      <h6>rsv</h6>
    </div>
    <div class="col border">
      <h6>rvef</h6>
    </div>
    <div class="col border">
      <h6>scar</h6>
    </div>
    <div class="col border">
      <h6>female</h6>
    </div>
    <div class="col border">
      <h6>AgeatMRI</h6>
    </div>
    <div class="col border">
      <h6>ApicalHCM</h6>
    </div>
    <div class="col border">
      <h6>hypertension</h6>
    </div>
    <div class="col border">
      <h6>Diabetes</h6>
    </div>
    <div class="col border">
      <h6>Myectomydate</h6>
    </div>
  </div>

  <div class="row px-4">
    <div class="col border text-start form-check form-check-inline">
      <input type="radio" class="form-check-input" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
