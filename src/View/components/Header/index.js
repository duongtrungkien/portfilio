import React, {Component} from 'react'
import BackGround from '../../../static/images/Header-background.jpg'
import MyPic from '../../../static/images/me.png'

const sectionStyle = {
    width: "100%",
    backgroundImage: `url(${BackGround})`
};


export default class Header extends Component{
    render(){
        return(
            <div>
                <section style={ sectionStyle }>
                    <img src={MyPic} alt="avatar" className="rounded-circle child"/>
                    <h1 className="text child">Kien Duong</h1>
                    <h1 className="text">Fullstack developer</h1>
                </section>
            </div>
        )
    }
}