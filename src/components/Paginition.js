import React, {useEffect, useRef, useState} from 'react';
import {forEach} from "react-bootstrap/ElementChildren";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const Paginition = (props) => {
    const [indexData, setIndexData] = useState([]);

    const [pager, setPager] = useState({});

    const [data, setData] = useState(props.allData);

    console.log("DATA=", data);

    useEffect(() => {
        setPage();
    }, [data]);

    function getPage(currentPage = 1) {
        console.log("getPAge");
        var allData = data,
            currentPage = currentPage, //bulunduğu sayfa numarası
            pageCount = Math.ceil(props.allData.length / props.pageItemCount), //toplam sayfa sayısı
            startItem = (currentPage - 1) * props.pageItemCount,
            endItem = props.pageItemCount * currentPage;
        // ;
        return {
            allData,
            currentPage,
            pageCount,
            startItem,
            endItem
        }
    }

    function setPage(count) {
        console.log("setPage");
        var pager = getPage(count);
        if (count) {
            let currentData = pager.allData.slice(pager.startItem, pager.endItem);
            setPager(pager);
            props.onChangePage(currentData);

        } else {
            let currentData = pager.allData.slice(pager.startItem, pager.endItem);
            setPager(pager);
            props.onChangePage(currentData);
        }
    }

    console.log("Paginiton");
    return (
        <ul className="pagination">
            <li className="page-item">
                <div onClick={() => pager.currentPage !== 1 ? setPage(pager.currentPage - 1) : ''}
                     className="page-link">
                    <BsChevronLeft/>
                </div>
            </li>
            {
                Array.from(Array(pager.pageCount), (e, i) => {
                    return <li className={`page-item ${pager.currentPage - 1 === i ? 'active' : ''}`} key={i}>
                        <div className="page-link" onClick={() => setPage(i + 1)} alt="">{i + 1}</div>
                    </li>
                })
            }
            <li className="page-item">
                <div onClick={() => pager.currentPage !== pager.pageCount ? setPage(pager.currentPage + 1) : ''}
                     className="page-link">
                    <BsChevronRight/>
                </div>
            </li>
        </ul>
    );
}

export default Paginition;


/*
import React, {Component} from 'react';

class Paginition extends Component {

    constructor(props) {
        super(props);
        this.state = {pager: {}, indexData: []};
    }

    getPage = (currentPage = 1) => {
        console.log("gert");
        var allData = this.props.allData,
            currentPage = currentPage, //bulunduğu sayfa numarası
            pageCount = Math.ceil(this.props.allData.length / this.props.pageItemCount), //toplam sayfa sayısı
            startItem = (currentPage - 1) * this.props.pageItemCount,
            endItem = this.props.pageItemCount * currentPage;
        // ;
        return {
            allData,
            currentPage,
            pageCount,
            startItem,
            endItem
        }
    }

    setPage = (count) => {
        var pager = this.getPage(count);
        if (count) {
            console.log("var");
            let currentData = pager.allData.slice(pager.startItem, pager.endItem);
            this.setState({
                pager: pager,
                indexData: this.props.allData
            })
            this.props.onChangePage(currentData);

        } else {
            console.log("yok");
            let currentData = pager.allData.slice(pager.startItem, pager.endItem);
            this.setState({
                pager: pager,
                indexData: this.props.allData
            })
            this.props.onChangePage(currentData);
        }
    }

    render() {
        console.log("paginiton REnder");
        return (
            <ul className="pagination">
                <li className="page-item">
                    <div
                        onClick={() => this.state.pager.currentPage !== 1 ? this.setPage(this.state.pager.currentPage - 1) : ''}
                        className="page-link">
                        <BsChevronLeft/>
                    </div>
                </li>
                {
                    Array.from(Array(this.state.pager.pageCount), (e, i) => {
                        return <li className={`page-item ${this.state.pager.currentPage - 1 === i ? 'active' : ''}`}
                                   key={i}>
                            <div className="page-link" onClick={() => this.setPage(i + 1)} alt="">{i + 1}</div>
                        </li>
                    })
                }
                <li className="page-item">
                    <div
                        onClick={() => this.state.pager.currentPage !== this.state.pager.pageCount ? this.setPage(this.state.pager.currentPage + 1) : ''}
                        className="page-link">
                        <BsChevronRight/>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Paginition;*/
