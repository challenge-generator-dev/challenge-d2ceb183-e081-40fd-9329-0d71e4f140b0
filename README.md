# Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL

En este reto, debes construir operaciones básicas de CRUD (Crear, Obtener, Actualizar, Eliminar) en bases de datos SQL y NoSQL utilizando definición y manipulación de datos (DDL y DML). Trabajarás con DynamoDB y MongoDB para almacenar y recuperar datos de productos en un sistema de gestión de inventario. Los productos tienen atributos como nombre, precio, stock y categoría. Debes asegurarte de que las operaciones CRUD funcionen correctamente y que los datos se almacenen y recuperen de manera eficiente.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración del Entorno y Conexión a la Base de Datos

**Objetivo:** Configurar el entorno de desarrollo y establecer la conexión a DynamoDB y MongoDB.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura tu proyecto para usar TypeScript 5.
- Establece la conexión a DynamoDB y MongoDB utilizando las bibliotecas adecuadas.
- Crea las tablas necesarias en DynamoDB y las colecciones en MongoDB para almacenar productos.

**Entregable:** Proyecto configurado con TypeScript 5 y conexiones establecidas a DynamoDB y MongoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y verificar la configuración.
- Revisa la documentación de DynamoDB y MongoDB para asegurarte de que las conexiones y las estructuras de datos sean correctas.

</details>

### Fase 2: Implementación de Operaciones CRUD en DynamoDB

**Objetivo:** Implementar operaciones CRUD para productos en DynamoDB.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crea una función para agregar un nuevo producto a DynamoDB.
- Implementa una función para obtener un producto por su ID.
- Desarrolla una función para actualizar la información de un producto.
- Crea una función para eliminar un producto de DynamoDB.

**Entregable:** Funciones implementadas para realizar operaciones CRUD en DynamoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y verificar las funciones.
- Asegúrate de manejar correctamente los errores y las excepciones.

</details>

### Fase 3: Implementación de Operaciones CRUD en MongoDB

**Objetivo:** Implementar operaciones CRUD para productos en MongoDB.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crea una función para agregar un nuevo producto a MongoDB.
- Implementa una función para obtener un producto por su ID.
- Desarrolla una función para actualizar la información de un producto.
- Crea una función para eliminar un producto de MongoDB.

**Entregable:** Funciones implementadas para realizar operaciones CRUD en MongoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y verificar las funciones.
- Asegúrate de manejar correctamente los errores y las excepciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las operaciones CRUD y por qué son importantes en el manejo de bases de datos?
- **paraQueSirve**: ¿Para qué sirve utilizar DynamoDB y MongoDB en un sistema de gestión de inventario?
- **comoSeUsa**: ¿Cómo se implementan las operaciones CRUD en DynamoDB y MongoDB?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar operaciones CRUD en bases de datos y cómo se pueden evitar?

## Criterios de Evaluacion

- Configuración correcta del proyecto con TypeScript 5 y conexiones a DynamoDB y MongoDB.
- Implementación de funciones para realizar operaciones CRUD en DynamoDB.
- Implementación de funciones para realizar operaciones CRUD en MongoDB.
- Manejo correcto de errores y excepciones en las funciones CRUD.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Configuración del Entorno y Conexión a la Base de Datos | Definición de puertos para abstracción de DynamoDB | — | El proyecto está configurado con TypeScript 5 y las dependencias necesarias para DynamoDB y MongoDB.; Las conexiones a DynamoDB y MongoDB están establecidas y son verificables. | — | — |
| f1 — Configuración del Entorno y Conexión a la Base de Datos | Definición de puertos para abstracción de MongoDB | — | El proyecto está configurado con TypeScript 5 y las dependencias necesarias para DynamoDB y MongoDB.; Las conexiones a DynamoDB y MongoDB están establecidas y son verificables. | — | — |
| f2 — Implementación de Operaciones CRUD en DynamoDB | Implementación de creación de productos en DynamoDB | `api/src/infrastructure/repositories/dynamodb/product-dynamo.repository.ts:ProductDynamoRepository.create` | Las operaciones CRUD para productos en DynamoDB están implementadas y funcionan correctamente.; Las pruebas de aceptación cubren crear, obtener, actualizar y eliminar productos. | `api/src/acceptance/f2.test.ts` | `cd api && npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f2 — Implementación de Operaciones CRUD en DynamoDB | Implementación de actualización de productos en DynamoDB | `api/src/infrastructure/repositories/dynamodb/product-dynamo.repository.ts:ProductDynamoRepository.update` | Las operaciones CRUD para productos en DynamoDB están implementadas y funcionan correctamente.; Las pruebas de aceptación cubren crear, obtener, actualizar y eliminar productos. | `api/src/acceptance/f2.test.ts` | `cd api && npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f2 — Implementación de Operaciones CRUD en DynamoDB | Manejo de estado para eliminación de productos con hooks de React | `client/src/features/products/components/ProductTable.tsx:ProductTable.useDeleteProduct` | Las operaciones CRUD para productos en DynamoDB están implementadas y funcionan correctamente.; Las pruebas de aceptación cubren crear, obtener, actualizar y eliminar productos. | — | — |
| f3 — Implementación de Operaciones CRUD en MongoDB | Implementación de eliminación de productos en MongoDB | `api/src/infrastructure/repositories/mongodb/product-mongo.repository.ts:ProductMongoRepository.delete` | Las operaciones CRUD para productos en MongoDB están implementadas y funcionan correctamente.; Las pruebas de aceptación cubren crear, obtener, actualizar y eliminar productos. | `api/src/acceptance/f3.test.ts` | `cd api && npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |
| f3 — Implementación de Operaciones CRUD en MongoDB | Implementación de creación de productos en MongoDB | `api/src/infrastructure/repositories/mongodb/product-mongo.repository.ts:ProductMongoRepository.create` | Las operaciones CRUD para productos en MongoDB están implementadas y funcionan correctamente.; Las pruebas de aceptación cubren crear, obtener, actualizar y eliminar productos. | `api/src/acceptance/f3.test.ts` | `cd api && npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |
| f3 — Implementación de Operaciones CRUD en MongoDB | Manejo de estado para actualización de productos con hooks de React | `client/src/features/products/components/ProductTable.tsx:ProductTable.useUpdateProduct` | Las operaciones CRUD para productos en MongoDB están implementadas y funcionan correctamente.; Las pruebas de aceptación cubren crear, obtener, actualizar y eliminar productos. | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Usar TypeScript 5 en todo el proyecto (dependencia typescript en package.json) | chequeo estatico (manifest): exige `"typescript": "^5` | Verificada |
| No usar Redux; el estado de la interfaz se maneja con hooks de React | chequeo estatico (code): prohibe `redux`, `Redux` | Verificada |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | `api/src/acceptance/f2.test.ts` > should update a product | Sin verificar |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | `api/src/acceptance/f3.test.ts` > should delete a product | Sin verificar |

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
