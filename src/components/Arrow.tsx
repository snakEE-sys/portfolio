import React from "react";
import SouthIcon from "@mui/icons-material/South";

const Arrow = () => {
  return (
    <div className="arrow absolute bottom-8">
      <button className="text-white animate-bounce2" onClick={() => {}}>
        <SouthIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Arrow;
