import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../@types/redux_root";
import { BeerParamList } from "../@types/navigator";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type AppNavigation = NativeStackNavigationProp<BeerParamList>;
export const useAppNavigation = () => useNavigation<AppNavigation>();
