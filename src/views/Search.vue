<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Search</h1>
      <h5>Search Experimental Data By Type And Mutation Type</h5>
    </div>
  </div>
<div>
      <Suspense>
        <template #default>
          <SearchFunction/>
        </template>

        <template #fallback>
          <div>Searching...</div>
        </template>
      </Suspense>
    </div>


  <div class="container py-5 text-white">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- Empty Footer To Create Space -->
  </div>
</template>


<script>
import SearchFunction from "@/components/SearchFunction.vue";
export default {
name: "Search",
components: {SearchFunction},
setup(){

}
}
</script>

<style>

</style>