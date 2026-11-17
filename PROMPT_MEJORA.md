# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/infrastructure/repositories/dynamodb/product-dynamo.repository.ts` — La pieza p3 (Implementación de creación de productos en DynamoDB, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `api/src/infrastructure/repositories/mongodb/product-mongo.repository.ts` — La pieza p5 (Implementación de eliminación de productos en MongoDB, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `client/src/features/products/components/ProductTable.tsx` — La pieza p7 (Manejo de estado para eliminación de productos con hooks de React, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `client/src/App.tsx` — absorbida: fuga de la pieza p7

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

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

### Reto
- Tema: Construye operaciones CRUD en Bases de Datos SQL y NoSQL
- Seniority: trainee-l2
- Tipo: practical
- Título: Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del Entorno y Conexión a la Base de Datos — objetivo: Configurar el entorno de desarrollo y establecer la conexión a DynamoDB y MongoDB. — entregable (NO resolver): Proyecto configurado con TypeScript 5 y conexiones establecidas a DynamoDB y MongoDB.
- Fase 2: Implementación de Operaciones CRUD en DynamoDB — objetivo: Implementar operaciones CRUD para productos en DynamoDB. — entregable (NO resolver): Funciones implementadas para realizar operaciones CRUD en DynamoDB.
- Fase 3: Implementación de Operaciones CRUD en MongoDB — objetivo: Implementar operaciones CRUD para productos en MongoDB. — entregable (NO resolver): Funciones implementadas para realizar operaciones CRUD en MongoDB.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.4.22",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/swagger": "8.1.1",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "^5.7.3",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "@types/jest": "29.5.14"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: api/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    ".idea",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/domain/ports/dynamodb.port.ts ===
/**
 * Puerto que define las operaciones CRUD para DynamoDB.
 * Este contrato es implementado por la capa de infraestructura.
 */
export interface DynamoDBPort {
  /**
   * Crea un nuevo producto en DynamoDB.
   * @param product Datos del producto a crear.
   * @returns Promise con el producto creado.
   */
  createProduct(product: CreateProductDto): Promise<ProductResponseDto>;

  /**
   * Obtiene un producto por su ID desde DynamoDB.
   * @param id ID del producto.
   * @returns Promise con el producto encontrado o null si no existe.
   */
  getProduct(id: string): Promise<ProductResponseDto | null>;

  /**
   * Actualiza un producto en DynamoDB.
   * @param id ID del producto a actualizar.
   * @param product Datos parciales del producto.
   * @returns Promise con el producto actualizado.
   */
  updateProduct(id: string, product: UpdateProductDto): Promise<ProductResponseDto>;

  /**
   * Elimina un producto de DynamoDB.
   * @param id ID del producto a eliminar.
   * @returns Promise que se resuelve cuando la operación se completa.
   */
  deleteProduct(id: string): Promise<void>;
}

// Tipos reutilizados para mantener consistencia con el contrato expuesto
export interface CreateProductDto {
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
}

export interface ProductResponseDto {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

// === ARCHIVO: api/src/domain/ports/mongodb.port.ts ===
/**
 * Puerto que define las operaciones CRUD para MongoDB.
 * Este contrato es implementado por la capa de infraestructura.
 */
export interface MongoDBPort {
  /**
   * Crea un nuevo producto en MongoDB.
   * @param product Datos del producto a crear.
   * @returns Promise con el producto creado.
   */
  createProduct(product: CreateProductDto): Promise<ProductResponseDto>;

  /**
   * Obtiene un producto por su ID desde MongoDB.
   * @param id ID del producto.
   * @returns Promise con el producto encontrado o null si no existe.
   */
  getProduct(id: string): Promise<ProductResponseDto | null>;

  /**
   * Actualiza un producto en MongoDB.
   * @param id ID del producto a actualizar.
   * @param product Datos parciales del producto.
   * @returns Promise con el producto actualizado.
   */
  updateProduct(id: string, product: UpdateProductDto): Promise<ProductResponseDto>;

  /**
   * Elimina un producto de MongoDB.
   * @param id ID del producto a eliminar.
   * @returns Promise que se resuelve cuando la operación se completa.
   */
  deleteProduct(id: string): Promise<void>;
}

// Tipos reutilizados para mantener consistencia con el contrato expuesto
export interface CreateProductDto {
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
}

export interface ProductResponseDto {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

// === ARCHIVO: api/src/domain/entities/product.entity.ts ===
/**
 * Entidad de dominio que representa un producto.
 * Contiene la lógica de negocio relacionada con los productos.
 */
export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public price: number,
    public stock: number,
    public category: string,
  ) {
    this.validate();
  }

  /**
   * Valida los atributos del producto.
   * @throws Error si algún atributo no cumple con las reglas de negocio.
   */
  private validate(): void {
    if (!this.name || this.name.trim().length === 0) {
      throw new Error('El nombre del producto es obligatorio');
    }
    if (this.price <= 0) {
      throw new Error('El precio debe ser mayor que cero');
    }
    if (this.stock < 0) {
      throw new Error('El stock no puede ser negativo');
    }
    if (!this.category || this.category.trim().length === 0) {
      throw new Error('La categoría es obligatoria');
    }
    this.validatePriceRange();
    this.validateStockLimit();
    this.validateNameLength();
    this.validateCategoryFormat();
  }

  /**
   * Valida que el precio esté dentro de un rango razonable.
   */
  private validatePriceRange(): void {
    const MAX_PRICE = 1000000;
    if (this.price > MAX_PRICE) {
      throw new Error(`El precio no puede exceder ${MAX_PRICE}`);
    }
  }

  /**
   * Valida que el stock no exceda un límite máximo.
   */
  private validateStockLimit(): void {
    const MAX_STOCK = 99999;
    if (this.stock > MAX_STOCK) {
      throw new Error(`El stock no puede exceder ${MAX_STOCK} unidades`);
    }
  }

  /**
   * Valida la longitud del nombre del producto.
   */
  private validateNameLength(): void {
    const MIN_NAME_LENGTH = 2;
    const MAX_NAME_LENGTH = 200;
    if (this.name.length < MIN_NAME_LENGTH) {
      throw new Error(`El nombre debe tener al menos ${MIN_NAME_LENGTH} caracteres`);
    }
    if (this.name.length > MAX_NAME_LENGTH) {
      throw new Error(`El nombre no puede exceder ${MAX_NAME_LENGTH} caracteres`);
    }
  }

  /**
   * Valida que la categoría tenga un formato válido.
   */
  private validateCategoryFormat(): void {
    const VALID_CATEGORIES = ['electronics', 'clothing', 'food', 'books', 'toys', 'home', 'sports', 'other'];
    const normalizedCategory = this.category.toLowerCase().trim();
    if (!VALID_CATEGORIES.includes(normalizedCategory)) {
      throw new Error(`La categoría debe ser una de: ${VALID_CATEGORIES.join(', ')}`);
    }
    this.category = normalizedCategory;
  }

  /**
   * Verifica si el producto tiene stock disponible.
   */
  public hasStock(): boolean {
    return this.stock > 0;
  }

  /**
   * Verifica si el producto está agotado.
   */
  public isOutOfStock(): boolean {
    return this.stock === 0;
  }

  /**
   * Verifica si el stock está bajo (menos de 10 unidades).
   */
  public isLowStock(): boolean {
    return this.stock > 0 && this.stock < 10;
  }

  /**
   * Obtiene el valor total del inventario para este producto.
   */
  public getInventoryValue(): number {
    return this.price * this.stock;
  }

  /**
   * Convierte la entidad a un DTO para respuesta.
   * @returns ProductResponseDto
   */
  toResponseDto(): ProductResponseDto {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock,
      category: this.category,
    };
  }

  /**
   * Crea una copia de la entidad con nuevos valores.
   * @param partial Datos parciales para actualizar.
   * @returns Nueva instancia de Product
   */
  static createFromPartial(id: string, partial: Partial<Product>): Product {
    return new Product(
      id,
      partial.name ?? '',
      partial.price ?? 0,
      partial.stock ?? 0,
      partial.category ?? '',
    );
  }
}

/**
 * DTO de respuesta para productos.
 */
export interface ProductResponseDto {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

// === ARCHIVO: api/src/application/services/product.service.ts ===
import { Injectable, Inject } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { DynamoDBPort } from '../../domain/ports/dynamodb.port';
import { MongoDBPort } from '../../domain/ports/mongodb.port';
import { CreateProductDto, UpdateProductDto, ProductResponseDto } from '../../domain/ports/dynamodb.port';

/**
 * Servicio de aplicación que orquesta las operaciones CRUD para productos.
 * Decide qué repositorio usar (DynamoDB o MongoDB) basado en la configuración.
 */
@Injectable()
export class ProductService {
  constructor(
    @Inject('DynamoDBPort') private readonly dynamoDBPort: DynamoDBPort,
    @Inject('MongoDBPort') private readonly mongoDBPort: MongoDBPort,
  ) {}

  /**
   * Crea un nuevo producto.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param createProductDto Datos del producto a crear.
   * @returns Promise con el producto creado.
   */
  async createProduct(createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    const product = new Product(
      this.generateId(),
      createProductDto.name,
      createProductDto.price,
      createProductDto.stock,
      createProductDto.category,
    );

    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.createProduct(createProductDto);
  }

  /**
   * Obtiene un producto por su ID.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param id ID del producto.
   * @returns Promise con el producto encontrado o null si no existe.
   */
  async getProduct(id: string): Promise<ProductResponseDto | null> {
    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.getProduct(id);
  }

  /**
   * Actualiza un producto.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param id ID del producto a actualizar.
   * @param updateProductDto Datos parciales del producto.
   * @returns Promise con el producto actualizado.
   */
  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<ProductResponseDto> {
    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.updateProduct(id, updateProductDto);
  }

  /**
   * Elimina un producto.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param id ID del producto a eliminar.
   * @returns Promise que se resuelve cuando la operación se completa.
   */
  async deleteProduct(id: string): Promise<void> {
    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.deleteProduct(id);
  }

  /**
   * Genera un ID único para nuevos productos.
   * @returns string ID generado.
   */
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}

// === ARCHIVO: api/src/infrastructure/repositories/dynamodb/product-dynamo.repository.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, Inject } from '@nestjs/common';
import { DynamoDBPort, CreateProductDto, UpdateProductDto, ProductResponseDto } from '../../../domain/ports/dynamodb.port';
import { Product } from '../../../domain/entities/product.entity';

@Injectable()
export class ProductDynamoRepository {
  constructor(@Inject('DynamoDBPort') private readonly dynamoDBPort: DynamoDBPort) {}

  async create(item: Product): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findById(id: string): Promise<Product | null> {
    const found = await this.dynamoDBPort.getProduct(id);
    if (!found) {
      return null;
    }
    return new Product(
      found.id,
      found.name,
      found.price,
      found.stock,
      found.category,
    );
  }

  async update(id: string, item: Product): Promise<Product> {
    throw new Error('TODO(reto): update');
  }

  async delete(id: string): Promise<void> {
    await this.dynamoDBPort.deleteProduct(id);
  }
}

// === ARCHIVO: api/src/infrastructure/repositories/mongodb/product-mongo.repository.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, Inject } from '@nestjs/common';
import { MongoDBPort, CreateProductDto, UpdateProductDto, ProductResponseDto } from '../../../domain/ports/mongodb.port';
import { Product } from '../../../domain/entities/product.entity';

@Injectable()
export class ProductMongoRepository {
  constructor(@Inject('MongoDBPort') private readonly mongoDBPort: MongoDBPort) {}

  async create(item: Product): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findById(id: string): Promise<Product | null> {
    const found = await this.mongoDBPort.getProduct(id);
    if (!found) {
      return null;
    }
    return new Product(
      found.id,
      found.name,
      found.price,
      found.stock,
      found.category,
    );
  }

  async update(id: string, item: Product): Promise<Product> {
    const updateDto: UpdateProductDto = {
      name: item.name,
      price: item.price,
      stock: item.stock,
      category: item.category,
    };
    const updated = await this.mongoDBPort.updateProduct(id, updateDto);
    return new Product(
      updated.id,
      updated.name,
      updated.price,
      updated.stock,
      updated.category,
    );
  }

  async delete(id: string): Promise<void> {
    throw new Error('TODO(reto): delete');
  }
}

// === ARCHIVO: api/src/acceptance/f2.test.ts ===
import { ProductDynamoRepository } from '../infrastructure/repositories/dynamodb/product-dynamo.repository';
import { DynamoDBPort, ProductResponseDto } from '../domain/ports/dynamodb.port';
import { Product } from '../domain/entities/product.entity';

describe('ProductDynamoRepository - Fase 2', () => {
  let repository: ProductDynamoRepository;
  let mockDynamoDBPort: jest.Mocked<DynamoDBPort>;

  beforeEach(() => {
    mockDynamoDBPort = {
      createProduct: jest.fn(),
      getProduct: jest.fn(),
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    } as jest.Mocked<DynamoDBPort>;
    repository = new ProductDynamoRepository(mockDynamoDBPort);
  });

  describe('should create a product', () => {
    it('dado Un producto válido; cuando Se invoca ProductDynamoRepository.create con el producto; entonces El producto es creado en DynamoDB y retornado con su ID', async () => {
      const product = new Product('prod-123', 'Laptop', 999.99, 10, 'Electronics');
      const expectedResponse: ProductResponseDto = {
        id: 'prod-123',
        name: 'Laptop',
        price: 999.99,
        stock: 10,
        category: 'Electronics',
      };

      mockDynamoDBPort.createProduct.mockResolvedValue(expectedResponse);

      const result = await repository.create(product);

      expect(mockDynamoDBPort.createProduct).toHaveBeenCalledWith({
        name: 'Laptop',
        price: 999.99,
        stock: 10,
        category: 'Electronics',
      });
      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe('prod-123');
      expect(result.name).toBe('Laptop');
      expect(result.price).toBe(999.99);
      expect(result.stock).toBe(10);
      expect(result.category).toBe('Electronics');
    });
  });

  describe('should update a product', () => {
    it('dado Un producto existente con ID conocido; cuando Se invoca ProductDynamoRepository.update con el ID y los nuevos datos; entonces El producto es actualizado en DynamoDB y retornado', async () => {
      const product = new Product('prod-123', 'Laptop Pro', 1299.99, 5, 'Electronics');
      const expectedResponse: ProductResponseDto = {
        id: 'prod-123',
        name: 'Laptop Pro',
        price: 1299.99,
        stock: 5,
        category: 'Electronics',
      };

      mockDynamoDBPort.updateProduct.mockResolvedValue(expectedResponse);

      const result = await repository.update('prod-123', product);

      expect(mockDynamoDBPort.updateProduct).toHaveBeenCalledWith('prod-123', {
        name: 'Laptop Pro',
        price: 1299.99,
        stock: 5,
        category: 'Electronics',
      });
      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe('prod-123');
      expect(result.name).toBe('Laptop Pro');
      expect(result.price).toBe(1299.99);
      expect(result.stock).toBe(5);
      expect(result.category).toBe('Electronics');
    });
  });
});

// === ARCHIVO: api/src/acceptance/f3.test.ts ===
import { ProductMongoRepository } from '../infrastructure/repositories/mongodb/product-mongo.repository';
import { MongoDBPort, ProductResponseDto } from '../domain/ports/mongodb.port';
import { Product } from '../domain/entities/product.entity';

describe('ProductMongoRepository - Fase 3', () => {
  let repository: ProductMongoRepository;
  let mockMongoDBPort: jest.Mocked<MongoDBPort>;

  beforeEach(() => {
    mockMongoDBPort = {
      createProduct: jest.fn(),
      getProduct: jest.fn(),
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    } as jest.Mocked<MongoDBPort>;
    repository = new ProductMongoRepository(mockMongoDBPort);
  });

  describe('should delete a product', () => {
    it('dado Un producto existente con ID conocido; cuando Se invoca ProductMongoRepository.delete con el ID; entonces El producto es eliminado de MongoDB', async () => {
      mockMongoDBPort.deleteProduct.mockResolvedValue();

      await repository.delete('prod-123');

      expect(mockMongoDBPort.deleteProduct).toHaveBeenCalledWith('prod-123');
      expect(mockMongoDBPort.deleteProduct).toHaveBeenCalledTimes(1);
    });
  });

  describe('should create a product', () => {
    it('dado Un producto válido; cuando Se invoca ProductMongoRepository.create con el producto; entonces El producto es creado en MongoDB y retornado con su ID', async () => {
      const product = new Product('prod-456', 'Mouse', 29.99, 50, 'Accessories');
      const expectedResponse: ProductResponseDto = {
        id: 'prod-456',
        name: 'Mouse',
        price: 29.99,
        stock: 50,
        category: 'Accessories',
      };

      mockMongoDBPort.createProduct.mockResolvedValue(expectedResponse);

      const result = await repository.create(product);

      expect(mockMongoDBPort.createProduct).toHaveBeenCalledWith({
        name: 'Mouse',
        price: 29.99,
        stock: 50,
        category: 'Accessories',
      });
      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe('prod-456');
      expect(result.name).toBe('Mouse');
      expect(result.price).toBe(29.99);
      expect(result.stock).toBe(50);
      expect(result.category).toBe('Accessories');
    });
  });
});

// === ARCHIVO: api/src/application/controllers/products.controller.ts ===
import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto, UpdateProductDto, ProductResponseDto } from '../../domain/ports/dynamodb.port';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    return this.productService.createProduct(createProductDto);
  }

  @Get(':id')
  async getProduct(@Param('id', ParseUUIDPipe) id: string): Promise<ProductResponseDto | null> {
    return this.productService.getProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductResponseDto> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}

// === ARCHIVO: api/src/app.module.ts ===
import { Module } from '@nestjs/common';
import { ProductService } from './application/services/product.service';
import { ProductsController } from './application/controllers/products.controller';
import { ProductDynamoRepository } from './infrastructure/repositories/dynamodb/product-dynamo.repository';
import { ProductMongoRepository } from './infrastructure/repositories/mongodb/product-mongo.repository';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    ProductService,
    {
      provide: 'DynamoDBPort',
      useClass: ProductDynamoRepository,
    },
    {
      provide: 'MongoDBPort',
      useClass: ProductMongoRepository,
    },
  ],
})
export class AppModule {}

// === ARCHIVO: api/src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('API para gestión de productos en DynamoDB y MongoDB')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Aplicación corriendo en http://localhost:${port}`);
  console.log(`Swagger disponible en http://localhost:${port}/api`);
}

bootstrap();

// === ARCHIVO: client/src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

const initializeApp = async (): Promise<void> => {
  console.log('Inicializando aplicación de gestión de productos...');
  
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('No se encontró el elemento root en el DOM');
  }
  
  console.log('Aplicación lista para renderizar');
};

initializeApp().catch(error => {
  console.error('Error al inicializar la aplicación:', error);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}

// === ARCHIVO: client/package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@tanstack/react-query": "5.108.0",
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: client/vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: client/index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: client/src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: client/src/features/products/hooks/useDeleteProduct.ts ===
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductService } from '../services/ProductService';
import { ProductResponseDto } from '../types/product.types';

const productService = new ProductService();

export interface UseDeleteProductOptions {
  onSuccess?: (id: string) => void;
  onError?: (error: Error, id: string) => void;
}

export interface UseDeleteProductResult {
  mutate: (id: string) => void;
  mutateAsync: (id: string) => Promise<void>;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  reset: () => void;
}

export function useDeleteProduct(
  options?: UseDeleteProductOptions
): UseDeleteProductResult {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await productService.deleteProduct(id);
    },
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      
      const cachedProducts = queryClient.getQueryData<ProductResponseDto[]>(['products', 'list']);
      if (cachedProducts) {
        const updatedProducts = cachedProducts.filter(p => p.id !== id);
        queryClient.setQueryData(['products', 'list'], updatedProducts);
      }
      
      if (options?.onSuccess) {
        options.onSuccess(id);
      }
    },
    onError: (error, id) => {
      if (options?.onError) {
        options.onError(error, id);
      }
    },
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
    reset: mutation.reset,
  };
}

// === ARCHIVO: client/src/features/products/hooks/useUpdateProduct.ts ===
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductService } from '../services/ProductService';
import { UpdateProductDto, ProductResponseDto } from '../types/product.types';

const productService = new ProductService();

export interface UseUpdateProductOptions {
  onSuccess?: (product: ProductResponseDto) => void;
  onError?: (error: Error, product: UpdateProductDto & { id: string }) => void;
}

export interface UseUpdateProductResult {
  mutate: (id: string, data: UpdateProductDto) => void;
  mutateAsync: (id: string, data: UpdateProductDto) => Promise<ProductResponseDto>;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  data: ProductResponseDto | null;
  reset: () => void;
}

export function useUpdateProduct(
  options?: UseUpdateProductOptions
): UseUpdateProductResult {
  const queryClient = useQueryClient();

  const mutation = useMutation<ProductResponseDto, Error, { id: string; data: UpdateProductDto }>({
    mutationFn: async ({ id, data }) => {
      return await productService.updateProduct(id, data);
    },
    onSuccess: (updatedProduct) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      
      const cachedProducts = queryClient.getQueryData<ProductResponseDto[]>(['products', 'list']);
      if (cachedProducts) {
        const updatedProducts = cachedProducts.map(p => 
          p.id === updatedProduct.id ? updatedProduct : p
        );
        queryClient.setQueryData(['products', 'list'], updatedProducts);
      }
      
      queryClient.setQueryData(['products', updatedProduct.id], updatedProduct);
      
      if (options?.onSuccess) {
        options.onSuccess(updatedProduct);
      }
    },
    onError: (error, variables) => {
      if (options?.onError) {
        options.onError(error, { id: variables.id, ...variables.data });
      }
    },
  });

  return {
    mutate: (id: string, data: UpdateProductDto) => {
      mutation.mutate({ id, data });
    },
    mutateAsync: (id: string, data: UpdateProductDto) => {
      return mutation.mutateAsync({ id, data });
    },
    isPending: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
    data: mutation.data ?? null,
    reset: mutation.reset,
  };
}

// === ARCHIVO: client/src/features/products/services/ProductService.ts ===
import axios from 'axios';
import { CreateProductDto, UpdateProductDto, ProductResponseDto } from '../types/product.types';

export class ProductService {
  private readonly baseUrl = 'http://localhost:3000/products';

  async createProduct(productData: CreateProductDto): Promise<ProductResponseDto> {
    try {
      const response = await axios.post<ProductResponseDto>(this.baseUrl, productData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error creating product');
      }
      throw new Error('Error creating product');
    }
  }

  async getProduct(id: string): Promise<ProductResponseDto> {
    try {
      const response = await axios.get<ProductResponseDto>(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error fetching product');
      }
      throw new Error('Error fetching product');
    }
  }

  async updateProduct(id: string, productData: UpdateProductDto): Promise<ProductResponseDto> {
    try {
      const response = await axios.put<ProductResponseDto>(`${this.baseUrl}/${id}`, productData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error updating product');
      }
      throw new Error('Error updating product');
    }
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error deleting product');
      }
      throw new Error('Error deleting product');
    }
  }
}

// === ARCHIVO: client/src/features/products/types/product.types.ts ===
export interface CreateProductDto {
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
}

export interface ProductResponseDto {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export type Product = ProductResponseDto;

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ProductValidationError {
  field: string;
  message: string;
}

export interface ProductFormData {
  name: string;
  price: string | number;
  stock: string | number;
  category: string;
}

export const PRODUCT_CATEGORIES = [
  'electronics',
  'clothing',
  'food',
  'books',
  'home',
  'sports',
  'toys',
  'other'
] as const;

export type ProductCategory = typeof PRODUCT_CATEGORIES[number];

export const isValidCategory = (category: string): category is ProductCategory => {
  return PRODUCT_CATEGORIES.includes(category as ProductCategory);
};

export const createEmptyProduct = (): ProductFormData => ({
  name: '',
  price: '',
  stock: '',
  category: ''
});

export const productToFormData = (product: Product): ProductFormData => ({
  name: product.name,
  price: product.price,
  stock: product.stock,
  category: product.category
});

export const formDataToCreateDto = (formData: ProductFormData): CreateProductDto => ({
  name: formData.name.trim(),
  price: Number(formData.price),
  stock: Number(formData.stock),
  category: formData.category
});

export const formDataToUpdateDto = (formData: ProductFormData): UpdateProductDto => {
  const updateData: UpdateProductDto = {};
  
  if (formData.name.trim()) {
    updateData.name = formData.name.trim();
  }
  if (formData.price !== '') {
    updateData.price = Number(formData.price);
  }
  if (formData.stock !== '') {
    updateData.stock = Number(formData.stock);
  }
  if (formData.category) {
    updateData.category = formData.category;
  }
  
  return updateData;
};

export const validateProductForm = (formData: ProductFormData): ProductValidationError[] => {
  const errors: ProductValidationError[] = [];
  
  if (!formData.name || formData.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'El nombre del producto es requerido' });
  } else if (formData.name.trim().length < 3) {
    errors.push({ field: 'name', message: 'El nombre debe tener al menos 3 caracteres' });
  } else if (formData.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'El nombre no puede exceder 100 caracteres' });
  }
  
  const price = Number(formData.price);
  if (formData.price === '' || isNaN(price)) {
    errors.push({ field: 'price', message: 'El precio es requerido' });
  } else if (price < 0) {
    errors.push({ field: 'price', message: 'El precio no puede ser negativo' });
  } else if (price > 999999.99) {
    errors.push({ field: 'price', message: 'El precio excede el límite permitido' });
  }
  
  const stock = Number(formData.stock);
  if (formData.stock === '' || isNaN(stock)) {
    errors.push({ field: 'stock', message: 'El stock es requerido' });
  } else if (stock < 0) {
    errors.push({ field: 'stock', message: 'El stock no puede ser negativo' });
  } else if (!Number.isInteger(stock)) {
    errors.push({ field: 'stock', message: 'El stock debe ser un número entero' });
  }
  
  if (!formData.category || formData.category.trim().length === 0) {
    errors.push({ field: 'category', message: 'La categoría es requerida' });
  } else if (!isValidCategory(formData.category)) {
    errors.push({ field: 'category', message: 'La categoría no es válida' });
  }
  
  return errors;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const formatStock = (stock: number): string => {
  if (stock === 0) {
    return 'Sin stock';
  }
  if (stock < 10) {
    return `Stock bajo (${stock})`;
  }
  return `Stock disponible (${stock})`;
};

export const getStockStatus = (stock: number): 'out-of-stock' | 'low-stock' | 'in-stock' => {
  if (stock === 0) {
    return 'out-of-stock';
  }
  if (stock < 10) {
    return 'low-stock';
  }
  return 'in-stock';
};

export const filterProducts = (products: Product[], filters: ProductFilters): Product[] => {
  return products.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    if (filters.minPrice !== undefined && product.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.inStock !== undefined) {
      if (filters.inStock && product.stock === 0) {
        return false;
      }
      if (!filters.inStock && product.stock > 0) {
        return false;
      }
    }
    
    return true;
  });
};

export const sortProducts = (
  products: Product[],
  sortBy: 'name' | 'price' | 'stock' | 'category',
  order: 'asc' | 'desc' = 'asc'
): Product[] => {
  const sorted = [...products].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'stock':
        comparison = a.stock - b.stock;
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
    }
    
    return order === 'asc' ? comparison : -comparison;
  });
  
  return sorted;
};

// === ARCHIVO: client/src/features/products/components/ProductTable.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';
import { ProductResponseDto } from '../types/product.types';
import { useDeleteProduct } from '../hooks/useDeleteProduct';
import { useUpdateProduct } from '../hooks/useUpdateProduct';

interface ProductTableProps {
  products: ProductResponseDto[];
  onProductDeleted?: (id: string) => void;
  onProductUpdated?: (product: ProductResponseDto) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onProductDeleted,
  onProductUpdated,
}) => {
  throw new Error('TODO(reto): anonymous');
};

// === ARCHIVO: client/src/App.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React, { useState, useEffect } from 'react';
import { ProductTable } from './features/products/components/ProductTable';
import { ProductService } from './features/products/services/ProductService';
import { CreateProductDto, ProductResponseDto } from './features/products/types/product.types';

const productService = new ProductService();

const App: React.FC = () => {
  throw new Error('TODO(reto): App');
};

export default App;

// === ARCHIVO: .run/api.run.xml ===
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="api" type="js.build_tools.npm" nameIsGenerated="false">
    <package-json value="$PROJECT_DIR$/api/package.json" />
    <command value="run" />
    <scripts>
      <script value="start" />
    </scripts>
    <node-interpreter value="project" />
    <envs>
      <env name="DYNAMODB_ENDPOINT" value="http://localhost:8000" />
      <env name="AWS_REGION" value="us-east-1" />
      <env name="AWS_ACCESS_KEY_ID" value="local" />
      <env name="AWS_SECRET_ACCESS_KEY" value="local" />
      <env name="MONGODB_URI" value="mongodb://localhost:27017/app" />
    </envs>
    <method v="2" />
  </configuration>
</component>


// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s
  mongo:
    image: "mongo:7.0.14"
    ports:
      - "127.0.0.1:27017:27017"
    environment:
      MONGO_INITDB_DATABASE: "app"
    volumes:
      - "./infra-local/mongo/init.js:/docker-entrypoint-initdb.d/init.js:ro"
    healthcheck:
      test: ["CMD","mongosh","--quiet","--eval","db.adminCommand('ping').ok"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 20s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |
| MongoDB | `mongo:7.0.14` | 27017 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"


// === ARCHIVO: infra-local/mongo/init.js ===
// Se ejecuta una sola vez al crear el volumen de MongoDB (docker-entrypoint-initdb.d).
db = db.getSiblingDB('app');
db.createCollection('items');
db.items.createIndex({ name: 1 });

```
