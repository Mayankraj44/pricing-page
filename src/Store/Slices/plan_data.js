import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  plans: null,
  connected: true,
};

const plandataslice = createSlice({
  name: "plandataslice",
  initialState,
  reducers: {
    setPlanDataState: (state, action) => {
      state.plans = action.payload;
    },
    setNetworkStatusState: (state, action) => {
      state.connected = action.payload;
    },
  },
});

const { setPlanDataState, setNetworkStatusState } = plandataslice.actions;

const setPlanData = () => (dispatch) => {
  axios
    .get("https://run.mocky.io/v3/179f2376-75b5-4a3e-b9d6-3d5ac08db2ba")
    .then((res) => {
      dispatch(setPlanDataState(res.data));
    })
    .catch((err) => console.error(err));
};

const setNetworkStatus = (value) => (dispatch) => {
  dispatch(setNetworkStatusState(value));
};

const getPlansData = (state) => state.plandataslice.plans;

const getNetworkStatus = (state) => state.plandataslice.connected;

export { setPlanData, getPlansData, setNetworkStatus, getNetworkStatus };

export default plandataslice.reducer;
