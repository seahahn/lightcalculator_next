import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {getBaselineResultState,bSetAnnualResult} from "../../../store/slices/baslineResultSlice"
import {getForecastResultState,fSetAnnualResult} from "../../../store/slices/forecastResultSlice"
import {useSelector} from "react-redux"
import {annualTotal} from "../../../functions/ResultFunctions"


type AnnualResultType ={ 
    type:string
}

const AnnualResult = ({type}:AnnualResultType) => {
  // const {bCalculateBuilding,bCalculateCar,bCalculteRemoteWork,bCalculateCommuting,bClaculateFlights} = useSelector(getBaselineResultState)
  // const {fCalculateBuilding,fCalculateCar,fCalculateRemoteWork,fCalculateCommuting,fCalculateFlights} = useSelector(getForecastResultState)

  // const currentCBuilding = type == "baseline" ? bCalculateBuilding : fCalculateBuilding
  // const currentCCar = type =="baseline" ? bCalculateCar:fCalculateCar
  // const curentCRemoteWork = type == "baseline" ?  bCalculteRemoteWork:fCalculateRemoteWork
  // const currentCCommuting = type == "baseline" ? bCalculateCommuting :fCalculateCommuting
  // const currentCFlights = type =="baseline" ? bClaculateFlights:fCalculateFlights
  // const currentAction = type == "baseline" ? bSetAnnualResult:fSetAnnualResult

  // const [value,setValue]= useState(annualTotal(currentCBuilding,currentCCar,curentCRemoteWork,currentCCommuting,currentCFlights))
  // console.log(currentCBuilding,currentCCar,curentCRemoteWork,currentCCommuting,currentCFlights)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   const num = annualTotal(currentCBuilding,currentCCar,curentCRemoteWork,currentCCommuting,currentCFlights)
  //   setValue(Math.round(num * 100) / 100)
  //   dispatch(currentAction(value))
  //   console.log(num)
  // },[])

  return (
    <div>
      <div className="w-[100%] flex justify-between pt-3 ">
        <div className="flex">
          <div className="font-semibold">{type} Annual</div>
          {/* <div className="font-light">(tCO2e)</div> */}
        </div>
        <div>Bug</div>
      </div>
      <div className="">
        <div className="w-[100%] bg-slate-400 h-3 rounded-lg">
          <div className="rounded-l-lg w-[85%] bg-red-400 h-3 ">
            <div className="rounded-l-lg w-[70%] bg-orange-400 h-3">
              <div className="rounded-l-lg w-[40%] bg-emerald-400 h-3">
                <div className="rounded-l-lg w-[38%] bg-purple-900 h-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualResult;
