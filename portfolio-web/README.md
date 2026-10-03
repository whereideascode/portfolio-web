# Portfolio Web — Carolina Ekombo

Portfolio personal desarrollado como parte de mi formación como desarrolladora Full Stack.

El proyecto tiene como objetivo presentar de forma clara y visual mi perfil profesional, las tecnologías con las que trabajo, mis proyectos y mis objetivos dentro del desarrollo web.

Actualmente se encuentra **en desarrollo**.

## 👩‍💻 Sobre el proyecto

Este portfolio está siendo desarrollado desde cero como proyecto práctico para aplicar y consolidar conocimientos de desarrollo frontend, diseño responsive, accesibilidad y experiencia de usuario.

La interfaz estará organizada en tres áreas principales:

* **01 — About**
* **02 — Projects**
* **03 — Goals**

El objetivo es que una persona que visite el portfolio pueda identificar rápidamente quién soy, qué estoy aprendiendo, qué tecnologías utilizo y qué proyectos estoy desarrollando.

La interfaz principal estará en inglés para facilitar la comprensión del portfolio a visitantes internacionales.

## 📂 Estructura actual

El portfolio cuenta actualmente con una estructura HTML semántica formada por:

* `header`

  * Nombre.
  * Perfil profesional.
  * Enlace a GitHub.

* `main`

  * Navegación principal.

* **About**

  * Presentación.
  * Formación.
  * Stack actual.

* **Projects**

  * Tarot App.
  * Portfolio profesional.
  * Trabajos realizados durante mi formación.

* **Goals**

  * Objetivo profesional.
  * Oportunidades que busco.

* `footer`

La estructura se irá adaptando durante el desarrollo para implementar el nuevo sistema de paneles interactivos.

## 🛠️ Tecnologías

Actualmente el proyecto utiliza:

* HTML5
* JavaScript
* Sass / SCSS
* Vite
* Git
* GitHub

El proyecto utiliza **JavaScript vanilla**, sin frameworks frontend.

## 🎨 Diseño previsto

El portfolio utilizará una interfaz basada en tres paneles numerados:

* `01 — About`
* `02 — Projects`
* `03 — Goals`

Los tres apartados estarán visibles desde la interfaz principal para que el visitante pueda comprender la estructura del portfolio de un vistazo.

El diseño seguirá un enfoque **mobile first** y adaptará su composición al espacio disponible.

### Desktop

Los tres paneles se mostrarán horizontalmente.

Al seleccionar uno de ellos, el panel activo podrá expandirse mientras los demás se contraen, manteniendo visible la navegación y el contexto de la página.

El `hover` se utilizará únicamente como microinteracción visual y no será necesario para acceder al contenido.

### Tablet

La interfaz conservará la identidad visual de los tres paneles, pero reducirá y reorganizará la información según el espacio disponible.

Al abrir una sección, el contenido tendrá mayor protagonismo y la navegación hacia las demás secciones continuará accesible.

### Mobile

Los paneles se organizarán verticalmente y podrán recorrerse mediante scroll.

La interacción principal se realizará mediante `tap`, permitiendo expandir cada sección para consultar su contenido.

El diseño móvil no dependerá de interacciones `hover`.

## ♿ UX y accesibilidad

El portfolio se desarrollará teniendo en cuenta diferentes formas de interacción:

* **Ratón:** clic y microinteracciones mediante hover.
* **Pantallas táctiles:** interacción mediante tap.
* **Teclado:** navegación mediante controles interactivos y estados de foco visibles.

Las animaciones tendrán una función visual y de orientación, pero no serán necesarias para comprender o utilizar la página.

Los breakpoints responsive se definirán según las necesidades reales del contenido y no exclusivamente según dispositivos concretos.

## 📌 Estado del proyecto

**En desarrollo.**

Actualmente se ha completado:

* Configuración inicial del proyecto con Vite.
* Eliminación de React para trabajar con JavaScript vanilla.
* Estructura semántica inicial en HTML.
* Navegación básica del portfolio.
* Enlace al perfil de GitHub.
* Configuración de Sass / SCSS.
* Integración de SCSS con Vite.
* Definición inicial de las tres áreas principales del portfolio.
* Diseño conceptual del nuevo sistema de paneles.
* Wireframe responsive para desktop, tablet y mobile.

Durante una fase experimental se exploró una navegación mediante sobres interactivos. Esta propuesta se descartó posteriormente para priorizar una interfaz más clara, accesible y adaptable a diferentes tamaños de pantalla.

## 🚀 Próximas fases

* Definir la identidad visual del portfolio.
* Elegir tipografía, paleta de color y estilo gráfico.
* Adaptar la estructura HTML al sistema `About / Projects / Goals`.
* Construir el layout siguiendo un enfoque mobile first.
* Desarrollar la adaptación para tablet.
* Desarrollar la composición de tres paneles para desktop.
* Implementar la apertura y cierre de paneles con JavaScript.
* Añadir transiciones y microinteracciones.
* Incorporar el contenido definitivo de cada sección.
* Mejorar la accesibilidad y navegación mediante teclado.
* Añadir recursos visuales a los proyectos.
* Realizar pruebas responsive.
* Optimizar el portfolio para producción.
* Publicar la versión online.

## 👤 Autora

**Carolina Ekombo**

Full Stack Developer in training.

GitHub: `whereideascode`
