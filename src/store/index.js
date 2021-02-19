// --- Application State
import React, { useReducer } from 'react';

// Application hlobal state initial value
const initialState = {
    name: 'daniel'
}
// Application context ( used to access data inside child components )
export const ApplicationContext = React.createContext();
// Application context provider, used to drill down the props across the DOM
export const ApplicationContextProvider = ({ children }) => {
    // redux like reducer.
    const reducer = (state = initialState, { type, payload }) => {
        switch(type) {
            case 'test':
                return {
                    ...state,
                    name: payload
                }
            default:
                return state;
        }

    }

    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <ApplicationContext.Provider value={{ 
            state,
            dispatch
        }}>
            { children }
        </ApplicationContext.Provider>
    )
}
