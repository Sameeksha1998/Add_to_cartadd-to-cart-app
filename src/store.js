import { createStore } from "redux";
import { rooted } from "./Redux/reducers/main";

export const store = createStore(rooted)