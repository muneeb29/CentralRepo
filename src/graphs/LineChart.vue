<template>
  <div>
    <apexchart
      type="line"
      height="350"
      width="700"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const chartOptions = ref({
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Data Title",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        title: {
          text: "x-axis title",
        },
      },
      yaxis: {
        title: {
          text: "y-axis title",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    });

    const series = ref([
      {
        name: "name",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      {
        name: "data",
        data: [20, 61, 75, 71, 69, 72, 89, 111, 168],
      },
    ]);

    return { chartOptions, series };
  },
};
</script>
