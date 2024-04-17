import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

const RangeDonutChart = ({Rdata}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["0-50", "51-60", "61-70", "71-80", "81-90", "91-100"],
    datasets: [
      {
        label: [],
        data: Rdata,
        backgroundColor: ["rgb(66, 245, 99)", "rgb(126, 66, 245)", "rgb(245, 224, 66)", "rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(245, 102, 66)"],
        hoverOffset: 4,
      },
    ],
  };

  //
  return (
    <main className="   grid grid-cols-2 items-center justify-center my-20 ">
      <section className="col-span-1 h-[30rem] w-full flex items-center justify-center">
        <Doughnut data={data} style={({backgroundColor: "#000"}, {color: "#fff"})} />
      </section>
      <section className=" col-span-1 flex items-center justify-center text-zinc-100 font-bold text-[2rem] ">
        <h2>Ai Score on basis of Ranges</h2>
      </section>
    </main>
  );
};

export default RangeDonutChart;
