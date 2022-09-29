import { configureStore } from "@reduxjs/toolkit";
import citiesApi from "./citiesApi";
import React from "react";
import itinerariesApi from "./itinerariesApi";
import activitiesApi from "./activitiesApi";

export const  store = configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer,
        itineraries: itinerariesApi,
        [itinerariesApi.reducerPath] : itinerariesApi.reducer,
        activities: activitiesApi,
        [activitiesApi.reducerPath] : activitiesApi.reducer,
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
        citiesApi: true,
        itinerariesApi:true,
        activitiesApi:true
    }).concat(citiesApi.middleware)
    .concat(itinerariesApi.middleware)
    .concat(activitiesApi.middleware)

})

