<template>
<div>
  <div class="container bg-dark text-white">
    <h3>Search Data</h3>
  </div>
  
    <div class="form-white mb-4">
      <form>
        <input
          type="text"
          id="search"
          class="form-control-lg"
          v-model="search"
        />
        <button class="btn-dark btn-lg px-5" type="submit">Search</button>
      </form>
    </div>

    <div class="form-control-lg">
      <select v-model="selected">
        <option disabled value="">Select One</option>
        <option>MYH</option>
        <option>MYBPC3</option>
        <option>TNNT</option>
        <option>TPM1</option>
      </select>
      <br> <br>
        <button class="btn-dark btn-lg px-5" type="submit">Search</button>
    </div>

<h2>Search Results:</h2>



  </div>
  
</template>



<script>
export default {};
</script>

<style></style>
