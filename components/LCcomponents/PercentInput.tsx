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
import { object } from "yup";

type percentInputType = {
  Objectkey: string;
  value: string;
  isBaseline: boolean;
  title:string;
  // defaultVal:string;
};

//TODO: Change implementation
const PercentInput = ({ Objectkey, value, isBaseline,title }: percentInputType) => {
  const { bFuelType, bCommuting } = useSelector(getBaselineState);
  const { fFuelType, fCommuting } = useSelector(getForecastState);
  const dispatch = useDispatch();

  let initialFuelObject = bFuelType
  let initialCommutingObject = bCommuting
  //TODO: Not good implementation 
  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (Objectkey == "commuting" && isBaseline) {
        initialCommutingObject = bCommuting
        dispatch(bSetCommuting({ ...bCommuting, [value]: event.target.value }));
      } else if (Objectkey == "fuel" && isBaseline) {
        initialFuelObject = bFuelType
        dispatch(bSetFuelType({ ...bFuelType, [value]: event.target.value }));
      } else if (Objectkey == "commuting" && !isBaseline) {
        initialCommutingObject = fCommuting
        dispatch(fSetCommuting({ ...fCommuting, [value]: event.target.value }));
      } else if (Objectkey == "fuel" && !isBaseline) {
        initialFuelObject = fFuelType
        dispatch(fSetFuelType({ ...fFuelType, [value]: event.target.value }));
      }
    }
  };
  //TODO: Not good implementation 
  let defaultValue = "0"
  if(Objectkey == "commuting"){
    defaultValue = initialCommutingObject[value as keyof typeof bCommuting].toString()
  }else{
    defaultValue = initialFuelObject[value as keyof typeof bFuelType].toString()
  }

 

  return (
    <div className="flex w-[100%]  h-[3] m-2 p-1 justify-between px-2">
      <div>{title}</div>
      <div className="mr-3 via-green-100 flex">
        <input
          type="number"
          defaultValue = {defaultValue}
          className="w-12 text-gray-700 bg-white rounded"
          onChange={handleDefaultChange}
        ></input>
        <div className="ml-2">%</div>
      </div>
    </div>
  );
};

export default PercentInput;
