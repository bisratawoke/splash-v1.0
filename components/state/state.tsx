import {createContext} from 'react';

//init state
export const state = {

    apiUrl:"http://account/api/account"

}
//context creation
export const Context = createContext(state);


