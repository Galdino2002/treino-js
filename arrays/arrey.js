const frutas = ["Maçã", "Banana", "Uva"];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

frutas.push("laranja")//adiciona no final do arrey
frutas.pop("laranja");//remove do final  do arrey
frutas.unshift("Morango");//add no inicio do arrey
frutas.shift("morango"); //retira do inicio do arrey 