import React from 'react';
import TextField from '@material-ui/core/TextField';

class Temp extends React.Component {
    state = {
    name: 'Cat in the Hat',
    }

change = e => {
    this.setState({
        name: e.target.value,
        });
}

    handleChange = event => {
        this.change(event);
    };

    render() {
        return (
            <>
            <TextField
            data-test="component-text"
            id="outlined-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            />
            <div>
            {this.state.name}
            </div>
            </>
            )
            }
            }

export default Temp;