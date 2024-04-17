import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const HeaderNav = () => {
  const [NavCurrent, setNAvCurrent] = useState("0"); // 0 for none , 1 form simulation , 2 for visualisation
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/simulation") setNAvCurrent("1");
    else if (location.pathname == "/visualisation") setNAvCurrent("2");
    else {
      setNAvCurrent("0");
    }
  }, [location]); // whenever location changes render useffect

  return (
    <main className="  w-full h-20 flex items-center justify-center z-20  fixed top-0 left-0 bg-black text-white ">
      {/* Floating Header */}

      <div className=" bg-zinc-800 w-[50%] flex items-center justify-between rounded-lg">
        {/* Data simulation router button */}

        <Link to={"/simulation"} className=" w-full ">
          <button className={` headernav1 rounded-l-lg border-r-[1px] border-zinc-600 ${NavCurrent == "1" ? "bg-zinc-900" : "bg-zinc-800"} `}>Data Simulation</button>
        </Link>

        {/* Data visualisation router button */}
        <Link to="/visualisation" className=" w-full">
          <button className={` headernav1 rounded-r-lg  ${NavCurrent == "2" ? "bg-zinc-900" : "bg-zinc-800"} `}>Data Visualization</button>
        </Link>
      </div>

      {/*  */}
    </main>
  );
};

export default HeaderNav;
