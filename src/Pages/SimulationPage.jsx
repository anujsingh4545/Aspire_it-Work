import React, {useEffect, useState} from "react";
import DataView from "../Components/Simulation/DataView";
import Api from "../Api/api.json";
import {useFetcher, useSearchParams} from "react-router-dom";
import toast from "react-hot-toast";

const SimulationPage = () => {
  const [Data, setData] = useState(Api);
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [marks, setMarks] = useState({min: 0, max: 100});

  useEffect(() => {
    const pageno = searchParams.get("page");
    pageno ? setPage(parseInt(pageno, 0)) : setPage(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [searchParams]);

  const pageChange = (i) => {
    setPage(i);
    setSearchParams({page: i});
  };

  const ApplyFilter = (e) => {
    e.preventDefault();

    let minm = e.target.minimum.value;
    let maxm = e.target.maximum.value;

    if (parseInt(minm) > parseInt(maxm)) {
      toast.error("Minimum marks can't be greater than Maximum marks!");
    } else {
      setMarks({min: minm, max: maxm});

      const UpdateData = Api.filter((data) => {
        return data.ai_generated_score >= minm && data.ai_generated_score <= maxm;
      });

      setData(UpdateData);
      toast.success("Filter Apllied !🤌🏼");
    }
  };

  return (
    <main className=" w-full h-full  px-10 ">
      {/*  */}

      {/* Filter Section */}
      <section className=" w-full  flex items-center justify-between pt-10 pb-3">
        {/*  */}

        <p className=" text-zinc-400  italic font-serif font-semibold  ">
          Showing:{" "}
          <span className=" font-normal">
            {page * 20 - 19} -{Data.length < page * 20 ? Data.length : page * 20} of {Data.length} Items
          </span>
        </p>

        {/* Filter commands section  */}

        <div className="flex items-center justify-center">
          <form className=" flex items-center justify-center gap-x-5" onSubmit={ApplyFilter}>
            <div className=" flex items-center justify-center gap-x-2">
              <p className="text-zinc-400  italic  text-[0.9rem] ">Min Marks</p>
              <input name="minimum" type="number" min={0} max={100} defaultValue={0} className=" text-center w-16 text-[0.8rem] py-1 bg-zinc-800 text-white outline-none  " />
            </div>
            <div className=" flex items-center justify-center gap-x-2">
              <p className="text-zinc-400  italic  text-[0.9rem] ">Max Marks</p>
              <input name="maximum" type="number" min={0} max={100} defaultValue={100} className=" text-center w-16 text-[0.8rem] py-1 bg-zinc-800 text-white outline-none  " />
            </div>

            <button type="submit" className=" px-5 text-[0.8rem] py-1 text-white rounded-sm outline-none bg-blue-800 ">
              Apply
            </button>
          </form>
        </div>

        {/*  */}
      </section>

      {/* Data Section Nav */}
      <section className="  w-full grid grid-cols-12 mt-5 italic  text-zinc-300 text-[0.9rem]  ">
        <p className="col-span-1  simulation1  "> S.no </p>
        <p className=" col-span-1  simulation2"> Round no </p>
        <p className=" col-span-2  simulation1"> Candinate Name </p>
        <p className=" col-span-2  simulation2"> Interviewer Name </p>
        <p className=" col-span-2  simulation1"> Ai Score </p>
        <p className=" col-span-2  simulation2"> Interview Date </p>
        <p className=" col-span-2 simulation1"> Answer/Response </p>
      </section>

      {/* Data Display Section */}

      {Data.length == 0 ? (
        <p className=" w-full flex items-center justify-center  text-zinc-400 italic h-[20rem] ">No Data Found 👋🏼</p>
      ) : (
        <section className=" mt-2  w-full mb-14">
          {Data.slice(page * 20 - 20, page * 20).map((data, i) => (
            <DataView key={i + page + 1} id={i + (page * 20 - 20) + 1} c_name={data.candidate_name} question={data.interview_question} response={data.candidate_response} score={data.ai_generated_score} round={data.other_metadata.interview_round} i_name={data.other_metadata.interviewer} date={data.other_metadata.interview_date} />
          ))}
        </section>
      )}

      {/* ******************************************************************************************************************************************* */}

      {/* Pagination section */}

      {Data.length > 0 && (
        <section className=" w-full flex items-center justify-center gap-x-2 text-white  mb-10  text-[0.8rem] ">
          {/* Each page contains 20 data */}

          <button className={` disabled: px-3 rounded-md py-1 ${page <= 1 ? "pointer-events-none bg-zinc-900" : "cursor-pointer bg-blue-500 "} `} onClick={() => pageChange(page - 1)}>
            Previous
          </button>

          {[...Array(Math.ceil(Data.length / 20))].map((_, i) => {
            return (
              <span
                key={i}
                className={`cursor-pointer  size-6 flex items-center justify-center text-center rounded-full ${i + 1 == page ? "  bg-white text-black" : "bg-zinc-800 text-white"} `}
                onClick={() => {
                  pageChange(i + 1);
                }}
              >
                {i + 1}
              </span>
            );
          })}

          <button className={`px-3  rounded-md py-1 ${page >= Math.ceil(Data.length / 20) ? "pointer-events-none bg-zinc-900" : "cursor-pointer bg-blue-500"} `} onClick={() => pageChange(page + 1)}>
            Next
          </button>

          {/*  */}
        </section>
      )}

      {/*  */}
    </main>
  );
};

export default SimulationPage;
