import React, {Component} from 'react'
import {show, hide} from "../../../action/work";
import {connect} from 'react-redux'
import './index.css'


class Work extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e, type){
        if (type === "show"){
            this.props.dispatch(show())
        }
        if (type === "hide"){
            this.props.dispatch(hide())
        }
    }

    render(){
        let{Projects, Show} = this.props.work;
        const isClicked = Show;
        let work = null;
        let button = null;
        if (isClicked){
            work = <ul className="list">
                {Projects.map(project => <li key={project.name} className="List child listItem">
                    <img className="picture" src={project.Image} alt="project"/>
                    <div className="card w-50 card">
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">Status: {project.status}</p>
                            <a href={project.link} className="btn btn-outline-dark">Go to my project here</a>
                        </div>
                    </div>
                </li>)}
            </ul>;

            button = <button className="child btn btn-outline-secondary"
                             onClick={e =>this.handleClick(e, "hide")}>Click here to hide</button>
        }else {
            work = <p className="text">click the button to see my work</p>;
            button = <button className="child btn btn-outline-secondary"
                             onClick={e => this.handleClick(e, "show")}>My works</button>
        }

        return(
            <div>
                <section>
                    {button}
                    {work}
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let {work} = state;
    return {work}
}

export default connect(mapStateToProps)(Work)