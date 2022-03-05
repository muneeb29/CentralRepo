<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Show Graph</h1>
    </div>

    <div class="col-12 my-3">
      <div class="row">
        <div class="col-2">
          <p>Forms of Cardiomyopathy</p>
          <select v-model="FormName" class="form-select" aria-label="Default select example" >
            <option selected hidden>Select One</option>
            <option value="hydertrophicardiomyopathy">Hydertrophic Cardiomyopathy</option>
            <option value="dilatedcardiomyopathy">Dilated Cardiomyopathy</option>
            <option value="arrhythmogenicright">Arrhythmogenic Right Ventricular Cardiomyopathy</option>
          </select>
        </div>
        <div class="col-2">
          <p>Mutated Gene Type</p>
          <select v-model="mutGene" class="form-select" aria-label="Default select example" @change="handleChangeGN">
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
        <div class="col">
          <select name="exp1" id="exp1" class="form-select" style="width: auto">
            <option value="ledv">ledv</option>
            <option value="lesv">lesv</option>
            <option value="lsv">lsv</option>
            <option value="lvef">lvef</option>
            <option value="lvmass">lvmass</option>
            <option value="redv">redv</option>
            <option value="resv">resv</option>
            <option value="rsv">rsv</option>
            <option value="rvef">rvef</option>
            <option value="scar">scar</option>
            <option value="female">female</option>
            <option value="AgeatMRI">AgeatMRI</option>
            <option value="SuddenCardiacDeath">Sudden Cardiac Death</option>
            <option value="hypertension">hypertension</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Myectomydate">Myectomydate</option>
          </select>
        </div>
        <div class="col-2">
          <p>X-axis of experimental data</p>
          <select v-model="xAxis" class="form-select" aria-label="Default select example" @change="handleChangeX">
            <option selected hidden>Select One</option>
            <option v-for="(axis, index) in xAxisList" :key="index" :value="axis">{{ axis }}</option>
          </select>
        </div>
        <div class="col-2">
          <p>Y-axis of experimental data</p>
          <select v-model="yAxis" class="form-select" aria-label="Default select example" @change="handleChangeY">
            <option selected hidden>Select One</option>
            <option v-for="(axis, index) in yAxisList" :key="index" :value="axis">{{ axis }}</option>
          </select>
        </div>
        <div class="col-2">
          <p>Line 2</p>
          <select v-model="Line2" class="form-select" aria-label="Default select example" @change="handleChangeLine2">
            <option selected hidden>Select One</option>
              <option value="MYH7">MYH7</option>
              <option value="MYBC3mutation">MYBC3</option>
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
      <div v-if="xAxisValues.length != 0 && yAxisValues.length != 0 && yLine2.length == 0" class="chart__card mx-2">
        <apexchart type="line" height="450" width="1240" :options="chartOptions" :series="series"></apexchart>
      </div>
      <div v-else-if="yLine2.length !=0" class="chart__card mx-2">
        <apexchart type="line" height="450" width="1240" :options="chartOptions" :series="series"></apexchart>
      </div>
      <div v-else class="chart__card mx-2">
        <apexchart type="line" height="450" width="1240" :options="chartOptions" :series="series"></apexchart>
      </div>
      <div class="details__chart">
        <div class="card" style="width: 40rem;">
          <div class="card-header">
            Details
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item my-1"><strong>Data source :</strong> {{ actualDS != 'Select One' ? actualDS : '' }}</li>
            <li class="list-group-item my-1"><strong>Form of Cardiomyopathy :</strong> {{ FormName != 'Select One' ? FormName : '' }}</li>
            <li class="list-group-item my-1"><strong>Mutated Gene Type :</strong> {{ mutGene != 'Select One' ? mutGene : '' }}</li>
            <li class="list-group-item my-1"><strong>X-axis of experimental data :</strong> {{ xAxis != 'Select One' ? xAxis : '' }}</li>
            <li class="list-group-item my-1"><strong>Y-axis of experimental data :</strong> {{ yAxis != 'Select One' ? yAxis : '' }}</li>
            <li class="list-group-item my-1"><strong>Add on :</strong> {{ createdAt }}</li>
            <li class="list-group-item my-1"><strong>Line 2 :</strong> {{ Line2 != 'Select One' ? Line2 : ''}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/graphs/LineChart";
export default {
  components: {  },
  data(){
    return {
      dataAll:[], //will contain all our dataSource data
      dataFinal:{}, //will contain only the data of dataSource user choose
      dataSources:[],
      xAxisValues:[], //will contain the xAxis values
      yAxisValues:[], //will contain the yAxis values
      xAxisList:[], //will contain the name of experimental data to choose the x-axis
      yAxisList:[], //will contain the name of experimental data to choose the y-axis
      yLine2:[], //will contain the yAxis values of the line 2
      series: [
        {
          name: "",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "",
          data: []
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',

          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Your Title Here',
          align: 'center'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
            size: 1
        },
        xaxis: {
          categories: [0, 10, 15, 20, 25, 30, 35, 40, 45],
          title: {
            text: 'xAxis'
          }
        },
        yaxis: {
          title: {
            text: 'yAxis'
          },

        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      //this data below what should user choose to display a chart
      Line2: "Select One",
      actualDS: "Select One",
      FormName:"Select One",
      mutGene:"Select One",
      xAxis:"Select One",
      yAxis:"Select One",
      createdAt:""
    }
  },
  methods:{
    //The function load help us to get all data source of all users user, it's will executed every mount of ShowGraph.vue
    async load(){
      const querySnapshot = await getDocs(usersCollection);
      querySnapshot.forEach((doc) => {
        if(doc.data().dataSource){
          this.dataAll.push(doc.data())
        }
      });
    },
    //The function handleChangeGN help us to get data sources based on Gene Type choose by the user
    handleChangeGN(){
      this.dataSources = [];
      let elementD = this.dataAll.filter(item => {
        return item.mutGene==this.mutGene && item.mostCommon==this.FormName 
      })
      elementD.forEach((element) => {
        this.dataSources.push(element.dataSource)
      })
    },
    //The function handleChangeDS help us to get data value of data source choose by the user
    handleChangeDS(){
      const element = this.dataAll.find((item) => item.dataSource === this.actualDS);
      this.dataFinal = element;
      this.xAxisList = Object.keys(element.csvContent[0]);
      this.yAxisList = this.xAxisList;
      this.createdAt = element.createdAt
    },
    //The function handleChangeX help us to change the values of xAxis based on which column (experimental data) is choose 
    handleChangeX(){
      this.xAxisValues = []
      this.dataFinal.csvContent.forEach((element) => {
        let Id = "" + this.mutGene
        if(element[Id] === '1'){
          this.xAxisValues.push(element[this.xAxis]) 
        }else if(!element[Id]){
          this.xAxisValues.push(element[this.xAxis]) 
        }
      })
      this.series[0].data = this.yAxisValues
      this.series[0].name = this.mutGene
      this.chartOptions.xaxis.categories = this.xAxisValues
      this.chartOptions.xaxis.title.text = this.xAxis
    },
    //The function handleChangeY help us to change the values of yAxis based on which column (experimental data) is choose 
    handleChangeY(){
      this.yAxisValues = []
      this.dataFinal.csvContent.forEach((element) => {
        let Id = "" + this.mutGene
        if(element[Id] === "1"){
          this.yAxisValues.push(element[this.yAxis]) 
        }else if(!element[Id]){
          this.yAxisValues.push(element[this.yAxis]) 
        }
      })
      this.series[0].data = this.yAxisValues
      this.series[0].name = this.mutGene
      this.chartOptions.xaxis.categories = this.xAxisValues
      this.chartOptions.yaxis.title.text = this.yAxis
    },
    //The function handleChangeLine2 add the line 2 
    handleChangeLine2(){
      this.yLine2 = []
      this.chartOptions.xaxis.categories = this.xAxisValues
      if(this.Line2 != ""){
        this.dataFinal.csvContent.forEach((element) => {
          let Id = "" + this.Line2
          if(element[Id] === "1"){
            this.chartOptions.xaxis.categories.push(element[this.xAxis])
            this.yLine2.push(element[this.yAxis])
          }
        })
        this.series[1].data = this.yLine2
        this.series[1].name = this.Line2
      }
    }
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
</style>
