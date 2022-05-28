import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";

type CommunityResultType = {
  type: string;
};

const CommunityResult = ({type}: CommunityResultType) => {
  return (
    <div>
      <div>Community</div>
      <div className="">
        <div className="w-[100%] bg-slate-400 h-2 rounded-lg">
          <div className="rounded-l-lg w-[45%] bg-red-400 h-2  "></div>
        </div>
      </div>
    </div>
  );
};

export default CommunityResult;