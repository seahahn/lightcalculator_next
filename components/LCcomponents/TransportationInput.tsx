import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CheckBox from "./CheckBox";
import { useSelector } from "../../store/store";
import {
  getBaselineState,
  bSetCommuting,
} from "../../store/slices/baselineSlice";
import {
  getForecastState,
  fSetCommuting,
} from "../../store/slices/forecastSlice";

import PercentInput from "./PercentInput";

type TransportationInputType = {
  type: string;
};

const TransportationInput = ({ type }: TransportationInputType) => {
  const { bCommuting } = useSelector(getBaselineState);
  const { fCommuting } = useSelector(getForecastState);
  const dispatch = useDispatch();

  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type == "baseline") {
      dispatch(
        bSetCommuting({ ...bCommuting, setDefault: event.target.checked })
      );
    } else {
      dispatch(
        fSetCommuting({ ...fCommuting, setDefault: event.target.checked })
      );
    }
  };

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (type == "baseline") {
        dispatch(
          bSetCommuting({ ...bCommuting, distance: parseInt(currentVal, 10) })
        );
      } else {
        dispatch(
          fSetCommuting({ ...fCommuting, distance: parseInt(currentVal, 10) })
        );
      }
    }
  };

  return (
    <div className=" w-[100%] ">
      <label className="inline-flex items-center w-[100%] justify-start pt-3 pl-3 ml-6 my-3">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4"
          onChange={handleDefaultChange}
        />
        <span className="ml-2">기본 값 적용</span>
      </label>

      <hr className="border-none h-1 bg-white"></hr>

      <div className="flex my-3 m-6">
        <div className="w-[60%] pl-3  flex flex-col justify-center text-lg items-center">
          평균 출퇴근 거리{" "}
        </div>
        <input
          type="number"
          className="
          w-14 text-gray-700 bg-white rounded
          "
          placeholder=""
          min={0}
          onChange={handleDistanceChange}

          // className = {type === "baseline" ?  "bg-white": "bg-yellow"}
        />
        <div className="flex items-center justify-center p-3">km</div>
      </div>
      <hr className="border-none h-1 bg-white"></hr>

      <div className="rounded-lg p-2  m-5">
        <div className="w-[100%] bg-slate-400 h-4 rounded-lg">
          <div className="rounded-l-lg w-[85%] bg-red-400 h-4  ">
            <div className="rounded-l-lg w-[30%] bg-orange-400 h-4 "></div>
          </div>
        </div>

        <PercentInput
          Objectkey="commuting"
          value="car"
          isBaseline={type == "baseline" ? true : false}
        />
        <PercentInput
          Objectkey="commuting"
          value="publicTransit"
          isBaseline={type == "baseline" ? true : false}
        />
        <PercentInput
          Objectkey="commuting"
          value="walkOrBike"
          isBaseline={type == "baseline" ? true : false}
        />
      </div>
    </div>
  );
};

export default TransportationInput;