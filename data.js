const amenities = ['pool', 'spa', 'gym', 'restaurant', 'bar', 'free parking'];

// Generate random hotel names
const hotels = Array.from({length: 10}, (_, i) => ({
  id: i + 1,
  name: Math.random().toString(36).substring(2, 12).toUpperCase() + ' Hotel',
  address: Math.random().toString(36).substring(2, 12).toUpperCase() + ' Street',
  city: Math.random().toString(36).substring(2, 10).toUpperCase() + ' City',
  state: Math.random().toString(36).substring(2, 4).toUpperCase(),
  country: 'USA',
  phone: '555-555-5555',
  email: `hotel${i+1}@example.com`,
  website: `https://www.example.com/hotel${i+1}`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  star_rating: Math.floor(Math.random() * 5) + 1,
  amenities: amenities.slice(0, Math.floor(Math.random() * amenities.length) + 1),
  check_in_time: '3:00 PM',
  check_out_time: '12:00 PM'
}));


const rooms = hotels.flatMap(hotel => Array.from({length: Math.floor(Math.random() * 51) + 50}, (_, i) => ({
    id: (hotel.id - 1) * 100 + i + 1,
    hotel_id: hotel.id,
    room_type: ['Single', 'Double', 'Suite'][Math.floor(Math.random() * 3)],
    bed_type: ['King', 'Queen', 'Twin'][Math.floor(Math.random() * 3)],
    max_occupancy: Math.floor(Math.random() * 4) + 1,
    price_per_night: Math.floor(Math.random() * 251) + 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  })));
console.log(hotels)
console.log(rooms)
  
  
  
  