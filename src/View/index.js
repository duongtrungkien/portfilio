import React, {Component} from 'react'
import './index.css'
import About from './components/About/index'
import Work from './components/Work/index'
import Skill from './components/Skill/index'
import Contact from './components/Contact/index'
import Header from './components/Header/index'

export default class View extends Component{
    render(){
        return(
            <div>
                <section>
                    <Header/>
                    <About/>
                    <Skill/>
                    <Work/>
                    <Contact/>
                </section>
            </div>
        )
    }
}

