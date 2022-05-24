import React, { Component } from 'react'
import { StylesLI } from '../styles/Styles'
import { StyleCompt1 } from '../styles/Styles'
import { StylesH1 } from '../styles/Styles'

export class Component1 extends Component{
     render() {
        return(
            <div>
                <StyleCompt1>
                    <StylesH1>Mis estudios</StylesH1>
                    <h3>Universidad de Pamplona 2016</h3>
                    <h4>Ingeniería Ambiental</h4>
                    <h3>Universidad de Pamplona 2022</h3>
                    <h3>Especialización en Sistemas Integrados de Gestión HSEQ</h3>
                </StyleCompt1>
                
            </div>
        )
    }
}