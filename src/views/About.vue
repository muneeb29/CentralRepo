<template>
  <div class="about">
    <h3>About Cardiomyopathy</h3>

    <p>
      Cardiomyopathy is a disease of the heart muscle that makes it harder for
      your heart to pump blood to the rest of your body. The most common forms
      of cardiomyopathy are Hypertrophic Cardiomyopathy, Dilated Cardiomyopathy
      and Arrhythmogenic right ventricular Cardiomyopathy. These
      cardiomyopathies occur due to mutations in genes that encode certain
      proteins in the cells of the heart. Many research groups, clinicians,
      medical centres and labs perform experiments on heart cells from patients
      and animals to better understand the mechanisms that cause these
      cardiomyopathies. The aim is disease prevention and the development of
      therapeutic responses. The data from these experiments are scattered in
      published papers in different journals and sitting on the hard drives of
      disparate and disconnected research groups and medical centres. In order
      to foster better collaboration and facilitate cardiovascular research, it
      would be beneficial to have a central repository for the data that can be
      queried by interested parties anywhere in the world.
    </p>

    <images>
      <template #image>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Blausen_0166_Cardiomyopathy_Hypertrophic.png"
        alt="visual diagram of cardiomyopthy"/>
      </template>
    </images>

    <p>
      The purpose of the web application is to provide a central repository for
      experimental data on force/tension development and sarcomere length
      shortening in the cardiomyopathic cells. This application also provides
      details relating to the type of cardiomyopathy and present data visually
      to users when queried. The system also provides a comfortable user
      experience.
    </p>
  </div>
</template>

<script>
import Images from "@/components/images";
export default {
  name: "About",
  components: { Images },
};
</script>

<style></style>
