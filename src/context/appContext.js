import React, { createContext } from "react"
import { useImmerReducer } from "use-immer"

import { reducers, initialState } from '../reducers/modelReducers';

export const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
    const [props, dispatch] = useImmerReducer(reducers, initialState);
    return (
        <AppContext.Provider
            value={{ props, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}