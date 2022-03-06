<template>
  <div class="row py-4">
    <div class="col-12 border border-3 py-3">
      <h1>Show Graph</h1>
    </div>

    <div class="col-12 my-3">
      <div class="row">
        <div class="col-3">
          <p>Forms of Cardiomyopathy</p>
          <select
            v-model="FormName"
            class="form-select"
            aria-label="Default select example"
            @change="formatNameCardio"
          >
            <option selected hidden>Select One</option>
            <option value="hydertrophicardiomyopathy">
              Hydertrophic Cardiomyopathy
            </option>
            <option value="dilatedcardiomyopathy">
              Dilated Cardiomyopathy
            </option>
            <option value="arrhythmogenicright">
              Arrhythmogenic Right Ventricular Cardiomyopathy
            </option>
          </select>
        </div>
        <div class="col-2">
          <p>Mutated Gene Type</p>
          <select
            v-model="mutGene"
            class="form-select"
            aria-label="Default select example"
            @change="handleChangeGN"
          >
            <option selected hidden>Select One</option>
            <option value="MYH7">MYH7</option>
            <option value="MYBC3">MYBC3</option>
            <option value="TNNT2">TNNT2</option>
            <option value="ACTC">ACTC</option>
            <option value="TPM1">TPM1</option>
            <option value="TNNC1">TNNC1</option>
            <option value="TNNI3">TNNI3</option>
            <option value="MYL2">MYL2</option>
            <option value="TTN">TTN</option>
          </select>
        </div>
        <div class="col-3">
          <p>Data Source</p>
          <select
            v-model="actualDS"
            class="form-select"
            aria-label="Default select example"
            @change="handleChangeDS"
          >
            <option selected hidden>Select One</option>
            <option v-for="(ds, index) in dataSources" :key="index" :value="ds">
              {{ ds }}
            </option>
          </select>
        </div>
        <div class="col-2">
          <p>X-axis/Y-axis Experimental data</p>
          <select
            v-model="xAxis"
            class="form-select"
            aria-label="Default select example"
            @change="handleChangeLine1"
          >
            <option selected hidden>Select One</option>
            <option value="dv">(ledv/redv)</option>
            <option value="esv">(lesv/resv)</option>
            <option value="ef">(lvef/rvef)</option>
            <option value="mass">(lvmass/rvmass)</option>
            <option value="rsv">(lsv/rsv)</option>
          </select>
        </div>
        <div class="col-2">
          <p>Different Mutated Gene Type</p>
          <select
            v-model="Line2"
            class="form-select"
            aria-label="Default select example"
            @change="handleChangeLine2"
          >
            <option selected hidden>Select One</option>
            <option value="MYH7">MYH7</option>
            <option value="MYBPC3mutation">MYBC3</option>
            <option value="TNNT2mutation">TNNT2</option>
            <option value="ACTCmutation">ACTC</option>
            <option value="TPM1">TPM1</option>
            <option value="TNNCI">TNNC1</option>
            <option value="TNNI3">TNNI3</option>
            <option value="MYL2">MYL2</option>
            <option value="TTN">TTN</option>
          </select>
        </div>
      </div>
    </div>

    <div class="center py-4 my-2">
      <div
        v-if="
          xAxisValues.length != 0 &&
          yAxisValues.length != 0 &&
          yLine2.length == 0
        "
        class="chart__card mx-2"
      >
        <apexchart
          type="line"
          height="450"
          width="1240"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div v-else-if="yLine2.length != 0" class="chart__card mx-2">
        <apexchart
          type="line"
          height="450"
          width="1240"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div v-else class="chart__card mx-2">
        <apexchart
          type="line"
          height="450"
          width="1240"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>

      <div class="details__chart">
        <div class="card" style="width: 40rem">
          <div class="card-header">Details</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item my-2">
              <strong>Data source :</strong>
              {{ actualDS != "Select One" ? actualDS : "" }}
            </li>
            <li class="list-group-item my-1">
              <strong>Form of Cardiomyopathy :</strong>
              {{ CardioFormName }}
            </li>
            <li class="list-group-item my-2">
              <strong>Mutated Gene Type :</strong>
              {{ mutGene != "Select One" ? mutGene : "" }}
            </li>
            <li class="list-group-item my-1">
              <strong>Different Mutated Gene Type :</strong>
              {{ DiffMutatedGeneNAme }}
            </li>
            <li class="list-group-item my-2">
              <strong>X-axis of experimental data :</strong>
              {{ xAxisNAme != "Select One" ? xAxisNAme : "" }}
            </li>
            <li class="list-group-item my-1">
              <strong>Y-axis of experimental data :</strong>
              {{ yAxisNAme != "Select One" ? yAxisNAme : "" }}
            </li>
            <li class="list-group-item my-2">
              <strong>Add on :</strong> {{ createdAt }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 center py-4 my-2">
        <apexchart
          type="pie"
          width="600"
          :options="chartOptionsPie1"
          :series="seriesPie1"
        ></apexchart>
      </div>
      <div class="col-6 center py-4 my-2">
        <apexchart
          type="pie"
          width="600"
          :options="chartOptionsPie2"
          :series="seriesPie2"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, getDocs, usersCollection } from "../firebase/database";

export default {
  components: {},
  data() {
    return {
      dataAll: [], //will contain all our dataSource data
      dataFinal: {}, //will contain only the data of dataSource user choose
      dataSources: [],
      xAxisValues: [], //will contain the xAxis values
      yAxisValues: [], //will contain the yAxis values
      xAxisList: [], //will contain the name of experimental data to choose the x-axis
      yAxisList: [], //will contain the name of experimental data to choose the y-axis
      yLine2: [], //will contain the yAxis values of the line 2
      series: [
        {
          name: "",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name: "",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Experimental Data",
          align: "center",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [0, 10, 15, 20, 25, 30, 35, 40, 45],
          title: {
            text: "xAxis",
          },
        },
        yaxis: {
          title: {
            text: "yAxis",
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
      seriesPie1: [44, 55, 13, 43, 22],
      chartOptionsPie1: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "Scare",
          "Female",
          "ApicalHCM",
          "SuddenCardiacDeath",
          "hypertension",
          "Diabetes",
        ],
        title: {
          text: "Pie Chart Mutated Gene Type",
          align: "left",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      seriesPie2: [44, 55, 13, 43, 22],
      chartOptionsPie2: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "Scare",
          "Female",
          "ApicalHCM",
          "SuddenCardiacDeath",
          "hypertension",
          "Diabetes",
        ],
        title: {
          text: "Pie Chart Different Mutated Gene Type",
          align: "left",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      //this data below what should user choose to display a chart
      Line2: "Select One",
      actualDS: "Select One",
      FormName: "Select One",
      mutGene: "Select One",
      xAxis: "Select One",
      yAxis: "Select One",
      xAxisNAme: "Select One",
      yAxisNAme: "Select One",
      CardioFormName: "",
      DiffMutatedGeneNAme: "",
      createdAt: "",
    };
  },
  methods: {
    //The function load help us to get all data source of all users user, it's will executed every mount of ShowGraph.vue
    async load() {
      const querySnapshot = await getDocs(usersCollection);
      querySnapshot.forEach((doc) => {
        if (doc.data().dataSource) {
          this.dataAll.push(doc.data());
        }
      });
    },
    //The function handleChangeGN help us to get data sources based on Gene Type choose by the user
    handleChangeGN() {
      this.dataSources = [];
      let elementD = this.dataAll.filter((item) => {
        return item.mutGene == this.mutGene && item.mostCommon == this.FormName;
      });
      elementD.forEach((element) => {
        this.dataSources.push(element.dataSource);
      });
    },
    //The function handleChangeDS help us to get data value of data source choose by the user
    handleChangeDS() {
      const element = this.dataAll.find(
        (item) => item.dataSource === this.actualDS
      );
      this.dataFinal = element;
      this.xAxisList = Object.keys(element.csvContent[0]);
      this.yAxisList = this.xAxisList;
      this.createdAt = element.createdAt;
    },
    formatNameCardio() {
      if (this.FormName === "hydertrophicardiomyopathy") {
        this.CardioFormName = "Hydertrophic Cardiomyopathy";
      } else if (this.FormName === "dilatedcardiomyopathy") {
        this.CardioFormName = "Dilated Cardiomyopathy";
      } else if (this.FormName === "arrhythmogenicright") {
        this.CardioFormName = "Arrhythmogenic Right Ventricular Cardiomyopathy";
      }
    },
    //The function handleChangeLine1 help us to change the values of xAxis based on which column (experimental data) is choose
    handleChangeLine1() {
      this.xAxisValues = [];
      this.yAxisValues = [];
      let scare = 0;
      let female = 0;
      let ApicalHCM = 0;
      let SuddenCardiacDeath = 0;
      let hypertension = 0;
      let Diabetes = 0;
      let counterLines = 0;
      this.dataFinal.csvContent.forEach((element) => {
        let Id = "" + this.mutGene;
        if (element[Id] === "1") {
          counterLines++;
          if (element["scare"] === "1") {
            scare++;
          } else if (element["female"] === "1") {
            female++;
          } else if (element["ApicalHCM"] === "1") {
            ApicalHCM++;
          } else if (element["SuddenCardiacDeath"] === "1") {
            SuddenCardiacDeath++;
          } else if (element["hypertension"] === "1") {
            hypertension++;
          } else if (element["Diabetes"] === "1") {
            Diabetes++;
          }
          if (this.xAxis == "dv") {
            this.xAxisValues.push(element["ledv"]);
            this.yAxisValues.push(element["redv"]);
            this.changeName("ledv", "redv");
          } else if (this.xAxis == "esv") {
            this.xAxisValues.push(element["lesv"]);
            this.yAxisValues.push(element["resv"]);
            this.changeName("lesv", "resv");
          } else if (this.xAxis == "ef") {
            this.xAxisValues.push(element["lvef"]);
            this.yAxisValues.push(element["rvef"]);
            this.changeName("lvef", "rvef");
          } else if (this.xAxis == "mass") {
            this.xAxisValues.push(element["lvmass"]);
            this.yAxisValues.push(element["rvmass"]);
            this.changeName("lvmass", "rvmass");
          } else if (this.xAxis == "rsv") {
            this.xAxisValues.push(element["lsv"]);
            this.yAxisValues.push(element["rsv"]);
            this.changeName("lsv", "rsv");
          }
        } else if (!element[Id]) {
          if (this.xAxis == "dv") {
            this.xAxisValues.push(element["ledv"]);
            this.yAxisValues.push(element["redv"]);
            this.changeName("ledv", "redv");
          } else if (this.xAxis == "esv") {
            this.xAxisValues.push(element["lesv"]);
            this.yAxisValues.push(element["resv"]);
            this.changeName("lesv", "resv");
          } else if (this.xAxis == "ef") {
            this.xAxisValues.push(element["lvef"]);
            this.yAxisValues.push(element["rvef"]);
            this.changeName("lvef", "rvef");
          } else if (this.xAxis == "mass") {
            this.xAxisValues.push(element["lvmass"]);
            this.yAxisValues.push(element["rvmass"]);
            this.changeName("lvmass", "rvmass");
          } else if (this.xAxis == "rsv") {
            this.xAxisValues.push(element["lsv"]);
            this.yAxisValues.push(element["rsv"]);
            this.changeName("lsv", "rsv");
          }
        }
      });

      this.seriesPie1 = [
        (scare * 100) / counterLines,
        (female * 100) / counterLines,
        (ApicalHCM * 100) / counterLines,
        (SuddenCardiacDeath * 100) / counterLines,
        (hypertension * 100) / counterLines,
        (Diabetes * 100) / counterLines,
      ];
      this.series[0].data = this.yAxisValues;
      this.series[0].name = this.mutGene;
      this.chartOptions.xaxis.categories = this.xAxisValues;
    },
    changeName(val1, val2) {
      this.chartOptions.xaxis.title.text = val1;
      this.chartOptions.yaxis.title.text = val2;
      this.xAxisNAme = val1;
      this.yAxisNAme = val2;
    },
    //The function handleChangeY help us to change the values of yAxis based on which column (experimental data) is choose
    handleChangeY() {},
    //The function handleChangeLine2 add the line 2
    handleChangeLine2() {
      this.yLine2 = [];
      this.chartOptions.xaxis.categories = this.xAxisValues;
      if (this.Line2 != "") {
        this.DiffMutatedGeneNAme = this.Line2;
        if (this.Line2 == "MYBPC3mutation") {
          this.DiffMutatedGeneNAme = "MYBPC3";
        } else if (this.Line2 == "TNNT2mutation") {
          this.DiffMutatedGeneNAme = "TNNT2";
        } else if (this.Line2 == "ACTCmutation") {
          this.DiffMutatedGeneNAme = "ACTC";
        }
        let scare = 0;
        let female = 0;
        let ApicalHCM = 0;
        let SuddenCardiacDeath = 0;
        let hypertension = 0;
        let Diabetes = 0;
        let counterLines = 0;
        this.dataFinal.csvContent.forEach((element) => {
          let Id = "" + this.Line2;
          if (element[Id] === "1") {
            counterLines++;
            if (element["scare"] === "1") {
              scare++;
            } else if (element["female"] === "1") {
              female++;
            } else if (element["ApicalHCM"] === "1") {
              ApicalHCM++;
            } else if (element["SuddenCardiacDeath"] === "1") {
              SuddenCardiacDeath++;
            } else if (element["hypertension"] === "1") {
              hypertension++;
            } else if (element["Diabetes"] === "1") {
              Diabetes++;
            }
            if (this.xAxis == "dv") {
              this.chartOptions.xaxis.categories.push(element["ledv"]);
              this.yLine2.push(element["redv"]);
            } else if (this.xAxis == "esv") {
              this.chartOptions.xaxis.categories.push(element["lesv"]);
              this.yLine2.push(element["resv"]);
            } else if (this.xAxis == "ef") {
              this.chartOptions.xaxis.categories.push(element["lvef"]);
              this.yLine2.push(element["rvef"]);
            } else if (this.xAxis == "mass") {
              this.chartOptions.xaxis.categories.push(element["lvmass"]);
              this.yLine2.push(element["rvmass"]);
            } else if (this.xAxis == "rsv") {
              this.chartOptions.xaxis.categories.push(element["lsv"]);
              this.yLine2.push(element["rsv"]);
            }
          }
        });
        this.seriesPie2 = [
          (scare * 100) / counterLines,
          (female * 100) / counterLines,
          (ApicalHCM * 100) / counterLines,
          (SuddenCardiacDeath * 100) / counterLines,
          (hypertension * 100) / counterLines,
          (Diabetes * 100) / counterLines,
        ];
        this.series[1].data = this.yLine2;
        this.series[1].name = this.Line2;
      }
    },
  },
  mounted() {
    const currentUserEmail = auth.currentUser.email;
    console.log("currentUser", currentUserEmail);
    this.load();
  },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
p {
  font-weight: 500;
}
.chart__card {
}

.details__chart {
  text-align: left;
}
</style>
