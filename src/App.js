import { useEffect, useState } from "react";
import Link from "./components/Link";
import { url } from "./data/url";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(url);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="mx-auto mt-16 h-[80%] w-11/12 rounded-xl bg-white bg-opacity-60 bg-clip-padding pb-14 shadow-lg backdrop-blur-xl backdrop-filter md:h-5/6 md:w-1/2">
        <div className="-translate-y-12 select-none">
          <div className="bg-red-white mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-indigo-600 bg-transparent">
            <img
              src="images/profile.jpg"
              draggable="false"
              className="h-24 w-24 rounded-full"
              alt="profile"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-2xl font-semibold">
              Muh. Rafi Alfatih
            </p>
            <p className="text-center text-sm font-thin">
              fortis fortuna adiuvat.
            </p>
          </div>
        </div>
        <div className="scrollbar-hide mx-10 flex h-4/6 flex-col items-center space-y-6 overflow-y-auto md:h-60">
          {data.map((item, index) => (
            <Link key={index} url={item.url} title={item.title} />
          ))}
        </div>
        <p className="flex h-20 items-center justify-center">
          &copy;rappy 2022
        </p>
      </div>
    </div>
  );
};

export default App;
