### ──── Datos personales y de curso ────
Patricio Peralta, Curso de Desarrollo con Angular, Unidad 1.
### ──── Datos de la generación del proyecto y uso ────
ProyectoClase1
Este proyecto fue generado mediante la herramienta Angular CLI versión 21.2.11.
Servidor de desarrollo
Para iniciar un servidor de desarrollo local, ejecutá el siguiente comando:

bash
ng serve

Una vez que el servidor esté en funcionamiento, abrí tu navegador y entrá a la dirección http://localhost:4200/. La aplicación se recargará automáticamente cada vez que modifiques cualquiera de los archivos del código.
Generación de código
Angular CLI incluye herramientas muy útiles para generar las partes de tu proyecto. Para crear un nuevo componente, ejecutá:

bash
ng generate component nombre-del-componente

Para ver la lista completa de elementos que podés generar (como componentes, directivas o tuberías), usá:

bash
ng generate --help

Generar la versión para producción
Para preparar y compilar el proyecto, ejecutá:

bash
ng build

Esto compilará tu proyecto y guardará los archivos finales en la carpeta dist/. Por defecto, esta versión de producción viene optimizada para funcionar lo más rápido y eficientemente posible.
Ejecutar pruebas unitarias
Para realizar pruebas unitarias con el entorno de pruebas Vitest, usá el comando:

bash
ng test

Ejecutar pruebas de extremo a extremo
Para realizar pruebas que revisen el funcionamiento completo de la aplicación de principio a fin, ejecutá:

bash
ng e2e


Para clonar el proyecto desde Github, ubicate en la carpeta y ejecutá:

git clone https://github.com/Patpicard/Angular1.git

---

src/app: Todo el código de  aplicación, componentes, servicios, módulos.

app.component.ts: Componente principal
app.module.ts: Módulo raíz, define qué usa la app.
assets/: Archivos estáticos: imágenes, fuentes, estilos.
environments/: Configuraciones distintas para desarrollo y/o test y producción.
Esta última ya no se crea automáticamente hay q tirar el comando ng generate environments
---
la variable es protected  variable: string = "->Esta es la variable<---";
---
La imagen de remplazo al al de angular, extraída de la tapa el albún de Angien de Potrine vol I

La imagen del ejercicio, es propia.

capturas:

![Vista previa del proyecto](./public/etc/Angular%20clase%201_1.jpg)
![Vista previa del proyecto](./public/etc/Angular%20clase%201_2.jpg)




