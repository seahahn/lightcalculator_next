import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";
import { useSelector } from "../../store/store";
import {
  getBaselineState,
  bSetFuelType,
  bSetCommuting,
} from "../../store/slices/baselineSlice";

import {
  getForecastState,
  fSetFuelType,
  fSetCommuting,
} from "../../store/slices/forecastSlice";

type percentInputType = {
  Objectkey: string;
  value: string;
  isBaseline: boolean;
};

const PercentInput = ({ Objectkey, value, isBaseline }: percentInputType) => {
  const { bFuelType, bCommuting } = useSelector(getBaselineState);
  const { fFuelType, fCommuting } = useSelector(getForecastState);
  const dispatch = useDispatch();

  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (Objectkey == "commuting" && isBaseline) {
        dispatch(bSetCommuting({ ...bCommuting, [value]: event.target.value }));
      } else if (Objectkey == "fuel" && isBaseline) {
        dispatch(bSetFuelType({ ...bFuelType, [value]: event.target.value }));
      } else if (Objectkey == "commuting" && !isBaseline) {
        dispatch(fSetCommuting({ ...fCommuting, [value]: event.target.value }));
      } else if (Objectkey == "fuel" && !isBaseline) {
        dispatch(fSetFuelType({ ...fFuelType, [value]: event.target.value }));
      }
    }
  };

  return (
    <div className="flex w-[100%]  h-[3] m-2 p-1 justify-between px-2">
      <div>{value}</div>
      <div className="mr-3 via-green-100 flex">
        <input
          type="number"
          className="w-12 text-gray-700 bg-white rounded"
          onChange={handleDefaultChange}
        ></input>
        <div className="ml-2">%</div>
      </div>
    </div>
  );
};

export default PercentInput;
