import React from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  {
    id: 1,
    name: 'Margherita Pizza',
    image: 'images/pizza.jpg',
    price: '$12.99',
    rating: 4.5,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: 'images/burger.jpg',
    price: '$10.99',
    rating: 4.7,
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    image: 'images/pasta.png',
    price: '$14.99',
    rating: 4.6,
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Parmesan', 'Pepper'],
  },
  
  
];

function MenuPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Our Menu</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center">
             <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4 " />
            <div className="w-2/3">
            <p className="text-gray-600 font-bold">{item.price}</p>
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-yellow-500">⭐ {item.rating}</p>           
              <p className="text-sm text-gray-500">Ingredients: {item.ingredients.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
