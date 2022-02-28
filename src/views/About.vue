<template>
  <body>
    <div class="row">
      <div class="col border border-3 py-3">
        <h1>About This Site</h1>
      </div>

      <div class="txt-alignment">
        <div class="col container text-black-70 rounded py-4">
          <p>
            The purpose of the web application is to provide a central
            repository for experimental data on force/tension development and
            sarcomere length shortening in the cardiomyopathic cells. This
            application also provides details relating to the type of
            cardiomyopathy and present data visually to users when queried. The
            system should provides a comfortable user experience.
          </p>

          <div class="col-lg-3 rounded mx-auto d-block">
            <Images> </Images>
          </div>

          <div class="col py3">
            <h4>The primary responsibilities of this web application are:</h4>
          </div>

          <div class="col">
            <ul>
              <li>
                To enable experimental data to be submitted to the database.
              </li>
              <li>
                To respond to queries relating to the stored data on
                cardiomyopathies.
              </li>
              <li>
                To allow the querying of other existing, related databases for
                additional useful information relating to cardiomyopathies.
              </li>
              <li>
                To graph/plot appropriate experimental data for easier
                consumption and interpretation
              </li>
            </ul>
          </div>

          <div class="col py-4">
            <p>
              The system will mainly be used by clinicians, cardiologists and
              medical/healthcare experimental investigators. It will also be
              used by academic researchers, medical students and possibly
              cardiomyopathy patients with an interest in understanding the
              data.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Images from "@/components/Images";
export default {
  name: "About",
  components: { Images },
};
</script>

<style>
.about {
  width: 100%;
  height: 20rem;
}

.txt-alignment {
  text-align: justify;
}
</style>
