var pieChart = "Empty";
var barChart = "Empty";
var mixedChart = "Empty";
function pie(ctx, dados, labels) {
  let data = {
    datasets: [
      {
        data: dados,
        backgroundColor: [
          "rgba(243, 206, 104, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 59, 88, 0.2)",
          "rgba(67, 246, 67, 0.2)",
          "rgba(210,105,30,0.2)",
          "rgba(0,191,255,0.2)",
          "rgba(0,250,154,0.2)",
          "rgba(255,0,255,0.2)",
          "rgba(218,165,32,0.2)",
          "rgba(128,0,0,0.2)",
        ],
        borderColor: [
          "rgba(243, 206, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 59, 88, 1)",
          "rgba(67, 246, 67, 1)",
          "rgba(210,105,30,1)",
          "rgba(0,191,255,1)",
          "rgba(0,250,154,1)",
          "rgba(255,0,255,1)",
          "rgba(218,165,32,1)",
          "rgba(128,0,0,1)",
        ],
        borderWidth: 1,
      },
    ],
    labels: labels,
  };
  if (pieChart != "Empty") {
    pieChart.destroy();
  }
  pieChart = new Chart(ctx, {
    type: "pie",
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "left",
        fullWidth: false,
      },
    },
  });
}
function bar(ctx, dados, labels, teste) {
  let data = {
    datasets: [
      {
        data: dados,
        label: "FI",
        backgroundColor: [
          "rgb(0,128,0,0.3)",
          "rgb(0,0,205,0.3)",
          "rgb(210,105,30,0.3)",
          "rgb(128,0,128,0.3)",
          "rgb(180,0,0,0.3)",
          "rgb(0,191,255,0.3)",
          "rgb(0,250,154,0.3)",
          "rgb(255,0,255,0.3)",
          "rgb(218,165,32,0.3)",
          "rgb(128,0,0,0.3)",
        ],
      },
    ],
    labels: labels,
  };
  if (teste) {
    if (barChart != "Empty") {
      barChart.destroy();
    }
    barChart = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        scales: {
          /*
          xAxes: [
            {
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              display: true,
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0,
              },
            },
          ],
*/
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,

                min: 0,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top",
          fullWidth: false,
        },
      },
    });
  } else {
    if (barChart != "Empty") {
      barChart.destroy();
    }
    barChart = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top",
          fullWidth: false,
        },
        scales: {
          /*
          xAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0,
              },
            },
          ],
          */
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,

                min: 0,
              },
            },
          ],
        },
      },
    });
  }
}

function mixed(ctx, dados, reta) {
  ctx.innerHTML = "";
  if (mixedChart != "Empty") {
    mixedChart.destroy();
  }
  mixedChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Bar Dataset",
          data: dados,
          borderColor: "rgb(0, 0, 224)",
          backgroundColor: "rgb(0, 0, 224)",
        },
        {
          label: "Line Dataset",
          data: [
            { x: reta[0], y: reta[1] },
            { x: reta[2], y: reta[3] },
          ],
          fill: false,
          backgroundColor: "rgb(224, 0, 0)",
          borderColor: "rgb(224, 0, 0)",
          type: "line",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Gráfico de dispersão com linha de regressão",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              // beginAtZero: true,
              // min: 0,
              // max: 1200,
            },
          },
        ],
        xAxes: [
          {
            display: true,
            ticks: {
              // beginAtZero: true,
              // min: 0,
              // max: 1200,
            },
          },
        ],
      },
    },
  });
}

export { pie, bar, mixed };
