import {createContext} from 'react';

//init state
export const state = {

    apiUrl:"http://localhost:5000/api/account"

}
//context creation
export const Context = createContext(state);


