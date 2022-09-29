import { configureStore } from "@reduxjs/toolkit";
import citiesApi from "./citiesApi";
import React from "react";
import itinerariesApi from "./itinerariesApi";

export const  store = configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer,
        itineraries: itinerariesApi,
        [itinerariesApi.reducerPath] : itinerariesApi.reducer,
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
        citiesApi: true
    }).concat(citiesApi.middleware)

})

