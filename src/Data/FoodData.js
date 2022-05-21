export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const foodItems = [

    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizzas',
        price: 1
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizzas',
        price: 1.5
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizzas',
        price: 2
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizzas',
        price: 2

    },
];

export const Automobili = [
    {
        sifra: 'sifra1', 
        registracija : 'registracija1', 
        godina_proizvodnje : 'godina proizvodnje1',
        model_vozila: 'model vozila1'

    },
    {
        sifra: 'sifra2', 
        registracija : 'registracija2', 
        godina_proizvodnje : 'godina proizvodnje2',
        model_vozila: 'model vozila2'

    },
    {
        sifra: 'sifra3', 
        registracija : 'registracija3', 
        godina_proizvodnje : 'godina proizvodnje3',
        model_vozila: 'model vozila3'

    },
]
export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {})
