import React, {Component} from 'react'
import './index.css'
import FaceBookIcon from '../../../static/images/facebook.png'
import LinkedInIcon from '../../../static/images/linkedin.png'
import GitIcon from '../../../static/images/github-logo.png'


export default class Skill extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">

                            </div>
                            <div className="col-sm text-center">
                                <a href="https://www.linkedin.com/in/trung-kien-duong-4871a7146/">
                                    <img className="social-icon" src={LinkedInIcon} alt="LinkedIn"/>
                                </a>
                                <a href="https://github.com/kienTduong">
                                    <img className="social-icon" src={GitIcon} alt="Gmail"/>
                                </a>
                                <a href="https://www.facebook.com/kien.duongtrung.77">
                                    <img className="social-icon" src={FaceBookIcon} alt="facebook"/>
                                </a>
                            </div>
                            <div className="col-sm">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}