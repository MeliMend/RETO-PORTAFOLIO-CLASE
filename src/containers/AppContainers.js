import React from 'react';
import { Component1 } from '../componets/Component1';
import Component2 from '../componets/Component2';
import { Component3 } from '../componets/Component3';
import '../styles/styles.css'
import { Component4 } from '../componets/Component4';
import { Component5 } from '../componets/Component5';

const AppContainers = () => {
    return (
        <div>
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
            <Component5/>
        </div>
    );
};

export default AppContainers;