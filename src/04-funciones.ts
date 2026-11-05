export {};

function sumar(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

function crear(nombre: string, rol: string = "USER"): string {
  return `Usuario ${nombre} con rol ${rol}`;
}

console.log(sumar(5, 3));
console.log(saludar("Lautaro"));
console.log(saludar("Lautaro", "Villalba"));
console.log(crear("Lauti"));