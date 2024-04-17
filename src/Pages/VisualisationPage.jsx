import React, {useEffect, useState} from "react";

import Api from "../Api/api.json";
import RangeDonutChart from "../Components/Visualisation/RangeDonutChart";
import LineChart from "../Components/Visualisation/LineChart";

const VisualisationPage = () => {
  const [Data, setData] = useState(Api);
  const [RangeData, setRangeData] = useState([]);

  useEffect(() => {
    let range = [0, 0, 0, 0, 0, 0];

    Data.forEach((data) => {
      if (data.ai_generated_score > 0 && data.ai_generated_score <= 50) range[0]++;
      else if (data.ai_generated_score > 50 && data.ai_generated_score <= 60) range[1]++;
      else if (data.ai_generated_score > 60 && data.ai_generated_score <= 70) range[2]++;
      else if (data.ai_generated_score > 70 && data.ai_generated_score <= 80) range[3]++;
      else if (data.ai_generated_score > 80 && data.ai_generated_score <= 90) range[4]++;
      else if (data.ai_generated_score > 90 && data.ai_generated_score <= 100) range[5]++;
    });

    setRangeData(range);
  }, []);

  return (
    <main className=" w-full px-10 mt-10 ">
      <LineChart Ainumber={Data} />
      <RangeDonutChart Rdata={RangeData} />
    </main>
  );
};

export default VisualisationPage;
