import axios from 'axios'
import {createContext, useContext, useReducer, useEffect} from 'react'


const OdontoStates = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTS':
            return {
                ...state,
                dentists: action.payload
            };

        case 'GET_DENTIST':
            return {
                ...state,
                dentist: action.payload
            };

        case 'ADD_FAV':
            const isDentistInFavs = state.favs.some(fav => fav.id === action.payload.id);

            if (!isDentistInFavs) {
                const updatedFavs = [...state.favs, action.payload];
                localStorage.setItem('favs', JSON.stringify(updatedFavs));
                return {
                    ...state,
                    favs: updatedFavs
                };
            }

            return state;

        case 'SWITCH_THEME':
            const newTheme = state.theme === 'dark' ? 'light' : 'dark';

            localStorage.setItem('theme', newTheme);

            return {
                ...state,
                theme: newTheme
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {   
    dentists: [],
    dentist: {},
    favs: initialFavState,
    theme: 'light',
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const url = 'https://jsonplaceholder.typicode.com/users/'

    useEffect(() => {
        axios(url)
        .then(res => {
            dispatch({type: 'GET_DENTISTS', payload: res.data})})
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    
    useEffect(()=>{
        if(state.theme === 'dark'){
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [state.theme])

    return(
        <OdontoStates.Provider value={{dispatch, state}}>
            {children}
        </OdontoStates.Provider>
    )
}

export default Context
export const useOdontoStates = () => useContext(OdontoStates);