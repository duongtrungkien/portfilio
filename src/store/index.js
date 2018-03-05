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
                status: "Can use redux and handle resful API",
            },
            {
                name: "Python",
                status: "Have a solid knowledge in Python",
            },
            {
                name: "C++",
                status: "Have basic skill in C++",
            },
            {
                name: "Flask",
                status: "Use flask to build backend for apps",
            },
            {
                name: "HTML/CSS",
                status: ""
            },
            {
                name: "Linux",
                status: ""
            },
            {
                name: "SQL",
                status: ""
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