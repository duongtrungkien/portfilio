import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer/index'

export const initialState = {
    work:{
        Show: false,
        Projects:[]
    },
    skill:{
        Skills:[
            {
                name: "React",
                status: "advance",
            },
            {
                name: "Python",
                status: "experience",
            },
            {
                name: "C++",
                status: "junior",
            },
            {
                name: "Flask",
                status: "junior",
            },
            {
                name: "HTML/CSS",
                status: "junior"
            },
            {
                name: "Linux",
                status: ""
            },
            {
                name: "SQL",
                status: "junior"
            },
            {
                name: "Git",
                status: ""
            }
            ]
    }
};

const enhancers = [];
const middleware = [
    thunk
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);

export default store