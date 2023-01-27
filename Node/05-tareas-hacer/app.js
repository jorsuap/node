require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer');
const Tarea = require('./model/tarea');
const Tareas = require('./model/tareas');

const main = async() => {
    
    let opt = '';
    let text = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB){// cargar tareas
      tareas.cargarTareas(tareasDB)
    }

    do {
      //imprime menu
      opt  = await inquirerMenu();
      switch (opt) {
        case '1':
            const desc = await leerInput('Descripcion: ');
            tareas.crearTarea(desc);
          break;
        case '2':
          tareas.listadoCompleto();
          break;
        case '3':
          tareas.listarPendienteCompletadas(true)
          break;
        case '4':
          tareas.listarPendienteCompletadas(false)
          break;
        case '5':
          const ids = await mostrarListadoCheckList(tareas.listadoArr);
          tareas.toggleCompletadas(ids);
          console.log(ids)
          break;
        case '6'://borrar
          const id = await listadoTareasBorrar(tareas.listadoArr);
          if (id !== '0'){
            if(id){
              const ok = await confirmar('Esta seguro?');
              tareas.borrarTarea(id);
              console.log('Tarea Borrada correctamente')
            }
          }
          break;
      }
      guardarDB(tareas.listadoArr);

      await pausa();
    } while (opt !== '0');
};

main();