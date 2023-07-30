import store from "../redux/store";
import { ListState, DetailsState } from "./redux_tsa";

export type AppStateProps = {
  list: ListState;
  details: DetailsState;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
