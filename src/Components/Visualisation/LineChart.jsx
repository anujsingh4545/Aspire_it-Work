import React from "react";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js";
import {Line} from "react-chartjs-2";
import {lab} from "d3";

const LineChart = ({Ainumber}) => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const label = [];

  for (let index = 0; index < Ainumber.length; index++) {
    label.push(index + 1);
  }

  console.log(label);

  const data = {
    labels: label,
    datasets: [
      {
        label: "Ai Score of Students",
        data: Ainumber.map((data) => {
          return data.ai_generated_score;
        }),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {};

  //
  return (
    <main className="   grid grid-cols-2 items-center justify-center pt-10 ">
      <section className="col-span-2 h-[30rem] w-[100%]  flex items-center justify-center">
        <Line data={data} options={options} />
      </section>
    </main>
  );
};

export default LineChart;
