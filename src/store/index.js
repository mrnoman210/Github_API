import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

import cakeReducer from "./Slices/cakeSlice";
import iceCreamReducer from "./Slices/iceCreamSlice";
import userReducer from "./Slices/userSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: {
      numOfCakes: 20,
    },
    iceCream: {
      numOfIcecreams: 10,
    },
    user: {
      loading: false,
      users: [],
      error: "",
    },
  },
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
