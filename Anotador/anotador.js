console.log('Ejercicio anotador');

class Anotador {
  #titulo;
  #notas;

  constructor(titulo) {
    this.#titulo = titulo;
    this.#notas = [];
  }

  // Métodos

  agregarNota(nota) {
    this.#notas.push(nota);
  }

  actualizarNota(id, nota) {
    if (this.#notas[id] != nota){
      this.#notas[id] = nota;
    } else {
      console.log('La nota ya ha sido modificada');
    }
  }

  obtenerNota(id) {
    return this.#notas[id];
  }

  eliminarNota(id) {
    this.#notas.splice(id, 1);
  }

  eliminarNotas() {
    this.#notas = [];
  }

  listarNotas() {
    console.log(`${this.#titulo}`);
    let longitud = this.#notas.length;
    for (let i = 0; i < longitud; i++) {
      console.log(`${i + 1}. ${this.#notas[i]}`);
    }
  }

  getNotas() {
    return this.#notas;
  }
}

let blocNotas = new Anotador('Lista de la compra');
blocNotas.agregarNota('Leche');
blocNotas.agregarNota('Huevos');
blocNotas.agregarNota('Salchicha');
blocNotas.agregarNota('Pan');
blocNotas.listarNotas();
blocNotas.actualizarNota(0, "Leche desnatada");
blocNotas.listarNotas();
console.log(blocNotas.obtenerNota(2));
console.log(blocNotas.eliminarNota(1));
blocNotas.listarNotas();
blocNotas.eliminarNotas();

// Funciones para la interfaz

function actualizarLista() {
  const lista = document.getElementById('notasList');
  lista.innerHTML = ''; // Limpiar la lista
  blocNotas.getNotas().forEach((nota, index) => {
    const li = document.createElement('li');
    li.textContent = nota;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.onclick = () => {
      blocNotas.eliminarNota(index);
      actualizarLista();
    };
    li.appendChild(deleteBtn);
    lista.appendChild(li);
  });
}

function agregarNota() {
  const notaInput = document.getElementById('notaInput');
  const nota = notaInput.value.trim();
  if (nota !== '') {
    blocNotas.agregarNota(nota);
    notaInput.value = '';
    actualizarLista();
  }
}

function eliminarNotas() {
  blocNotas.eliminarNotas();
  actualizarLista();
}

// Inicializar la lista
actualizarLista();