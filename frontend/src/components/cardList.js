import React from 'react';
import Card from './card'
import PageButton from './pageButton'
import '../styles/card.css';
import SearchBarFilters from './SearchBarFilters';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { len: 0, pages: 0, currentPage: 1, propertyInfo: []}
        this.handler = this.handler.bind(this)
        this.child = React.createRef();
    }
    handler(value) {
        this.setState({
            currentPage: value
        })
    }

    searchFilters = async(filter) => {
        let filtereddata = await fetch('http://localhost:8001/api/filtered-property-details', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filter),
        });
    

        const responseData = await filtereddata.json();
        const propertyInfo = responseData.data.map(item => {
            return {
                id: item.id,
                Name: item.name,
                Address: item.address,
                Facilities: 'Bedroom: ' + item.number_bedroom + '. Bathroom: ' + item.number_bathroom,
                Price: item.price
            }
         });
      this.setState({ len: propertyInfo.length, pages: Math.ceil(propertyInfo.length / 6), currentPage: 1, propertyInfo: propertyInfo});

      this.child.current.handleToUpdate(1);

    }

    
    async componentDidMount() {
         const response = await fetch('http://localhost:8001/api/all-property-details');
        const responseData = await response.json();
         const propertyInfo = responseData.data.map(item => {
             return {
                 id: item.id,
                 Name: item.name,
                 Address: item.address,
                 Facilities: 'Bedroom: ' + item.number_bedroom + '. Bathroom: ' + item.number_bathroom,
                 Price: item.price
             }
         });
         this.setState({ len: propertyInfo.length, pages: Math.ceil(propertyInfo.length / 6), currentPage: 1, propertyInfo: propertyInfo });
    }
  
    render() {
        return (
            <>
                <SearchBarFilters searchFilters={this.searchFilters}/>
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
                    <br></br>
                    <br></br>

                </div>
                <div className="wrapper">
                    {this.state.pages && <PageButton ref={this.child} pages={this.state.pages} currentPage={this.state.currentPage} handler={this.handler}></PageButton>}
                </div>
            </>
        )
    }
}
export default CardList