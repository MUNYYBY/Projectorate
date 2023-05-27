export const options = {
  chart: {
    type: "donut",
    foreColor: "#d4d7dc",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            offsetY: 1,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            label: "Total",
            fontSize: "14px",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
          },
        },
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
  },
  datasets: [
    {
      borderColor: ["#ffff"],
    },
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 250,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
