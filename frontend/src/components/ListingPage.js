import React from "react";
import '../styles/ListingPage.css';
class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            propertyName: "",
            propertyImages: [],
            description: "",
            availabilityDate: new Date().toLocaleDateString('en-CA'),
            address: "",
            price: 0,
            sqft: 0,
            bedrooms: 0,
            bathrooms: 0,
            propertyType: "",
            hasGym: false,
            hasPool: false,
            hasLaundry: false,
            hasFurnishings: false,
            hasAC: false,
            landlordName: "",
            phone: "",
            email: "",
            files: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFiles = this.handleFiles.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleFiles(event) {
        this.setState({
            files: [...this.state.files, ...event.target.files]
        })
    }
    
    handleSubmit(event) {
        alert(`TODO: submit to backend - ${this.state.propertyName} ${this.state.description}
        ${this.state.availabilityDate} ${this.state.address} ${this.state.price}
        ${this.state.sqft} ${this.state.bedrooms} ${this.state.bathrooms}
        ${this.state.propertyType} ${this.state.hasGym} ${this.state.hasPool}
        ${this.state.hasLaundry} ${this.state.hasFurnishings} ${this.state.hasAC}
        ${this.state.files}\n
        and check if required fields are filled`);
        event.preventDefault();
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="column">
                        <p>
                            <label>Property Name</label>
                            <input name="propertyName" type="text" value={this.state.propertyName} onChange={this.handleChange}/>
                        </p>
                        <p>
                            <label>Attach images</label>
                            <input type="file" id="img" name="propertyImages" accept="image/*" multiple onChange={this.handleFiles}/>

                        </p>
                        <p>
                            <label>Description</label>
                            <textarea name="description" rows="8" value={this.state.description} onChange={this.handleChange}/>
                        </p>
                    </div>
                    <div class="column">
                        <p>
                            <label>Address</label>
                            <input name="address" type="text" value={this.state.address} onChange={this.handleChange}/>
                        </p>
                        <p>
                            <label for="price">Price (USD)</label>
                            <input name="price" type="number" value={this.state.price} onChange={this.handleChange}/>
                            <label for="sqft">sqft</label>
                            <input name="sqft" type="number" value={this.state.sqft} onChange={this.handleChange}/>
                            <label for="bdba">bd/ba</label>
                            <input name="bedrooms" type="number" value={this.state.bedrooms} onChange={this.handleChange}/>
                            <input name="bathrooms" type="number" value={this.state.bathrooms} onChange={this.handleChange}/>
                        </p>
                        <p>
                            <label>Property Type</label>
                            <select name="propertyType" value={this.state.propertyType} onChange={this.handleChange}>
                                <option value="apartment">Apartment</option>
                                <option value="condo">Condo</option>
                                <option value="house">House</option>
                                <option value="townhouse">Townhouse</option>
                            </select>
                        </p>
                        <p>
                            <label>Availability Date</label>
                            <input name="availabilityDate" type="date" value={this.state.availabilityDate} onChange={this.handleChange}/>
                        </p>
                    </div>
                </div>
                <div class="amenities">
                    <div class="amenity">
                        <label for="checkbox">Amenities</label>
                    </div>
                    <div class="amenity">
                        <label for="checkbox">Gym</label>
                        <input
                            name="hasGym"
                            type="checkbox"
                            checked={this.state.hasGym}
                            onChange={this.handleChange}/>
                    </div>
                    <div class="amenity">
                        <label for="checkbox">Pool</label>
                        <input
                            name="hasPool"
                            type="checkbox"
                            checked={this.state.hasPool}
                            onChange={this.handleChange}/>
                    </div>
                    <div class="amenity">
                        <label for="checkbox">Laundry</label>
                        <input
                            name="hasLaundry"
                            type="checkbox"
                            checked={this.state.hasLaundry}
                            onChange={this.handleChange}/>
                    </div>
                    <div class="amenity">
                        <label for="checkbox">Furnished</label>
                        <input
                            name="hasFurnishings"
                            type="checkbox"
                            checked={this.state.hasFurnishings}
                            onChange={this.handleChange}/>
                    </div>
                    <div class="amenity">
                        <label for="checkbox">AC</label>
                        <input
                            name="hasAC"
                            type="checkbox"
                            checked={this.state.hasAC}
                            onChange={this.handleChange}/>
                    </div>
                </div>
                <p>
                    <div class="row">
                        <div class="landlordcolumn left">
                            <label>Your Name</label>
                            <input name="landlord" type="text" value={this.state.landlordName} onChange={this.handleChange}/>
                        </div>
                        <div class="landlordcolumn mid">
                            <label>Phone</label>
                            <input name="landlord" type="tel" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div class="landlordcolumn right">
                            <label>Email</label>
                            <input name="landlord" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                    </div>
                </p>
                <div class="submit">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}
export default ListingPage