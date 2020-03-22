import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default class DifficultyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ButtonGroup variant="contained" color="primary">
                <Button onClick={(e) => this.props.difficultySelected(this.props.level.EASY)}>Easy
                </Button>
                <Button onClick={(e) => this.props.difficultySelected(this.props.level.MEDIUM)}>
                Medium</Button>
                <Button onClick={(e) => this.props.difficultySelected(this.props.level.HARD)}>Hard</Button>
            </ButtonGroup>
        );
    }
}