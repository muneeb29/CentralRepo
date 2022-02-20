<template>
  <div>
    <h1 class="container bg-dark text-white">Add Data</h1>

    <div>
      <form>
        <div class="form-control-lg">
          <select v-model="selected">
            <option disabled value="">Select One</option>
            <option>MYH</option>
            <option>MYBPC3</option>
            <option>TNNT</option>
            <option>TPM1</option>
          </select>
          <br />
          <br />

          <h3>Data Type:</h3>

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
