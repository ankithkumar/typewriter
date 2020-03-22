import React from 'react';
import './input-component.scss';

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-box" contentEditable="true">
            </div>
        );
    }
}