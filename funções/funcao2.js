function multiplicar (x,y,z){
    return x * y * z
}
console.log(multiplicar(2,3,4))

function podeDirigir(idade, cnh) {
  console.log(
    idade >= 18 && cnh === true
      ? "Pode dirigir"
      : "Não pode dirigir"
  );
}
podeDirigir(20, true);  // Pode dirigir
podeDirigir(17, true);  // Não pode dirigir
podeDirigir(25, false); // Não pode dirigir