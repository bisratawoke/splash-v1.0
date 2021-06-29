import {createContext} from 'react';

//init state
export const state = {

    apiUrl:"http://swiftbase.com/api/account"

}
//context creation
export const Context = createContext(state);


