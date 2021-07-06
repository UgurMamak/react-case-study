import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles/cards.scss'
import {Container, Modal, Button, Toast, Row, Col} from "react-bootstrap";
import AddPage from './pages/AddPage';
import ListPage from './pages/ListPage';
import {getDateNow} from "./helpers/getDate"
import {getDummyData, setDummyData} from "./helpers/dummyData";

export default class App extends Component {

    state = {
        data: getDummyData() ? getDummyData().sort(function (a, b) {
            return new Date(b.created) - new Date(a.created);
        }) : [],
        showModal: false,
        showToast: false,
        cardData: {}
    }

    componentDidMount() {
        if (getDummyData() === null || getDummyData().length == 0) {
            setDummyData([
                {
                    id: 1,
                    points: 6,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '07.02.2021 17:50:23',
                    updated: '07.02.2021 17:50:23',
                }, {
                    id: 2,
                    points: 5,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '07.02.2021 18:50:23',
                    updated: '07.02.2021 18:50:23'
                }, {
                    id: 3,
                    points: 3,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '06.02.2021 17:50:23',
                    updated: '06.02.2021 17:50:23'
                },
                {
                    id: 4,
                    points: 10,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '06.02.2021 17:50:23',
                    updated: '06.02.2021 17:50:23',
                }, {
                    id: 5,
                    points: 13,
                    name: 'Hacker News4',
                    webSite: "https://www.youtube.com/",
                    created: '05.05.2021 17:50:23',
                    updated: '05.05.2021 17:50:23',
                }, {
                    id: 6,
                    points: 13,
                    name: 'Hacker News2',
                    webSite: "https://www.youtube.com/",
                    created: '03.02.2021 17:50:23',
                    updated: '03.02.2021 17:50:23'
                }, {
                    id: 7,
                    points: 10,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '02.02.2021 17:50:23',
                    updated: '02.02.2021 17:50:23'
                }, {
                    id: 8,
                    points: 9,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '07.04.2021 17:50:23',
                    updated: '07.04.2021 17:50:23'
                }, {
                    id: 9,
                    points: 1,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '06.20.2021 17:50:23',
                    updated: '06.20.2021 17:50:23'
                }, {
                    id: 10,
                    points: 20,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '05.13.2021 17:50:23',
                    updated: '05.13.2021 17:50:23'
                }, {
                    id: 11,
                    points: 3,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '04.06.2021 17:50:23',
                    updated: '04.06.2021 17:50:23'
                }, {
                    id: 12,
                    points: 4,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '07.04.2021 20:50:23',
                    updated: '07.04.2021 20:50:23'
                }, {
                    id: 13,
                    points: 14,
                    name: 'Hacker News',
                    webSite: "https://www.youtube.com/",
                    created: '07.03.2021 17:50:23',
                    updated: '07.03.2021 17:50:23'
                }, {
                    id: 14,
                    points: 13,
                    name: 'Hacker News3',
                    webSite: "https://www.youtube.com/",
                    created: '06.26.2021 17:50:23',
                    updated: '06.26.2021 17:50:23'
                },
                {
                    id: 13,
                    points: 13,
                    name: 'Hacker News5',
                    webSite: "https://www.youtube.com/",
                    created: '07.03.2021 17:50:23',
                    updated: '07.03.2021 17:50:23'
                }
            ]);
            this.setState({
                data: getDummyData()
            });
        }
    }

    deleteCardConfirm = (cardData) => {
        this.setState({
            ...this.state,
            cardData: cardData,
            showModal: true
        });
    }

    deleteCard = async () => {
        let filterData = this.state.data.filter(x => x.id != this.state.cardData.id);
        setDummyData(filterData);
        await this.setState({
            data: filterData,
            showToast: true,
            showModal: false
        });
    }

    increasePoints = async (cardData) => {
        cardData.points += 1;
        cardData.updated = getDateNow(new Date());
        this.state.data.splice(this.state.data.findIndex(x => x.id == cardData.id), 1, cardData);
        setDummyData(this.state.data);
        /* this.setState({
             cardData
         });*/
        /*const updated = getDateNow(new Date());
        const newData = this.state.data;
        newData.forEach((item, index) => {
            if (item.id == cardData.id) {
                item.points += 1;
                item.updated = updated;
            }
        });
        localStorage.setItem('data', JSON.stringify(newData));
        await this.setState({
            cardData,
            data: newData
        });*/
    }

    decreasePoints = async (cardData) => {
        cardData.points -= 1;
        cardData.updated = getDateNow(new Date());
        this.state.data.splice(this.state.data.findIndex(x => x.id == cardData.id), 1, cardData);
        setDummyData(this.state.data);
        /*this.setState({
            cardData
        });*/
    }

    closeModal = () => {
        this.setState({showModal: false});
    }

    selectChange = async (sortData) => {
        await this.setState({
            data: sortData
        });
    }

    render() {
        return (
            <>
                <Container> <Router>
                    <Switch>
                        <Route exact path="/">
                            <ListPage data={this.state.data}
                                      selectChange={this.selectChange}
                                      deleteCardConfirm={this.deleteCardConfirm}
                                      increasePoints={this.increasePoints}
                                      decreasePoints={this.decreasePoints}/>
                        </Route>
                        <Route path="/add">
                            <AddPage/>
                        </Route>
                    </Switch>
                </Router></Container>
                <Modal show={this.state.showModal}
                       onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.deleteCard}>
                            OK
                        </Button>
                        <Button variant="secondary" onClick={this.closeModal}>
                            CANCEL
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Toast className="d-inline-block m-1 bg-success primary-toast"
                       onClose={() => this.setState({showToast: false})}
                       show={this.state.showToast} delay={2000}
                       autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                        <strong className="me-auto">Bootstrap</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {this.state.cardData.name} removed
                    </Toast.Body>
                </Toast>
            </>
        );
    }
}

