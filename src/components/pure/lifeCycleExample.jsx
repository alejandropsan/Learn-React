/**
 * Ejemplo de componente de tipo clase que dispone de los métodos de ciclo
 * de vida.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }


    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }


    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WILLUPDATE: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DIDUPDATE: Justo después de actualizarse')
    }

    componentWillUnmount(){
        console.log('Justo antes de desaparecer')
    }










}

    










LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
