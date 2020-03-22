import React from 'react';

export default class ParagraphComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    askToSelectDifficulty() {
        return (
            <h1>Please select the difficulty level</h1>
        )
    }

    showText() {
        return (
            <div>
                {
                    this.props.para.map((paragraph, index) => {
                        return (
                            <div key={index}>
                                <div>{paragraph}</div>
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