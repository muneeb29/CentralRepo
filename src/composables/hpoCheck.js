import { ref } from "vue";

function hpoCheck() {
  const error = ref("");
  const hpoList = ref("");
  let id = ref("");

  async function checkHPO(type, gene) {
    if (type.value == "Hydertorophic" && gene.value == "MYH7") {
      id = 192600;
      searchCardio(id);
    }
    if (type.value == "Hydertorophic" && gene.value == "MYBPC3") {
      id = 115197;
      searchCardio(id);
    }

    if (type.value == "Hydertorophic" && gene.value == "TNNT2") {
      id = 115195;
      searchCardio(id);
    }

    if (type.value == "Hydertorophic" && gene.value == "ACTC") {
      id = 612098;
      searchCardio(id);
    }
    if (type.value == "Hydertorophic" && gene.value == "TPM1") {
      id = 115196;
      searchCardio(id);
    }

    if (type.value == "Hydertorophic" && gene.value == "TNNC1") {
      id = 613243;
      searchCardio(id);
    }
    if (type.value == "Hydertorophic" && gene.value == "TNNI3") {
      id = 613690;
      searchCardio(id);
    }

    if (type.value == "Hydertorophic" && gene.value == "MYL2") {
      id = 608758;
      searchCardio(id);
    }

    if (type.value == "Hydertorophic" && gene.value == "TTN") {
      id = 0;
      searchCardio(id);
    }

    if (type.value == "Dilated" && gene.value == "MYH7") {
      id = 613426;
      searchCardio(id);
    }
    if (
      (type.value == "Dilated" && gene.value == "MYBPC3") ||
      (type.value == "Dilated" && gene.value == "MYL2") ||
      (type.value == "Dilated" && gene.value == "TTN")
    ) {
      id = 0;
      searchCardio(id);
    }
    if (type.value == "Dilated" && gene.value == "TNNT2") {
      id = 601494;
      searchCardio(id);
    }
    if (type.value == "Dilated" && gene.value == "ACTC") {
      id = 613424;
      searchCardio(id);
    }
    if (type.value == "Dilated" && gene.value == "TPM1") {
      id = 611878;
      searchCardio(id);
    }
    if (type.value == "Dilated" && gene.value == "TNNC1") {
      id = 611879;
      searchCardio(id);
    }
    if (type.value == "Dilated" && gene.value == "TNNI3") {
      id = 611880;
      searchCardio(id);
    }
  }
  async function searchCardio(id) {
    try {
      const resp = await fetch(
        `https://hpo.jax.org/api/hpo/disease/OMIM:` + id
      );

      hpoList.value = await resp.json();

      if (id == 0) {
        alert("No Results Found For This Combination!");
      }
    } catch (e) {
      throw error("No Results Found!");
    }
  }
  return { hpoList, error, checkHPO };
}

export default hpoCheck;
