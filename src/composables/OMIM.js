import axios from "axios";

let ApiKey= "nfNEOscLNWWXdSmUoMLPPA";

const apiClient = axios.create({
  baseURL: "https://api.omim.org/api",
  withCredentials: false,
});

export default {
  async getPhenotypes(geneType, cardiomyopathyType) {
    if (
      geneType == "MYBPC3" &&
      cardiomyopathyType == "Hypertrophic Cardiomyopathy"
    ) {
      let phenotypeMIMNumber = "115197";
      let response = await apiClient.get(
        "/entry?include=geneMap&format=json&mimNumber=" +
          phenotypeMIMNumber +
          "&ApiKey=" +
          ApiKey
      );
      return response;
    }
  },
};
