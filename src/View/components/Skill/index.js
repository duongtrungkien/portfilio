import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.css'
import ReactImage from '../../../static/images/react_js.png'
import PythonImage from '../../../static/images/python.png'
import CplusImage from '../../../static/images/c++.jpg'
import FlaskImage from '../../../static/images/flask.png'
import HTMLCSSImage from '../../../static/images/HtmlCSS.jpeg'
import LinuxImage from '../../../static/images/linux.jpg'
import SQLImage from '../../../static/images/sql.png'
import GitImage from '../../../static/images/git.png'


class Skill extends Component{
    render(){
        let {Skills} = this.props.skill;
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <section>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-50 child" src={ReactImage} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[0].name}</h5>
                                <p className="description ">{Skills[0].status}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50 child" src={PythonImage} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[1].name}</h5>
                                <p className="description ">{Skills[1].status}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50 child" src={CplusImage} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[2].name}</h5>
                                <p className="description ">{Skills[2].status}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50 child" src={FlaskImage} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[3].name}</h5>
                                <p className="description ">{Skills[3].status}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50 child" src={SQLImage} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[6].name}</h5>
                                <p className="description ">{Skills[6].status}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50 child" src={HTMLCSSImage} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[4].name}</h5>
                                <p className="description ">{Skills[4].status}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50 child" src={LinuxImage} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[5].name}</h5>
                                <p className="description ">{Skills[5].status}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50 child" src={GitImage} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="description ">{Skills[7].name}</h5>
                                <p className="description ">{Skills[7].status}</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev left" href={"#carouselExampleControls"} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next right" href={"#carouselExampleControls"} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let {skill} = state;
    return {skill}
}

export default connect(mapStateToProps)(Skill)