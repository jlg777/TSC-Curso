"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
class BuildArray {
    // Definir el constructor
    constructor(items, sortOrder) {
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // Definir los accesores
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
    // Métodos de ordenamiento
    sortDescending(a, b) {
        if (a > b)
            return -1;
        if (b > a)
            return 1;
        return 0;
    }
    sortAscending(a, b) {
        if (a > b)
            return 1;
        if (b > a)
            return -1;
        return 0;
    }
    // Método para construir el array
    buildArray() {
        let randomNumbers = [];
        let nextNumber;
        // Generar números aleatorios y asegurarse de que no haya duplicados
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * 100); // Generar números entre 1 y 100
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            }
            else {
                counter--; // Si el número ya existe, decrementamos el contador para intentar agregar otro
            }
        }
        // Ordenar el array según el orden especificado
        if (this._sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        }
        else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}
// Instanciación de los objetos BuildArray
let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');
// Mostrar los resultados llamando al método buildArray()
console.log(testArray1.buildArray()); // Muestra el array generado y ordenado en orden ascendente
console.log(testArray2.buildArray()); // Muestra el array generado y ordenado en orden descendente
