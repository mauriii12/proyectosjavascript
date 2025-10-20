*EJERCICIO 4*

*CALCULADORA*

En este ejercicio hice una calculadora con las operaciones básicas.
Usé encapsulación, ya que agrupé dentro de una clase todos los métodos que hacen las operaciones (sumar, restar, multiplicar, dividir, etc.).
De esta forma, toda la lógica de la calculadora queda dentro de la clase y desde afuera solo se usan los métodos necesarios, sin ver cómo funcionan por dentro.

También apliqué abstracción, porque representé el concepto de “calculadora” de una forma general. El usuario del programa no necesita saber cómo se hacen las operaciones internamente, solo usa los métodos y obtiene el resultado.

No usé herencia ni polimorfismo, porque no era necesario. En este caso, todas las operaciones eran simples y pertenecían a una misma clase. Agregar herencia solo habría hecho el código más complicado sin aportar mucho.

*LISTA DE TAREAS*

Usé encapsulación al crear el prototipo de Tarea, ya que ahí guardé todas las propiedades (como título, descripción, dificultad y estado) junto la funcion de mostrarTarea que es la manera en la que se muestra la tarea,en esta utilice el prototipo de tarea ya que es mas facil y rapido hacer las comparaciones con el this,no lo hice con el gestor de tareas ya que no necesitaba de ningun elemento de ese prototipo,Y tambien lo separe para la modularizacion sea mas prolija.

Despues en el prototipo Gestortarea guarde la cantidad de tarea y las tareas en si,esto para evitar tener variables globales.Esto hace una herencia prototipica en los metodos editarTarea,crearTarea,buscarTarea,borrarTarea,verTareas.


También apliqué abstracción, porque el prototipo representa el concepto de una tarea en general, sin mostrar cómo se manejan los datos internamente. El programa solo usa los métodos del prototipo sin preocuparse por los detalles.

Además, este ejercicio usa herencia prototípica, porque todos los objetos creados a partir de Tarea heredan los métodos del prototipo. Así, todas las tareas comparten las mismas funciones sin tener que copiarlas.

No apliqué polimorfismo, ya que todas las tareas se comportan igual. Si más adelante quisiera agregar distintos tipos de tareas (por ejemplo, tareas urgentes o normales), ahí sí podría aplicarlo.Usé encapsulación al crear el prototipo de Tarea, ya que ahí guardé todas las propiedades (como título, descripción, dificultad y estado) junto con sus funciones (como mostrar o editar).
Esto hace que cada tarea tenga su propia información y métodos sin depender de variables globales.

