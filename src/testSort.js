const sortByDistance = require('sort-by-distance');

const points = [ 
    // The Hoss 
    { x: -111.8932018 , y:40.7335657 },
    // The Cure
    { x: -111.8911626 , y:40.753798 },
    // La Tula 
    { x: -111.8924901, y:40.7560063 }
]
// Starting point Grand America Hotel
const origin = {x:-111.9033339 ,y:40.7557073 }

console.log(sortByDistance(origin, points))

// [ { x: -111.8924901,
// y: 40.7560063,
// distance: 0.010847921434084936 },
// { x: -111.8911626, y: 40.753798, distance: 0.012320144892821483 },
// { x: -111.8932018,
// y: 40.7335657,
// distance: 0.024349741291644914 } ]

// Sort by distance return an array of objects. 
// We could use the index of the array to return dishes in a specific order
// 
//
// 