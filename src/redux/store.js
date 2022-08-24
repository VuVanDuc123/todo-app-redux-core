import { createStore } from "redux";
import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools(); // khi dùng redux toolkit sẽ được tích hợp vào
const store = createStore(rootReducer, composeEnhancers); // 3 tham số 1 reducer, 2 giá trị value, 3 các thư viện

export default store;
