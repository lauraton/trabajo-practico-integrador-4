# Trabajo Práctico Integrador 4 -- Taller de Lenguaje de Programación II

### Alumno: Villalba, Lautaro Nicolás.

### Profesores: Britos, Diego. - Centurión, Agustín. - Marcos, Franco.

### Unidad: IV - Introducción a TypeScript

# Tema 1: ¿Qué es TypeScript?

## ¿Qué es TypeScript y quién lo desarrolla?

- TypeScript es un lenguaje de programación desarrollado por Microsoft, siendo también un superconjunto de JavaScript. Es de tipado estático y agrega funciones que complementan las carencias que tiene JavaScript. A su vez, antes de ejecutarse, el programa de TypeScript se encarga de compilar o transpilar los archivos y pasarlo a lenguaje JavaScript.

## ¿Qué diferencias tiene con JavaScript?

- Las principales diferencias de TypeScript con JavaScript son:

1. TypeScript ofrece un tipado estático gradual, lo que significa que mientras se está escribiendo el código, el programa es capaz de encontrar los errores a medida del desarrollo. En el caso de JavaScript, esto no existe.
2. TypeScript tiene un proceso de compilación, en el cual se pasa todo el código escrito al idioma JavaScript.
3. TypeScript agrega funciones adicionales que no están presentes en JavaScript. Algunas de aquellas funciones son: las enumeraciones (enum), interfaces y modificadores de acceso.

## ¿Qué ventajas ofrece?

- Algunas de las ventajas principales de TypeScript son:

1. Menos bugs y errores de tipado gracias a la correción de código durante el desarrollo del mismo.
2. Tiene autocompletado del editor, es decir, a medida que se realiza el código, se hacen sugerencias o te autocompleta lo que estás escribiendo.
3. Es más fácil de leer.
4. Facilita el trabajo en equipo.

## ¿Cuál es su versión actual?

- Según la página de descarga de TypeScript en npm, la última versión de este lenguaje de programación es la 7.0.2.

# Tema 2: Crear y ejecutar un proyecto

## ¿Cómo se instala TypeScript en un proyecto?

- La instalación de TypeScript dentro de un proyecto se divide en una serie de pasos, estos son:

1. Verificar que tenés Node.js instalado. En caso de no tenerlo, instalarlo.
2. Crear la base del proyecto con:

- mkdir proyecto-ts
- cd proyecto-ts

3. Inicializar el proyecto con "npm init -y"
4. Instalamos TypeScript con "npm i -D typescript @types/node@24 tsx"
5. Comprobamos que se instaló con "npx tsc -v"
6. Y creamos a mano el archivo tsconfig.json.

## ¿Para qué sirve el archivo tsconfig.json?

- El archivo tsconfig.json sirve para definir la configuración del proyecto que se está realizando. Le indica a TypeScript 3 cosas muy importantes:

1. Qué archivos forman parte del proyecto. Se indica con el "include"
2. Qué tan estricto debe ser al verificar tipos. Se indica con el "strict"
3. De qué forma generar el JavaScript

## ¿Qué hace el comando tsc?

- tsc es el compilador de TypeScript. Es el encargado de pasar todo el código de TypeScript a lenguaje JavaScript. Al ejecutarlo, suceden una serie de pasos.

1. Busca el "tsconfig.json"
2. Toma los archivos indicados en el "include"
3. Verificar los tipos de todo el código y muestra los errores.
4. Genera los archivos ".js" en la carpeta "outDir"

## ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?

- "tsc" es el compilador de TypeScript. No ejecuta el código: revisa los tipos, muestra los errores que encuentra y convierte los archivos .ts en archivos ".js".
- "node" es el entorno que ejecuta JavaScript. No entiende TypeScript, por eso se usa para ejecutar los archivos ".js" que genera tsc.
- "tsx" es una herramienta que ejecuta archivos ".ts" directamente, sin generar archivos ".js", ya que los convierte en memoria. A diferencia de tsc, no revisa los tipos, por lo que un error de tipado no impide que el código se ejecute.

# Tema 3: Tipos básicos

## ¿Qué son los tipos string, number y boolean?

- Son los tipos primitivos de TypeScript. Estos son:

1. String: Referido al texto, y usado entre comillas simples, dobles y backticks.
2. Number: Referido a los números, tanto enteros como reales.
3. Boolean: Referido a "true" o "false", teniendo sólo dos valores para elegir.

## ¿Cómo se declara un array con tipo?

- Para declarar un array con tipo, debemos poner el tipo (string, number) y luego corchetes [ ].
  Por ejemplo:
  ```typescript
  const names: string[] = ["Lu", "Azul"];
  ```
- Asimismo, también se pueden declarar arrays usando "Array:<string>"

```typescript
const names: Array<string> = ["Bautista", "Eluney"];
```

- Es de aclarar que el "string" en cada línea de código es cambiable a "number". Y, en caso de querer ingresar un valor que no es apropiado para el tipo declarado, entonces no se podrá y marcará un error.

## ¿Qué es un tipo unión?

- El tipo unión se refiere a los Arrays que contienen más de un tipo aceptable en el mismo. Por ejemplo:

```typescript
const datos: (string | number)[] = ["Bautista", 19];
```

## ¿Por qué se recomienda evitar any?

- Se recomienda evitar el "any" debido a que no permite la detección de errores hasta su ejecución.

# Tema 4: Funciones

## ¿Cómo se indican los tipos de parámetros?

- Los tipos de los parámetros se indican colocando dos puntos (:) después del nombre de cada parámetro, seguido del tipo de dato. Si se pasa un valor de otro tipo o falta un parámetro obligatorio, TypeScript muestra un error al compilar.

```typescript
function sumar(a: number, b: number) {
  return a + b;
}

sumar(5, 3);
sumar("5", 3);
```

## ¿Cómo se indica el tipo de retorno?

- El tipo de retorno se indica colocando dos puntos (:) después del paréntesis de cierre de los parámetros, seguido del tipo de dato que devuelve la función: function f(): tipo. Es opcional: si no se indica, TypeScript infiere el tipo a partir de cada return del cuerpo. Si la función no devuelve nada, se usa void.

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}

function mostrar(mensaje: string): void {
  console.log(mensaje);
}
```

## ¿Qué es un parámetro opcional?

- Al hablar de un parámetro opcional nos referimos al parámetro que el usuario puede omitir ingresar. Este se indica con un "?" antes de poner los ":" en el parámetro.

```typescript
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

## ¿Qué es un parámetro por defecto?

- Un parámetro por defecto es aquel al que se le asigna un valor predeterminado por el desarrollador. Se indica colocando el "=" después del tipo de parámetro que se le asigna.

```typescript
function crear(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario ${nombre} con rol ${rol}`);
}
```

# Tema 5: Interfaces y type

## ¿Qué es una interfaz y para qué sirve?

- Una interfaz pone nombre a la forma de un objeto: las propiedades que debe tener y el tipo de cada una. Una vez declarada, usas el nombre como tipo, y el compilador comprueba contra ella cada objeto que pasas, devuelves o asignas.

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}
```

## ¿Qué es un type?

- Un type (alias de tipo) permite asignarle un nombre a un tipo para reutilizarlo. Al igual que una interfaz, puede definir la forma de un objeto, pero además puede representar uniones, tipos literales o tipos primitivos. Se declara con la palabra "type", seguida del nombre, un "=" y el tipo.

```typescript
type Alumno = {
  nombre: string;
  edad: number;
};

type Id = string | number;

const alumno: Alumno = { nombre: "Lautaro", edad: 20 };
let idAlumno: Id = 1234;
```

## ¿Cómo se declara una propiedad opcional?

- Se declara poniendo ? después del nombre de la propiedad, y antes de los dos puntos.

```typescript
interface Alumno {
  nombre: string;
  edad: number;
  email?: string;
}
```

- Esto hace que sea obligatorio ingresar nombre y edad, pero no email.

## ¿Cuándo conviene usar cada uno?

- En ambos se puede definir la forma de los objetos, pero usamos type cuando necesitamos uniones, definir estados o variantes, tipos primitivos o componentes lógicos (como tuplas). Y usamos interface cuando hay que extenderlos con extend

```typescript
interface Persona {
  nombre: string;
}

type Rol = "ADMIN" | "USER";
```

# Tema 6: Enums y tipos literales

## ¿Qué es un enum?

- Un enum es un conjunto de constantes con nombre. A diferencia de otros tipos, TypeScript lo convierte en un objeto de JavaScript.

```typescript
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
}

let tarea: Estado = Estado.PENDIENTE;
```

## ¿Qué es un tipo literal?

- Un tipo literal indica los valores exactos que puede tener una variable. Se suele combinar con una unión ("|").

```typescript
type Rol = "ADMIN" | "USER";

let rol: Rol = "ADMIN";
```

## ¿En qué se parecen y en qué se diferencian?

- Se parecen en que los dos limitan los valores que puede tener una variable. Se diferencian en que el enum se usa con su nombre ("Estado.PENDIENTE") y existe en el JavaScript generado, mientras que el tipo literal se usa con el valor directo ("ADMIN") y se borra al compilar.

## ¿En qué situaciones se puede usar cada uno?

- El tipo literal sirve para casos simples con pocos valores, y funciona con cualquier herramienta. El enum sirve cuando se quiere agrupar constantes con nombre, pero funciona con tsx y tsc, no con "node archivo.ts".

# Fuentes - Tema 1:

- https://www.npmjs.com/package/typescript
- https://www.coderhouse.com/ar/coderlibrary/que-es-typescript-y-por-que-es-clave-en-desarrollo-web-moderno
- https://www.unir.net/revista/ingenieria/que-es-typescript/
- https://codica.la/blog/todo-lo-que-debe-saber-el-principiante-sobre-typescript
- https://www.unir.net/revista/ingenieria/que-es-typescript/
- Material del Classroom.

# Fuentes - Tema 2:

- Material del Classroom.
- https://medium.com/@seanbridger/typescript-basics-1-10-typescript-compiler-tsc-and-tsconfig-f9bf0134c5eb

# Fuentes - Tema 3:

- https://mimo.org/glossary/typescript/union
- https://coddy.tech/docs/es/typescript/any-vs-unknown
- https://coddy.tech/docs/es/typescript/arrays
- https://www.coddykit.com/es/courses/typescript/primitive-types-string-number-boolean-3341784
- https://coddy.tech/docs/es/typescript/arrays

# Fuentes - Tema 4:

- Material del Classroom.
- https://coddy.tech/docs/es/typescript/functions
- https://coddy.tech/docs/es/typescript/optional-parameters

# Fuentes - Tema 5:

- Material del Classroom.
- https://coddy.tech/docs/es/typescript/interfaces
- https://coddy.tech/docs/es/typescript/interface-vs-type

# Fuentes - Tema 6:

- https://coddy.tech/docs/es/typescript/enums
- Material del Classroom.
