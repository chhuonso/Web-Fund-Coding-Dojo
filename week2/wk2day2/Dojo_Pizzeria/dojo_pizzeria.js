function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {}
        pizza.crustType = "deep dish";
        pizza.sauceType = "traditinal";
        pizza.cheeses = ["mozzarella"];
        pizza.toppings = ["pepperoni", "sausage"];
        return pizza;
    }


var pizza1 = pizzaOven(
    "hand tossed", 
    "marinara", 
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"])


