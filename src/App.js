import "./App.css";
import ram from "./images/cyberdeck-ram.svg";
function App() {
  return (
    <div className="lg:container lg:mx-auto lg:px-8 font-body">
      <div className="flex flex-col text-center text-white py-12">
        {/* top side */}
        <div className=" w-2/12 mx-auto">
          <h2 className="uppercase text-secondary-500 font-semibold text-2xl text-shadow-secondary">
            CYBERDECK RAM: 4/4
          </h2>
          <div className="border-b-4 border-t-2 h-2 border-solid border-opacity-40 border-red-700 mt-2 mb-4"></div>
          <h4 className="text-left text-xs font-extrabold text-secondary-600 text-shadow-secondary">
            IT CAN BE ANYTHING
          </h4>
          <div className="flex justify-start mt-2">
            <img className="w-3 mr-2 opacity-70 transform scale-100 hover:scale-110 cursor-pointer hover:opacity-100 transition easy-in " src={ram} alt="CYBERDECK RAMS" />
            <img className="w-3 mr-2 opacity-70 transform scale-100 hover:scale-110 cursor-pointer hover:opacity-100 transition easy-in active-hack-item-svg" src={ram} alt="CYBERDECK RAMS" />
            <img className="w-3 mr-2 opacity-70 transform scale-100 hover:scale-110 cursor-pointer hover:opacity-100 transition easy-in active-hack-item-svg" src={ram} alt="CYBERDECK RAMS" />
            <img className="w-3 mr-2 opacity-70 transform scale-100 hover:scale-110 cursor-pointer hover:opacity-100 transition easy-in active-hack-item-svg" src={ram} alt="CYBERDECK RAMS" />
          </div>
        </div>
        <div className="w-4/12 mx-auto py-24">
          <h2 className="uppercase text-primary-500 font-extrabold text-xl flex justify-center gap-x-4 items-center text-shadow-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            CAMERA 11: BACK ENTRANCE
          </h2>
        </div>
      </div>
      {/* main menu */}
      <div className="grid grid-cols-2" >
        {/* Quick Hacks menu */}
        <div className="left-menu origin-center">
        <div className="pl-28 w-full ">
          <h4 className="text-left text-xs font-extrabold text-secondary-600 text-shadow-secondary">
            IT CAN BE ANYTHING
          </h4>
          <h2 className="uppercase text-primary-500 font-bold text-xl text-shadow-primary">
            Available QuickHacks:
          </h2>
          <div className="border-b-4 border-t-2 h-2 border-solid border-opacity-40 border-red-700 mt-2 mb-4"></div>
        </div>
        <div className="w-full ">
          {/* Single menu item */}
          <div className="hack-item-primary text-shadow-primary flex justify-between text-primary-500 uppercase  items-center ml-1 backdrop-filter py-1 px-4 border-4 border-solid border-primary-400 mb-5 w-10/12 cursor-pointer transform scale-100 transition easy-in hover:scale-110">
            <div>
              <h2 className="uppercase font-semibold text-xl w-80 overflow-ellipsis">
                xHub Camera Control
              </h2>
              <p className="border-2 border-solid text-sm border-primary-500 rounded-lg px-2 w-min">
                Ready
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h2 className="uppercase font-base text-4xl">3</h2>
              <div>
                <img className="w-2" src={ram} alt="CYBERDECK RAMS" />
              </div>
              <div>...mainIcon</div>
            </div>
          </div>

          <div className="hack-item-primary text-shadow-primary flex justify-between text-primary-500 uppercase  items-center ml-5 backdrop-filter py-1 px-4 border-4 border-solid border-primary-400 mb-5 w-10/12 cursor-pointer transform scale-100 transition easy-in hover:scale-110">
            <div>
              <div className="w-80 ">
                <h2 className="uppercase font-semibold text-xl w-80 overflow-ellipsis">
                  turn off (remote deactivation)
                </h2>
              </div>
              <p className="border-2 border-solid text-sm  border-primary-500 rounded-lg px-2 w-min">
                Ready
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h2 className="uppercase font-base text-4xl">2</h2>
              <div>
                <img className="w-2" src={ram} alt="CYBERDECK RAMS" />
              </div>
              <div>...mainIcon</div>
            </div>
          </div>

          <div className="hack-item-primary text-shadow-primary flex justify-between text-primary-500 uppercase  items-center ml-9 backdrop-filter py-1 px-4 border-4 border-solid border-primary-400 mb-5 w-10/12 cursor-pointer transform scale-100 transition easy-in hover:scale-110">
            <div>
              <h2 className="uppercase font-semibold text-xl w-80 overflow-ellipsis">
                ColorKraken breach
              </h2>
              <p className="border-2 border-solid text-sm border-primary-500 rounded-lg px-2 w-min">
                Ready
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h2 className="uppercase font-base text-4xl">4</h2>
              <div>
                <img className="w-2" src={ram} alt="CYBERDECK RAMS" />
              </div>
              <div>...mainIcon</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
