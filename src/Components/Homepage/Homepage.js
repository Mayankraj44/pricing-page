import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanDataState, setPlanData } from "../../Store/Slices/plan_data";

const Homepage = () => {
  const plans = useSelector(getPlanDataState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!plans) {
      dispatch(setPlanData());
    }
  }, [plans]);

  console.log("plans", plans);
  return <div>Homepage</div>;
};

export default Homepage;
