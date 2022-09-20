import { BackTop } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNetworkStatus,
  getPlansData,
  setPlanData,
} from "../../Store/Slices/plan_data";
import { getSelectedCategory } from "../../Store/Slices/plan_slice";
import Nointernet from "../Nointernet/no_internet";
import Categorycards from "../Plancards/category_cards_list";
import Tabs from "../Tabs/tabs";

const Homepage = () => {
  const plans = useSelector(getPlansData);
  const selected_category = useSelector(getSelectedCategory);
  const isOnline = useSelector(getNetworkStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!plans) {
      dispatch(setPlanData());
    }
  }, [plans, dispatch]);

  console.log("Status", isOnline, plans, selected_category);

  return (
    <>
      <Tabs />
      {plans ? <Categorycards /> : <p>Loading..</p>}
      <BackTop />
      {!isOnline && <Nointernet />}
    </>
  );
};

export default Homepage;
