import React from 'react';
import './input-component.scss';
import { debounce } from 'lodash';
export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    updateTextCount(evt) {
        const element = evt.target;
        this.props.handleTextChange(element.textContent);
    }

    render() {
        return (
            <div 
                className="input-box" 
                contentEditable="true" 
                onKeyUp={e => this.updateTextCount(e)}>
            </div>
        );
    }
}