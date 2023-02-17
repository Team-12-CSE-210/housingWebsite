import React from 'react';
import Card from './card'
import PageButton from './pageButton'
import '../styles/card.css';
import { useMemo, useEffect } from "react";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { len: 0, pages: 0, currentPage: 1, propertyInfo: [] }
        this.handler = this.handler.bind(this)
    }
    handler(value) {
        this.setState({
            currentPage: value
        })
    }

    componentDidMount() {
        var propertyInfo = [
            {
                id: 1,
                Name: 'prop1',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            },
            {
                id: 2,
                Name: 'prop2',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            },
            {
                id: 3,
                Name: 'prop3',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            },
            {
                id: 4,
                Name: 'prop4',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            },
            {
                id: 5,
                Name: 'prop5',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            },
            {
                id: 6,
                Name: 'prop6',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            }, {
                id: 7,
                Name: 'prop7',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            },
            {
                id: 8,
                Name: 'prop8',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            },
            {
                id: 9,
                Name: 'prop9',
                Address: 'address1',
                Facilities: 'Bathrooom bedroom'
            }
        ];
        this.setState({ len: propertyInfo.length, pages: Math.ceil(propertyInfo.length / 6), currentPage: 1, propertyInfo: propertyInfo });
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="row">
                    {this.state.propertyInfo.slice((this.state.currentPage - 1) * 6, Math.min((this.state.currentPage - 1) * 6 + 6, this.state.len)).map(item => (
                        <div className="column" key={item.id}>
                            <Card key={item.id} name={item.Name} Address={item.Address} Facilities={item.Facilities}></Card>
                            <br></br>
                        </div>
                    ))}
                </div>
                <br></br>
                <br></br>
                <div className="pageButton">
                    {this.state.pages && <PageButton pages={this.state.pages} currentPage={this.state.currentPage} handler={this.handler}></PageButton>}
                </div>
            </div>
        )
    }
}
export default CardList