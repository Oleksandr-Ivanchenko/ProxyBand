import { Action } from "../utils/interface";

export const SET_ERROR = 'SET_ERROR';

export const setErrorAction = (payLoad: string): Action => ({
  type: SET_ERROR,
  payLoad,
});
