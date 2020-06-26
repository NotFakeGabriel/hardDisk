function pie(ctx, dados, labels) {
  let data = {
    datasets: [
      {
        data: dados,
        backgroundColor: [
          "rgb(0,128,0)",
          "rgb(0,0,205)",
          "rgb(210,105,30)",
          "rgb(128,0,128)",
          "rgb(180,0,0)",
          "rgb(0,191,255)",
          "rgb(0,250,154)",
          "rgb(255,0,255)",
          "rgb(218,165,32)",
          "rgb(128,0,0)",
        ],
      },
    ],
    labels: labels,
  };
  const pieChart = new Chart(ctx, {
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
        backgroundColor: [
          "rgb(0,128,0)",
          "rgb(0,0,205)",
          "rgb(210,105,30)",
          "rgb(128,0,128)",
          "rgb(180,0,0)",
          "rgb(0,191,255)",
          "rgb(0,250,154)",
          "rgb(255,0,255)",
          "rgb(218,165,32)",
          "rgb(128,0,0)",
        ],
      },
    ],
    labels: labels,
  };

  if (teste) {
    const barChart = new Chart(ctx, {
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
          position: "left",
          fullWidth: false,
        },
      },
    });
  } else {
    const barChart = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "left",
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

  var mixedChart = new Chart(ctx, {
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
