# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL**.

| | |
|---|---|
| Tema | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| Nivel | trainee-l2 |
| Chapter | Frontend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 10 |
| Patron arquitectonico | hexagonal/clean |
| Tiempo estimado | 8 horas |

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

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @nestjs/common 10.4.22
- @nestjs/core 10.4.22
- @nestjs/platform-express 10.4.22
- @nestjs/swagger 8.1.1
- class-transformer 0.5.1
- class-validator 0.15.1
- reflect-metadata 0.2.2
- rxjs 7.8.2
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3
- jest 29.7.0
- ts-jest 29.2.5
- @types/jest 29.5.14

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Segui el orden de arranque del mapa de componentes (infraestructura local primero) y corre `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` desde la raiz: mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración del Entorno y Conexión a la Base de Datos**: Proyecto configurado con TypeScript 5 y conexiones establecidas a DynamoDB y MongoDB.
- **Fase 2 — Implementación de Operaciones CRUD en DynamoDB**: Funciones implementadas para realizar operaciones CRUD en DynamoDB.
- **Fase 3 — Implementación de Operaciones CRUD en MongoDB**: Funciones implementadas para realizar operaciones CRUD en MongoDB.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `api/src/infrastructure/repositories/dynamodb/product-dynamo.repository.ts` — La pieza p3 (Implementación de creación de productos en DynamoDB, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `api/src/infrastructure/repositories/mongodb/product-mongo.repository.ts` — La pieza p5 (Implementación de eliminación de productos en MongoDB, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `client/src/features/products/components/ProductTable.tsx` — La pieza p7 (Manejo de estado para eliminación de productos con hooks de React, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `client/src/App.tsx` — absorbida: fuga de la pieza p7

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

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Usar TypeScript 5 en todo el proyecto (dependencia typescript en package.json) | chequeo estatico (manifest): exige `"typescript": "^5` | Verificada |
| No usar Redux; el estado de la interfaz se maneja con hooks de React | chequeo estatico (code): prohibe `redux`, `Redux` | Verificada |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | `api/src/acceptance/f2.test.ts` > should update a product | Sin verificar |
| Las pruebas de aceptacion cubren editar y eliminar un producto de la tabla | `api/src/acceptance/f3.test.ts` > should delete a product | Sin verificar |

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (30)

- `api/package.json`
- `api/tsconfig.json`
- `api/src/domain/ports/dynamodb.port.ts`
- `api/src/domain/ports/mongodb.port.ts`
- `api/src/domain/entities/product.entity.ts`
- `api/src/application/services/product.service.ts`
- `api/src/infrastructure/repositories/dynamodb/product-dynamo.repository.ts`
- `api/src/infrastructure/repositories/mongodb/product-mongo.repository.ts`
- `api/src/acceptance/f2.test.ts`
- `api/src/acceptance/f3.test.ts`
- `api/src/application/controllers/products.controller.ts`
- `api/src/app.module.ts`
- `api/src/main.ts`
- `client/src/main.tsx`
- `client/package.json`
- `client/tsconfig.json`
- `client/vite.config.ts`
- `client/index.html`
- `client/src/vite-env.d.ts`
- `client/src/features/products/hooks/useDeleteProduct.ts`
- `client/src/features/products/hooks/useUpdateProduct.ts`
- `client/src/features/products/services/ProductService.ts`
- `client/src/features/products/types/product.types.ts`
- `client/src/features/products/components/ProductTable.tsx`
- `client/src/App.tsx`
- `.run/api.run.xml`
- `docker-compose.yml`
- `infra-local/README.md`
- `infra-local/dynamodb/create-tables.sh`
- `infra-local/mongo/init.js`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `api` (presente)
- `api/src/domain/ports` (presente)
- `api/src/domain/entities` (presente)
- `api/src/application/services` (presente)
- `api/src/infrastructure/repositories/dynamodb` (presente)
- `api/src/infrastructure/repositories/mongodb` (presente)
- `api/src/infrastructure/controllers` (ausente)
- `api/src/infrastructure/dto` (ausente)
- `client` (presente)
- `client/src/features/products/components` (presente)
- `client/src/features/products/hooks` (presente)
- `client/src/features/products/services` (presente)
- `client/src/features/products/types` (presente)

## Verificacion

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- Cada componente vive en su carpeta: instala y compila dentro de ella, y no muevas archivos entre componentes.
- Respeta los contratos entre componentes (endpoints, topics) tal como estan declarados en el mapa de componentes.
- El patron es **hexagonal/clean**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2
- Brecha que el reto ataca: Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
