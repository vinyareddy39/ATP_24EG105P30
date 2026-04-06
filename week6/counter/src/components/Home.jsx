import React, { useContext } from "react";
import { counterContextObj } from "../provider/createprovider";

function Home() {
  const { counter, increment, decrement } = useContext(counterContextObj);

  return ( 
    <div> 
    <div className="flex justify-center gap-10 mt-10 text-4xl">
      
      {/* Counter 1 */}
      <div className="text-center rounded border shadow-2xl bg-amber-100 p-5">
        <h1 className="mb-3">Edit Counter</h1>

        <h1 className="text-3xl mb-5">{counter}</h1>

        <button
          onClick={increment}
          className="text-white p-3  bg-blue-400"
        >
          +
        </button>

        <button
          onClick={decrement}
          className="text-white p-3 bg-red-400 mx-5"
        >
          -
        </button>
      </div>

      {/* Counter 2 */}
      <div className="text-center rounded border shadow-2xl bg-amber-100 p-5">
        <h1 className="mb-3">Edit Counter</h1>

        <h1 className="text-3xl mb-5">{counter}</h1>

        <button
          onClick={increment}
          className="text-white p-3  bg-blue-400"
        >
          +
        </button>

        <button
          onClick={decrement}
          className="text-white p-3  bg-red-400 mx-5"
        >
          -
        </button>
      </div>

    </div> 





<div className="flex justify-center gap-10 mt-10 text-4xl">
      
      {/* Counter 1 */}
      <div className="text-center rounded border shadow-2xl bg-amber-100 p-5">
        <h1 className="mb-3">Edit Counter</h1>

        <h1 className="text-3xl mb-5">{counter}</h1>

        <button
          onClick={increment}
          className="text-white p-3  bg-blue-400"
        >
          +
        </button>

        <button
          onClick={decrement}
          className="text-white p-3 bg-red-400 mx-5"
        >
          -
        </button>
      </div>

      {/* Counter 2 */}
      <div className="text-center rounded border shadow-2xl bg-amber-100 p-5">
        <h1 className="mb-3">Edit Counter</h1>

        <h1 className="text-3xl mb-5">{counter}</h1>

        <button
          onClick={increment}
          className="text-white p-3  bg-blue-400"
        >
          +
        </button>

        <button
          onClick={decrement}
          className="text-white p-3  bg-red-400 mx-5"
        >
          -
        </button>
      </div>
      </div>




    </div>
  );
}

export default Home;