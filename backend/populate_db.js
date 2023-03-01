const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

bedrooms = [];
var dir = fs.opendirSync('./dummy_data/images/bedroom/');
let dirent;
while ((dirent = dir.readSync()) !== null) {
  bedrooms.push('./dummy_data/images/bedroom/' + dirent.name);
}
dir.closeSync();

living_room = [];
dir = fs.opendirSync('./dummy_data/images/living_room/');
while ((dirent = dir.readSync()) !== null) {
    living_room.push('./dummy_data/images/living_room/' + dirent.name);
}
dir.closeSync();



house = [];
dir = fs.opendirSync('./dummy_data/images/house/');
while ((dirent = dir.readSync()) !== null) {
    house.push('./dummy_data/images/house/' + dirent.name);
}
dir.closeSync();

kitchen = [];
dir = fs.opendirSync('./dummy_data/images/kitchen/');
while ((dirent = dir.readSync()) !== null) {
    kitchen.push('./dummy_data/images/kitchen/' + dirent.name);
}
dir.closeSync();

bathroom = [];
dir = fs.opendirSync('./dummy_data/images/bathroom/');
while ((dirent = dir.readSync()) !== null) {
    bathroom.push('./dummy_data/images/bathroom/' + dirent.name);
}
dir.closeSync();

for (let i = 1; i<101; i++) {
    const form = new FormData();
    form.append("file", fs.createReadStream(house[i]));
    form.append("file", fs.createReadStream(bedrooms[i]));
    form.append("file", fs.createReadStream(living_room[i]));
    form.append("file", fs.createReadStream(kitchen[i]));
    form.append("file", fs.createReadStream(bathroom[i]));
    form.append("propertyID", i);
    axios({
        method: "post",
        url: "http://localhost:8001/api/upload_property_image",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .catch(function (response) {
        console.log(response);
        });
}

axios({
    method: "post",
    url: "http://localhost:8001/api/populate_listing",
})
    .catch(function (response) {
    console.log(response);
    });


axios({
        method: "post",
        url: "http://localhost:8001/api/populate_user",
    })
        .catch(function (response) {
        console.log(response);
        });