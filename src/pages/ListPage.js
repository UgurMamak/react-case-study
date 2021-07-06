import React, {Component} from 'react'
import {Card, Button, Form, Row, Col} from "react-bootstrap";
import {BsArrowDownShort, BsArrowUpShort, BsPlus, BsXCircle} from "react-icons/bs";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import PrimaryCard from "../components/PrimaryCard";

export default class ListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageItem: [],
            currentPage: 0,
            pageItemCount: 5,
            cardData: '',
            offset: 0,
            data: [],
            perPage: 5,
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data.length != this.props.data.length) {
            this.receivedData();
        }
    }

    receivedData = () => {
        const slice = this.props.data.slice(this.state.offset, this.state.offset + this.state.perPage);
        const cardData = slice.map((item, index) => (
            <PrimaryCard key={index}
                         item={item}
                         increasePoints={this.props.increasePoints}
                         decreasePoints={this.props.decreasePoints}
                         receivedData={this.receivedData}
                         deleteCardConfirm={this.props.deleteCardConfirm}/>
        ));
        this.setState({
            pageCount: Math.ceil(this.props.data.length / this.state.pageItemCount),
            pageItem: slice,
            cardData
        });
    }

    componentDidMount() {
        this.receivedData();
    }

    selectChange = (e) => {
        let sortData;
        if (e.target.value == "") return;
        else {
            if (e.target.value == "Most") {
                /* sortData = this.props.data.sort(function (a, b) {
                     return new Date(b.points) - new Date(a.points);
                 });*/
                sortData = this.props.data.sort(function (a, b) {
                    return b.points === a.points ? new Date(b.updated) - new Date(a.updated) : new Date(b.points) - new Date(a.points);
                });
            } else if (e.target.value == "Less") {
                /*sortData = this.props.data.sort(function (a, b) {
                    return new Date(a.points) - new Date(b.points);
                });*/
                sortData = this.props.data.sort(function (a, b) {
                    return b.points === a.points ? new Date(b.updated) - new Date(a.updated) : new Date(a.points) - new Date(b.points);
                });
            }
            this.props.selectChange(sortData);
            this.receivedData();
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Disabled select menu</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={e => {
                                this.selectChange(e)
                            }}>
                            <option value="">Order By</option>
                            <option value="Most">Most Voted</option>
                            <option value="Less">Less Voted</option>
                        </Form.Control>
                    </Form.Group>
                    <Card className="primary-card">
                        <Card.Header>
                            <Link to="/add" className="deneme">
                                <BsPlus/>
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>SUBMIT A LINK</Card.Title>
                        </Card.Body>
                    </Card>

                    {this.state.cardData}

                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                    {/*  <Card className="primary-card">
                    <Card.Header>
                        <Link to="/add" className="deneme">
                            <BsPlus/>
                        </Link>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>SUBMIT A LINK</Card.Title>
                    </Card.Body>
                </Card>
                {
                    this.state.pageItem.map((item, index) => (
                        <Card key={index} className="primary-card">
                            <Card.Header>
                                <div className="card-info">
                                    <span>{item.id}</span>
                                    <span className="number">{item.points}</span>
                                    <span className="text">POINTS</span>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Hacker News
                                    <Button onClick={() => this.props.deleteCardConfirm(item)}
                                            className="delete-btn"><BsXCircle/></Button>
                                </Card.Title>
                                <div className="short-info">(https://news.ycombinator.com)</div>
                                <Card.Footer>
                                    <Button onClick={() => this.props.increasePoints(item)}
                                            variant="primary"><BsArrowUpShort/> Up vote</Button>
                                    <Button onClick={() => this.props.decreasePoints(item)}
                                            variant="primary"><BsArrowDownShort/> Down Vote</Button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    ))
                }
                <Paginition
                    allData={this.props.data}//tüm data
                    pageItemCount={this.state.pageItemCount}//sayfada olacak item sayısı
                    onChangePage={this.onChangePage}//fonk.
                />*/}
                </Col>
                <Col>
                    {this.props.data.map((item, index) => (
                        <Card key={index} className="primary-card">
                            <Card.Header>
                                <div className="card-info">
                                    <span>{item.id}</span>
                                    <span className="number">{item.points}</span>
                                    <span className="text">POINTS</span>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Hacker News
                                    <Button onClick={() => this.props.deleteCardConfirm(item)}
                                            className="delete-btn"><BsXCircle/></Button>
                                </Card.Title>
                                <div className="short-info">(https://news.ycombinator.com)</div>
                                <Card.Footer>
                                    <Button onClick={() => this.props.increasePoints(item)}
                                            variant="primary"><BsArrowUpShort/> Up vote</Button>
                                    <Button onClick={() => this.props.decreasePoints(item)}
                                            variant="primary"><BsArrowDownShort/> Down Vote</Button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        )
    }
}