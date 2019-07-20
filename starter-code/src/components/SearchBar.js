import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        value: '',
        student: true,
        teacher: true,
        campus: ''
    }

    searchByLastName = async e => {
        await this.setState({
            value: e.target.value
        });
        this.props.search(this.state.value, this.state.student, this.state.teacher, this.state.campus)
    }

    handleCheck = async e => {
        await this.setState({
            [e.target.name]: !this.state[e.target.name]
        });
        this.props.search(this.state.value, this.state.student, this.state.teacher, this.state.campus)
    }

    campusCheck = async e => {
        await this.setState({
            [e.target.name]: !this.state[e.target.name]
        });
    }

    handleCampus = async e => {
        let camp = e.target.selectedOptions[0].value;
        await this.setState({
            campus: camp
        });
        this.props.search(this.state.value, this.state.student, this.state.teacher, this.state.campus)
    }

    render() {
        let options = this.props.campus.map(x=>{
            return (
                <option key={x}>
                    {x}
                </option>
            )
        })
        return (
            <React.Fragment>
                <input onChange={e=>this.searchByLastName(e)} type="search" value={this.state.value}/><br />
                <input onChange={e=>this.handleCheck(e)} name="student" type="checkbox" value={this.props.sudent} defaultChecked />Student
                <input onChange={e=>this.handleCheck(e)} name="teacher" type="checkbox" defaultChecked />Teacher
                <select onChange={e=>this.handleCampus(e)} name="campus">
                    {options}
                </select>
            </React.Fragment>
        )
    }
}
