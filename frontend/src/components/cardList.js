import React from 'react';
import Card from './card'
import PageButton from './pageButton'
import '../styles/card.css';

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

    async componentDidMount() {
        const response  = await fetch('http://localhost:8001/api/all-property-details');
        const responseData = await response.json();
        const propertyInfo = responseData.data.map(item =>{
            return{
                id: item.id,
                Name: item.name,
                Address: item.address,
                Facilities: 'Bedroom: '+item.number_bedroom + '. Bathroom: '+item.number_bathroom,
                Price: item.price
            }
        });
        this.setState({ len: propertyInfo.length, pages: Math.ceil(propertyInfo.length / 6), currentPage: 1, propertyInfo: propertyInfo });
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="row-card">
                    {this.state.propertyInfo.slice((this.state.currentPage - 1) * 6, Math.min((this.state.currentPage - 1) * 6 + 6, this.state.len)).map(item => (
                        <div className="column-card" key={item.id}>
                            <Card key={item.id} id={item.id} name={item.Name} Address={item.Address} Facilities={item.Facilities} price={item.Price}></Card>
                            <br></br>
                        </div>
                    ))}
                </div>

                <div align="center" className='center'>
                    {this.state.pages && <PageButton pages={this.state.pages} currentPage={this.state.currentPage} handler={this.handler}></PageButton>}
                </div>
                <br></br>
            </div>
        )
    }
}
export default CardList