import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default class Feature extends React.Component{
    constructor(props) {
        super(props);
        this.addFeature = this.addFeature.bind(this);
        this.removeFeature = this.removeFeature.bind(this);
        this.state = {
            localFeatures: [...this.props.features]
        }
    }

    render() {
        return (
            <div>
                <Paper style={{margin: '10px'}}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.localFeatures.map(feature => (
                                <TableRow key={feature.id}>
                                    <TableCell align="center">{feature.id}</TableCell>
                                    <TableCell align="center">{feature.name}</TableCell>
                                    <TableCell align="center">{feature.detail}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Button variant="contained" color="primary" style={{margin: '5px'}} onClick={this.addFeature}>
                    Add Feature
                </Button>
                <Button variant="contained" style={{margin: '5px'}} onClick={this.removeFeature}>
                    Remove Feature
                </Button>
            </div>

        );
    }

    addFeature() {
        const ids = this.state.localFeatures.map(item => item.id);
        const maxId = Math.max.apply(Math, [...ids, 0]);
        const nextId = maxId + 1;
        this.setState({
            localFeatures: [...this.state.localFeatures, {
                id: nextId,
                name: 'feature ' + nextId,
                detail: 'feature ' + nextId + ' detail'
            }]
        });
    }

    removeFeature() {
        const ids = this.state.localFeatures.map(item => item.id);
        const maxId = Math.max.apply(Math, ids);
        this.setState({
            localFeatures: [...this.state.localFeatures].filter(item => item.id !== maxId)
        });
    }
}
