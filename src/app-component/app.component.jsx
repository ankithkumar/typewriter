import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ParagraphComponent from './../paragraph-component/paragraph.component.jsx'
import DifficultyComponent from './../difficulty-component/difficulty.component.jsx'
import InputComponent from './../input-component/input.component.jsx'
import './app.component.scss';
export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: {
                EASY: 'easy',
                MEDIUM: 'medium',
                HARD: 'hard'
            },
            levelSelected: null,
            inputPara: null,
            contentSelected: null,
        }
        this.handleDifficultySelection = this.handleDifficultySelection.bind(this);
        this.updateTextCount = this.updateTextCount.bind(this);
    }

    giveMeRandomNumber(range) {
        return parseInt(((Math.random(999 * 9999) * 9999) % range));
    }

    decideTheMinValueBasedOnLevel() {
        let min = 0;
        const level = this.state.levelSelected;
        switch(level) {
            case this.state.level.EASY: min = 3; break;
            case this.state.level.MEDIUM: min = 6; break;
            case this.state.level.HARD: min = 9; break;
        }
        let tries = 0;
        for(tries = 0; tries < min * 10; tries++) {
            let randomNumber = this.giveMeRandomNumber(min * 2);
            if (randomNumber >= min) {
                return randomNumber;
            }
        }
        return 3;
    }

    fetchSentenceBasedOnDifficulty() {
        const paragraphValue = this.decideTheMinValueBasedOnLevel();
        console.log('para value ', paragraphValue);
        fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphValue}`)
            .then(response => response.json())
            .then(para => {
                if (para && para.length) {
                    para = para.map(paragraph => paragraph.split(''));
                    this.setState({
                        inputPara: para
                    })
                }
            });
    }

    handleDifficultySelection(level) {
        console.log('level selection is ', level);
        this.setState({levelSelected: level}, () => {
            this.fetchSentenceBasedOnDifficulty();
        })
    }

    updateTextCount(content) {
        console.log('content is ', content);
        this.setState({contentSelected: content});
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" className="container">
                    <div className="paragraph-container">
                        <ParagraphComponent para={this.state.inputPara} inputContent={this.state.contentSelected}/>
                    </div>
                    <div className="addLineGap"></div>
                    <div className="input-container">
                        <InputComponent handleTextChange={this.updateTextCount}/>
                    </div>
                    <div className="difficulty-options">
                        <DifficultyComponent level={this.state.level} difficultySelected={this.handleDifficultySelection}/>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}