export {};

enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
}

type Rol = "ADMIN" | "USER";

let tarea: Estado = Estado.PENDIENTE;
let rol: Rol = "ADMIN";

console.log(tarea);
console.log(rol);