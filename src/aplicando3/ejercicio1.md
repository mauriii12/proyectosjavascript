*Considera el lenguaje JavaScript acotado al paradigma de programación orientada a objetos basado en prototipos y analízalo en términos de [los cuatro componentes de un paradigma](https://www.notion.so/Paradigmas-lenguajes-y-programas-f36d432c55274b93913dc289446f424d?pvs=21) mencionados por Kuhn.*

*1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?*
*2. Creencias de los profesionales:¿Qué características particulares del lenguaje se*
*cree que sean "mejores" que en otros lenguajes?*



*1. Generalización simbólica*

En JavaScript, cuando hablamos de su enfoque orientado a objetos basado en prototipos, las reglas del lenguaje no giran en torno a las clases tradicionales, como ocurre en Java o C++. En cambio, todo parte de los objetos. Cada objeto puede servir de modelo (o “prototipo”) para otros, y esa relación define cómo se heredan las propiedades y métodos.
Esto significa que no hay una jerarquía rígida de clases, sino una cadena de prototipos que conecta a los objetos entre sí. Las reglas básicas del lenguaje permiten crear objetos con Object.create(), definir constructores que actúan como “molde” y utilizar this para hacer referencia al contexto actual. Además, JavaScript permite modificar o ampliar objetos en cualquier momento, incluso después de haber sido creados. En otras palabras, sus reglas apuntan a un sistema flexible y dinámico, donde la herencia y la estructura del programa pueden cambiar según las necesidades del desarrollador.

*2. Creencias de los profesionales*

Entre quienes trabajan con JavaScript, suele existir la idea de que su modelo basado en prototipos es más libre y adaptable que el de otros lenguajes orientados a objetos. Muchos valoran que no sea necesario definir clases estrictas o estructuras fijas para lograr reutilización de código.
La flexibilidad es probablemente su rasgo más apreciado: cualquier objeto puede actuar como base para otro, y las propiedades o métodos pueden modificarse en tiempo real. Esto da lugar a un estilo de programación más vivo y experimental, que se ajusta bien al entorno web y a los cambios constantes que suelen darse en ese tipo de desarrollo.
También se valora su capacidad para combinar distintos paradigmas. JavaScript no obliga a pensar solo de forma orientada a objetos; se puede trabajar perfectamente con un enfoque funcional o imperativo cuando convenga. Esa mezcla es parte de su encanto y una de las razones por las que muchos desarrolladores lo consideran un lenguaje versátil, moderno y “de mente abierta”.