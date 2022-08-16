import React from "react";
import { useGlobalContext } from "./context";
import Flip from "react-reveal/Flip";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className="btn-container">
      <Flip left duration={3000}>
        <button disabled={isLoading} onClick={() => handlePage("dec")}>
          prev
        </button>
      </Flip>
      <Flip top duration={3000}>
        <p>
          {page + 1} of {nbPages}
        </p>
      </Flip>
      <Flip right duration={3000}>
        <button disabled={isLoading} onClick={() => handlePage("inc")}>
          next
        </button>
      </Flip>
    </div>
  );
};

export default Buttons;
