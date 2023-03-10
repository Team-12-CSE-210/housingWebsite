import React from "react";
import '../styles/ListingPage.css';
import FormData from 'form-data';
import axios from 'axios'

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            propertyName: "",
            description: "",
            availabilityDate: new Date().toISOString().slice(0, 10),
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
            hasKitchen: false,
            allowsPets: false,
            hasParking: false,
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
    
    async handleSubmit(event) {
        event.preventDefault();

        const resId = await fetch("http://localhost:8001/api/get-next-id");
        const resIdData = await resId.json();
        const id = resIdData.id;

        let resList = await fetch("http://localhost:8001/api/addListing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: this.state.propertyName,
                address: this.state.address,
                price: this.state.price,
                number_bedroom: this.state.bedrooms,
                number_bathroom: this.state.bathrooms,
                sqr_ft: this.state.sqft,
                available_date: this.state.availabilityDate,
                description: this.state.description,
                latitude: 0,
                longitude: 0,
                kitchen: this.state.hasKitchen,
                gym: this.state.hasGym,
                pool: this.state.hasPool,
                laundry: this.state.hasLaundry,
                furnished: this.state.hasFurnishings,
                pets: this.state.allowsPets,
                AC: this.state.hasAC,
                parking: this.state.hasParking,
                property_type: this.state.propertyType,
                landlord_name: this.state.landlordName,
                landlord_email: this.state.email,
                landlord_phone_number: this.state.phone,
            }),
        });

        const form = new FormData();
        for (let img of this.state.files) {
            form.append("file", img);
        }
        form.append("propertyID", id);
        
        let resImg = await axios({
            method: "post",
            url: "http://localhost:8001/api/upload_property_image",
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
        })
        
        Promise.all([resList, resImg]).then(() => {
            console.log("done");
        });
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="column">
                        <p>
                            <label>Property Name</label>
                            <input name="propertyName" type="text" value={this.state.propertyName} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <label>Attach images</label>
                            <input type="file" id="img" name="propertyImages" accept="image/*" multiple onChange={this.handleFiles} required/>

                        </p>
                        <p>
                            <label>Description</label>
                            <textarea name="description" rows="8" value={this.state.description} onChange={this.handleChange} required/>
                        </p>
                    </div>
                    <div class="column">
                        <p>
                            <label>Address</label>
                            <input name="address" type="text" value={this.state.address} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <label for="price">Price (USD)</label>
                            <input name="price" type="number" value={this.state.price} onChange={this.handleChange} required/>
                            <label for="sqft">sqft</label>
                            <input name="sqft" type="number" value={this.state.sqft} onChange={this.handleChange} required/>
                            <label for="bdba">bd/ba</label>
                            <input name="bedrooms" type="number" value={this.state.bedrooms} onChange={this.handleChange} required/>
                            <input name="bathrooms" type="number" value={this.state.bathrooms} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <label>Property Type</label>
                            <select name="propertyType" value={this.state.propertyType} onChange={this.handleChange} required>
                                <option value="apartment">Apartment</option>
                                <option value="condo">Condo</option>
                                <option value="house">House</option>
                                <option value="townhouse">Townhouse</option>
                            </select>
                        </p>
                        <p>
                            <label>Availability Date</label>
                            <input name="availabilityDate" type="date" value={this.state.availabilityDate} onChange={this.handleChange} required/>
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
                    <div class="amenity">
                        <label for="checkbox">Kitchen</label>
                        <input
                            name="hasKitchen"
                            type="checkbox"
                            checked={this.state.hasKitchen}
                            onChange={this.handleChange}/>
                    </div>
                    <div class="amenity">
                        <label for="checkbox">Pets</label>
                        <input
                            name="allowsPets"
                            type="checkbox"
                            checked={this.state.allowsPets}
                            onChange={this.handleChange}/>
                    </div>
                </div>
                <p>
                    <div class="row">
                        <div class="landlordcolumn left">
                            <label>Your Name</label>
                            <input name="landlordName" type="text" value={this.state.landlordName} onChange={this.handleChange} required/>
                        </div>
                        <div class="landlordcolumn mid">
                            <label>Phone</label>
                            <input name="phone" type="tel" value={this.state.phone} onChange={this.handleChange} required/>
                        </div>
                        <div class="landlordcolumn right">
                            <label>Email</label>
                            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
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