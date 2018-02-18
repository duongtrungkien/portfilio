import React, {Component} from 'react'
import BackGround from '../../../static/images/Header-background.jpg'


const sectionStyle = {
    width: "100%",
    backgroundImage: `url(${BackGround})`
};


export default class Header extends Component{
    render(){
        return(
            <div>
                <section style={ sectionStyle }>
                    <img src="https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725565_vVl8Hc6kIRQsgquqdQYrz7fWFrfQAGCw.jpg" alt="avatar" className="rounded-circle child"/>
                    <h1 className="text child">Kien Duong</h1>
                    <h1 className="text">Fullstack developer</h1>
                </section>
            </div>
        )
    }
}