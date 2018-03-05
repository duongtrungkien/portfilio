import {SHOWW, HIDEW} from "./actionType"
import PortfilioImage from "../static/images/portfolio.png"
import DSLImage from "../static/images/DSL.png"

export function show() {

    return dispatch => {
        dispatch({
            type: SHOWW,
            data: {
                Show: true,
                Projects:[
                    {
                        name: "Portfolio",
                        status: "in process",
                        link: "https://duongtrungkien.github.io/",
                        Image: PortfilioImage,
                    },
                    {
                        name: "DataScienceLog",
                        status: "in process",
                        link: "https://duongtrungkien.github.io/",
                        Image: DSLImage,
                    }
                ]
            }
        })
    }
}

export function hide() {
    return dispatch => {
        dispatch({
            type: HIDEW,
            data:{
                Show: false,
            }
        })
    }
}