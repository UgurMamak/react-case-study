import {Button, Card} from "react-bootstrap";
import {BsArrowDownShort, BsArrowUpShort, BsXCircle} from "react-icons/bs";
import React from 'react';

const PrimaryCard = ({item, deleteCardConfirm, increasePoints, receivedData, decreasePoints}) => {
    return (
        <Card className="primary-card">
            <Card.Header>
                <div className="card-info">
                    <span className="number">{item.points}</span>
                    <span className="text">POINTS</span>
                    <span className="updated-item">Updated Date: {item.updated}</span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {item.name}
                    <Button onClick={() => {
                        deleteCardConfirm(item);
                    }}
                            className="delete-btn"><BsXCircle/></Button>
                </Card.Title>
                <div className="short-info">(https://news.ycombinator.com)</div>
                <Card.Footer>
                    <Button onClick={() => {
                        increasePoints(item);
                        receivedData();
                    }}
                            variant="primary"><BsArrowUpShort/> Up vote</Button>
                    <Button onClick={() => {
                        decreasePoints(item);
                        receivedData();
                    }}
                            variant="primary"><BsArrowDownShort/> Down Vote</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default PrimaryCard;