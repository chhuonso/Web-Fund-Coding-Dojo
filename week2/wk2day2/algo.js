// var pokémon = [
//     { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//     { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//     { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//     { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//     { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//     { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//     { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//     { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//     { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//     { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//     { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//     { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//     { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//     { "id": 98,  "name": "Krabby",     "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//     { "id": 133, "name": "Eevee",      "types": ["normal"] },
//     { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ];

// // 1.console.log the pokémon objects whose id is evenly divisible by 3
// function divisibleBy3(obj){
//     for(let i = 0; i < obj.length; i++){
//         if(obj[i].id % 3 == 0 ){
//             console.log(obj[i])
//         }
//     }
//     console.log(obj)
// }
// // divisibleBy3(pokémon)

// // 2.console.log the pokémon objects that have more than one type
// function moreThanOneType(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].types.length > 1){
//             console.log(arr[i].types)
//         }
//     }
// }
// // moreThanOneType(pokémon)


// // 3.console.log the names of the pokémon whose only type is "poison"
// function poision(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].types.length[0] === "poision" || arr[i].types.length[1] === "poision"){
//             console.log(arr[i].name)
//         }
//         console.log(arr[i].name)
//     }
// }

// poision(pokémon)

// // 4.console.log the first type of all the pokémon whose second type is "flying"
// // Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"






var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];



function flip(arr2d){
    for(var i = 0; i < arr2d.length; i++){
        for(var j = 0; j < arr2d[i].length;j++){
            var temp = arr2d[i][j];
            
        }
    }
    return flip;
}

console.log(flip(arr));