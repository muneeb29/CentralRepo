<template>
  <div class="container">
    <div class="row">
      <div class="col text-start">
        <h4>Cardiomyopathy Information</h4>
      </div>

      <div class="col">
        <h4>Experimental Data</h4>
      </div>

      <div class="row">
        <div class="col form-control-lg">
          <div class="text-start">
            <label for="">Enter The Data Source</label>
            <div class="row">
              <div class="col">
                <input type="text" name="data-src" id="data-srcID" />
              </div>
            </div>
          </div>
        </div>
        <div class="col mx-auto form-control-lg">
          <select name="exp-1" id="exp-1ID">
            <option disabled  selected value="">Select One</option>
            <option value="ledv">
              Left Ventricular End Diastolic Volume (ledv)
            </option>
            <option value="redv">
              Right ventricular End Diastolic Volume (redv)
            </option>
            <option value="lesv">
              Left Ventricular End Systolic Volume (lesv)
            </option>
            <option value="resv">
              Right Ventricular End Systolic Volume (resv)
            </option>
            <option value="lvef">
              Left Ventricular Ejection Fraction (lvef)
            </option>
            <option value="rvef">
              Right Ventricular Ejection Fraction (rvef)
            </option>
            <option value="lvmass">Left Ventricular Mass (lvmass)</option>
            <option value="rvmass">Right Ventricular Mass (rvmass)</option>
            <option value="lsv">Left Systolic Volume (lsv)</option>
            <option value="rsv">Right Systolic Volume (rsv)</option>
            <option value="scar">Fibrosis/scarring (scar)</option>
            <option value="gender">Fender</option>
            <option value="age">Age at MRI</option>
            <option value="HCM">Apical HCM</option>
            <option value="death">Sudden Cardiac Death</option>
            <option value="hypertension">Hypertension</option>
            <option value="diabetes">Diabetes</option>
            <option value="myectomy">Myectomy</option>
            <option value="other">Other</option>
          </select>

          <div class="row py-2">
            <div class="col-">
              <select name="exp-2" id="exp-2ID">
                <option disabled selected value="">Select One</option>
                <option value="ledv">
                  Left Ventricular End diastolic Volume (ledv)
                </option>
                <option value="redv">
                  Right Ventricular End diastolic Volume (redv)
                </option>
                <option value="lesv">
                  Left Ventricular End systolic Volume (lesv)
                </option>
                <option value="resv">
                  Right Ventricular End Systolic Volume (resv)
                </option>
                <option value="lvef">
                  Left Ventricular Ejection Fraction (lvef)
                </option>
                <option value="rvef">
                  Right Ventricular Ejection Fraction (rvef)
                </option>
                <option value="lvmass">Left Vntricular mass (lvmass)</option>
                <option value="rvmass">Right Ventricular mass (rvmass)</option>
                <option value="lsv">Left Systolic volume (lsv)</option>
                <option value="rsv">Right Systolic volume (rsv)</option>
                <option value="scar">Fibrosis/scarring (scar)</option>
                <option value="gender">Gender</option>
                <option value="age">Age at MRI</option>
                <option value="HCM">Apical HCM</option>
                <option value="death">Sudden Cardiac Death</option>
                <option value="hypertension">Hypertension</option>
                <option value="diabetes">Diabetes</option>
                <option value="myectomy">Myectomy</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col text-start form-control-lg">
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
          </div>
        </div>
      </div>

    <div class="row">
      <div class="col mx-auto">
        <button type="submit"  class="btn-dark btn-lg px-5">Submit Graph</button>
      </div>  
    </div>

    </div>
  </div>

  <div class="py-5">
    <h1 class="container bg-dark text-white">Upload CSV File</h1>

    <div>
      <div class="container bg-light py-5 hi-10">
        <h3>Supported files: .csv - The data you submit must have two columns with no header names and should have x and y values</h3>
        <input type="file" class="form-control" id="customFile" />
        <br />
      </div>

      <button class="btn-dark btn-lg px-5" type="submit">Add Data</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
