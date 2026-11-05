# Glosario - Trabajo Práctico Integrador IV

## Tipado estático

- Los tipos se verifican antes de ejecutar el código.

```typescript
let edad: number = 20;
```

## Tipo primitivo

- Tipo de dato básico: `string`, `number` o `boolean`.

```typescript
let activo: boolean = true;
```

## Array tipado

- Array que solo acepta elementos de un tipo.

```typescript
let notas: number[] = [7, 8, 10];
```

## Tipo unión

- Permite que una variable acepte más de un tipo.

```typescript
let id: string | number = 1234;
```

## any

- Tipo que desactiva la verificación de tipos.

```typescript
let dato: any = "texto";
```

## Tipo de retorno

- Indica qué tipo de dato devuelve una función.

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}
```

## Parámetro opcional

- Parámetro que se puede omitir al llamar a la función.

```typescript
function saludar(nombre?: string): void {}
```

## Parámetro por defecto

- Parámetro que toma un valor predeterminado si no se pasa.

```typescript
function crear(rol: string = "USER"): void {}
```

## Interface

- Define la forma de un objeto.

```typescript
interface Persona {
  nombre: string;
}
```

## Type

- Le asigna un nombre a un tipo para reutilizarlo.

```typescript
type Id = string | number;
```

## Propiedad opcional

- Propiedad que un objeto puede no tener.

```typescript
interface Alumno {
  edad?: number;
}
```

## Enum

- Conjunto de constantes con nombre.

```typescript
enum Estado {
  PENDIENTE = "PENDIENTE",
}
```

## Tipo literal

- Tipo que solo acepta valores exactos.

```typescript
type Rol = "ADMIN" | "USER";
```
