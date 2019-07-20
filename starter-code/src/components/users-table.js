import React, { Component } from 'react';
import usersList from '../users.json';
import SearchBar from './SearchBar'

export default class UsersTable extends Component {
    state = {
        users: usersList
    }
    searchByLastName = (value, student, teacher, campus) => {
        this.setState({
            users: usersList.filter(x => {
                if(x.campus===campus || !campus) {
                    if(student&&x.role==="student")
                        return x.lastName.toLowerCase().includes(value.toLowerCase())
                    if(teacher&&x.role==="teacher")
                        return x.lastName.toLowerCase().includes(value.toLowerCase())
                }
            })
        });
        console.log(this.state)
    }

    render() {
        return (
        <React.Fragment>
            <SearchBar campus={[...new Set(usersList.map(x => x.campus))]} search={this.searchByLastName}/>
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Campus</td>
                        <td>Role</td>
                        <td>Links</td>
                    </tr>
                </thead>
                <tbody>
                {this.state.users.map((x,i) => {
                    return(
                        <tr key={i}>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.campus}</td>
                            <td>{x.role}</td>
                            <td>{x.linkedin ? x.linkedin : null}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </React.Fragment>
        )
    }
}
