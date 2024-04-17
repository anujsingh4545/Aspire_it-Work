import React, {useState} from "react";

const DataView = ({id, c_name, question, response, score, round, i_name, date}) => {
  const [Display, setDisplay] = useState(false);

  return (
    <>
      <main className=" grid grid-cols-12 w-full    mb-1 gap-x-1 relative">
        <p className=" col-span-1  dataview1  "> {id} </p>
        <p className=" col-span-1  dataview1"> {round} </p>
        <p className=" col-span-2  dataview1  "> {c_name} </p>
        <p className=" col-span-2  dataview1 "> {i_name} </p>
        <p className=" col-span-2  dataview1 "> {score} </p>
        <p className=" col-span-2  dataview1  "> {date} </p>
        <button className=" col-span-2  dataview1 hover:underline underline-offset-2 text-blue-700 font-medium outline-none" onClick={() => setDisplay(!Display)}>
          answer/response
        </button>
        {Display && (
          <section className={` col-span-12 mt-1  ease-in-out duration-300  transform  text-zinc-300 text-[0.8rem] py-3 px-3 bg-zinc-900  `}>
            <p className="  font-bold ">
              Question: <span className=" font-normal "> {question}</span>
            </p>
            <p className=" font-bold">
              Response: <span className=" font-normal ">{response}</span>
            </p>
          </section>
        )}
      </main>

      {/*  */}
    </>
  );
};

export default DataView;
