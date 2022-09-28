import { BackTop } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNetworkStatus,
  getPlansData,
  setPlanData,
} from "../../Store/Slices/plan_data";
import Nointernet from "../Nointernet/no_internet";
import Categorycards from "../Plancards/category_cards_list";
import Tabs from "../Tabs/tabs";
import Modalwrapper from "../Modals/modal_wrapper";
import Modalform from "../Modals/modal_form";
import { getModalVisibleState } from "../../Store/Slices/modal_slice";

const Homepage = () => {
  const plans = useSelector(getPlansData);
  const visible = useSelector(getModalVisibleState);
  const isOnline = useSelector(getNetworkStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!plans) {
      dispatch(setPlanData());
    }
  }, [plans, dispatch]);

  return (
    <>
      <Tabs />
      {plans ? <Categorycards /> : <p>Loading..</p>}
      {visible && (
        <Modalwrapper>
          <Modalform />
        </Modalwrapper>
      )}
      <BackTop></BackTop>
      <BackTop />
      {!isOnline && <Nointernet />}
    </>
  );
};

export default Homepage;
