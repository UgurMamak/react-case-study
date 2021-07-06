import React from 'react'
import {Form, Button, Toast} from "react-bootstrap"
import {Link} from "react-router-dom"
import {Component} from 'react';
import {getDateNow} from "../helpers/getDate";

class AddPage extends Component {

    state = {
        validated: false,
        linkName: '',
        linkUrl: '',
        showToast: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("burda");
            this.setState({validated: true});
        } else {
            let data = JSON.parse(localStorage.getItem('data')).sort(function (a, b) {
                return new Date(a.id) - new Date(b.id);
            });
            let lastId = data[data.length - 1].id;
            console.log(data[data.length - 1]);
            console.log("lastId", lastId);
            data.push({
                id: lastId + 1,
                points: 0,
                name: this.state.linkName,
                webSite: this.state.linkUrl,
                //created: new Date().toLocaleString()
                created: getDateNow(new Date()),
                updated: getDateNow(new Date())
            });
            localStorage.setItem('data', JSON.stringify(data));

            this.setState({
                linkName: '',
                linkUrl: '',
                showToast: true
            });
        }
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        console.log("ADD REnder");
        return (
            <div>
                <Link to="/">Return to List</Link>
                <h4>Add New Link</h4>
                <Form noValidate onSubmit={this.handleSubmit} validated={this.state.validated}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Link Name:</Form.Label>
                        <Form.Control name="linkName" value={this.state.linkName} required onChange={this.handleChange}
                                      type="text"
                                      placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Link URL:</Form.Label>
                        <Form.Control name="linkUrl" value={this.state.linkUrl} onChange={this.handleChange} required
                                      type="text"
                                      placeholder="Password"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        ADD
                    </Button>
                </Form>

                <Toast className="d-inline-block m-1 bg-success primary-toast"
                       onClose={() => this.setState({showToast: false})}
                       show={this.state.showToast} delay={2000}
                       autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                        <strong className="me-auto">Bootstrap</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Added
                    </Toast.Body>
                </Toast>

            </div>
        );
    }
}

export default AddPage;