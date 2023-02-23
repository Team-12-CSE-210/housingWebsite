const express = require('express');
const router = express.Router();


router.get('/property-details', async (req, res) => {
    try {
      const result = [
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
        res.status(200).send(result);
    }
    catch (err) {
      res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
    }
  });

  module.exports = router;