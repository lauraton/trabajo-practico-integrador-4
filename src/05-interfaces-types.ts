export {};

interface Persona {
  nombre: string;
  edad?: number;
}

type Id = string | number;

const persona: Persona = { nombre: "Lautaro" };
const idPersona: Id = "A12";

console.log(persona);
console.log(idPersona);