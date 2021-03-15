export const foodItems = [

    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizzas'
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizzas'
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizzas'
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizzas'

    },
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section: 'Sandwiches'
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwiches'
    },
    {
        name: 'Shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwiches'
    },
    {
        name: 'Fries',
        img: '/img/fries.jpeg',
        section: 'Sides'
    }



];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {})
