import { applyMiddleware, combineReducers, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({

});

const localStorageMiddleware: Middleware = ({ getState }) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('reduxState', JSON.stringify(getState()));
        return result;
    };
};

const middleware = [
    thunk,
    localStorageMiddleware
];

const hydrateStore = (): any => {
    if (process.browser) {
        if (localStorage.getItem('reduxState')) {
            return JSON.parse(localStorage.getItem('reduxState') as string);
        }
    }
    return {};
};

const store = createStore(
    rootReducer,
    hydrateStore(),
    composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
