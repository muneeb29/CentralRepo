<template>
  <div>
<nav-bar ></nav-bar>


    <h2>Cardiomyopathy</h2>

  <h3>  Welcome To this Cardiomyopathy Research Application</h3>

    
  <p> 
  Cardiomyopathy is a disease of the heart muscle that makes it harder for your heart to pump blood
  to the rest of your body. The most common forms of cardiomyopathy are Hypertrophic Cardiomyopathy, Dilated Cardiomyopathy 
  and Arrhythmogenic right ventricular Cardiomyopathy. These cardiomyopathies occur due to mutations in genes that encode 
  certain proteins in the cells of the heart.
  </p>


  <images> 
      <template #image>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Blausen_0165_Cardiomyopathy_Dilated.png" />
    </template>
  </images>


  <p>
  Many research groups, clinicians, medical centres and labs perform experiments on heart cells from patients and animals 
  to better understand the mechanisms that cause these cardiomyopathies. The aim is disease prevention and the development 
  of therapeutic responses. The data from these experiments are scattered in published papers in different journals and 
  sitting on the hard drives of disparate and disconnected research groups and medical centres.  
  </p>

  <p>
  In order to foster better collaboration and facilitate cardiovascular research, it would be beneficial to have a central 
  repository for the data that can be queried by interested parties anywhere in the world. Therefore, this site has been created so 
  that interested parties are make queries and further explore their research.
  </p>

  </div>
</template>

<script>
import images from "@/components/images";
import NavBar from "@/components/NavBar";
export default {
    name: 'Home',
    components:{images, NavBar}

}
</script>

<style>

</style>