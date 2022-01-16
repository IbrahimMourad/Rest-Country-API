import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  filter: 'All',
  countries: [],
  isLoading: true,
  searchWord: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'FETCH_ALL':
      return {
        ...state,
        countries: action.payload,
      };
    case 'FETCH_BY_NAME':
      return { ...state, countries: action.payload };
    case 'SEARCH_BY_WORD':
      return {
        ...state,
        searchWord: action.payload.searchWord,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload.filter,
        isLoading: action.payload.isLoading,
        countries: action.payload.countries,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
