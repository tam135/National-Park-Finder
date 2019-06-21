import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext';

export default class GreatGrandChild extends Component {
    static contextType = LanguageContext;
    render() {
        const copy = languageSpecificCopy[this.context.lang] || {}
        return (
            <div>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button>
                    Klingon!{' '}
                    {/* yes i know its a vulcan salute but its star wars*/}
                    <span role='img' aria label='klingon'>🖖</span>
                </button>
            </div>
        )
    }
}
