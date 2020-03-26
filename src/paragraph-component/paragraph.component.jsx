import React from 'react';
import './paragraph.component.scss';

export default class ParagraphComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.inputContent !== this.props.inputContent) {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.timeout = setTimeout(() => this.render(), 1000);
        }
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
    askToSelectDifficulty() {
        return (
            <h1>Please select the difficulty level</h1>
        )
    }

    getPreviousParaCount(index) {
        let count = 0;
        for (let i = 0; i < index; i++) {
            count += this.props.para[i].length;
        }
        return count;
    }

    returnGreyClassNameIfCharIsEntered(letterIndex, index) {
        let count = 0;
        let inputCount = this.props.inputContent && this.props.inputContent.split('').length || 0;
        switch (index) {
            case 0 : count = letterIndex; break;
            default: count = this.getPreviousParaCount(index) + letterIndex;
        }
        if (count <= inputCount - 1) {
            return 'grey-letter';
        }
        return null;
    }

    showText() {
        return (
            <div>
                {
                    this.props.para.map((paragraph, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    {
                                        paragraph.map((letter, letterIndex) => {
                                            const newIndex = `${index}${letterIndex}`;
                                            const greyClass = this.returnGreyClassNameIfCharIsEntered( letterIndex, index);
                                            return (
                                                <span key={newIndex} className={greyClass}>{letter}</span>
                                            )
                                        })
                                    }
                                </div>
                                <br /><br/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    render() {
        return (
            <div>
              {
                  this.props.para && this.props.para.length ? this.showText() : this.askToSelectDifficulty()
              }
            </div>
        );
    }
}