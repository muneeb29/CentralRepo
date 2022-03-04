import { ref } from "vue";
function ncbiCheck() {
  const error1 = ref("");
  const ncbiList = ref("");
  let ids = ref("");

  async function checkNCBI(type, gene) {
    if (gene.value == "MYH7") {
      ids = 4625;
      searchNCBI(ids);
    }
    if (gene.value == "MYBPC3") {
      ids = 4607;
      searchNCBI(ids);
    }
    if (gene.value == "TNNT2") {
      ids = 7139;
      searchNCBI(ids);
    }
    if (gene.value == "ACTC") {
      ids = 70;
      searchNCBI(ids);
    }
    if (gene.value == "TPM1") {
      ids = 7168;
      searchNCBI(ids);
    }
    if (gene.value == "TNNC1") {
      ids = 7134;
      searchNCBI(ids);
    }
    if (gene.value == "TNNI3") {
      ids = 7137;
      searchNCBI(ids);
    }
    if (gene.value == "MYL2") {
      ids = 4633;
      searchNCBI(ids);
    }
    if (gene.value == "TTN") {
      ids = 7273;
      searchNCBI(ids);
    }
  }

  async function searchNCBI(ids) {
    try {
      const respa = await fetch(
        `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&format=json&id=` +
          ids
      );

      if (!respa.ok) {
        throw error1("No Results Found!");
      }
      ncbiList.value = await respa.json();
    } catch (e) {
      error1.value = e;
    }
  }
  return { ncbiList, searchNCBI,checkNCBI, error1 };
}

export default ncbiCheck;
