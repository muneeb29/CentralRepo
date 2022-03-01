<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Add Data</h1>
      <h5>Insert Graph Data By Filling In the Forms & Uploading A CSV File</h5>
    </div>

  <div class="container bg-white py-3"></div>
  </div>
  
  <div class="container border">
    <div class="row">
      <div class="col text-start py-2">
        <h4>Cardiomyopathy Information</h4>
      </div>

   <div class="col mx-auto py-2">
    <h4 class="container bg-white mx-auto text-black">Upload CSV File</h4>
  </div>


      <div class="row">
        <div class="col form-control-lg">
          <div class="text-start">
            <label for="">Enter The Data Source</label>
            <div class="row">
              <div class="col">
                <input type="text" name="data-src" id="data-srcID" />
              </div>

              <div class="col mx-auto">
                <input type="file" class="form-control">
              </div>
            </div>
          </div>
        </div>

  
        </div>
      </div>

      <div class="row">
        <div class="col text-start form-control-lg ">
          <label for="">Most Common Forms Of Cardiomyopathy</label>

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
          </div>
        </div>
      </div>

      <div class="row py-2">
        <div class="col text-start form-control-lg">
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
            <!-- Button for adding data for either CSV File Or other inputs on left -->
            <div class="col mx-auto">
                <button class="btn-dark btn-lg px-5" type="submit">Add Data</button>

            </div>
          </div>
        </div>
      </div>
    </div>


  <div class="py-5">
    <h1 class="container bg-dark text-white">Or Enter Manually</h1>

    <div>
      <div class="container bg-light py-5 hi-10">
        <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter:">
        </div>
        </div>
          <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>
          <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>
          <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>
          <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>
          <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>  <div class="row py-2">
          <div class="col col-sm-5 mx-auto">
          <input type="text" class="form-control mx-auto" placeholder="Enter">
        </div>
        </div>
      </div>

      <button class="btn-dark btn-lg px-5" type="submit">Add Data</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
