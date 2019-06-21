import React, { Component } from 'react'
import GreatGrandChild from './GreatGrandChild'

export default class GrandChild extends Component {
    render() {
        return (
            <div className = 'GrandChild'>
                <GreatGrandChild />
            </div>
        )
    }
}
