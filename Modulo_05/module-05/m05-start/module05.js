/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
var BuildArray = /** @class */ (function () {
    // Definir el constructor
    function BuildArray(items, sortOrder) {
        this._items = items;
        this._sortOrder = sortOrder;
    }
    Object.defineProperty(BuildArray.prototype, "items", {
        // Definir los accesores
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildArray.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (sortOrder) {
            this._sortOrder = sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos de ordenamiento
    BuildArray.prototype.sortDescending = function (a, b) {
        if (a > b)
            return -1;
        if (b > a)
            return 1;
        return 0;
    };
    BuildArray.prototype.sortAscending = function (a, b) {
        if (a > b)
            return 1;
        if (b > a)
            return -1;
        return 0;
    };
    // Método para construir el array
    BuildArray.prototype.buildArray = function () {
        var randomNumbers = [];
        var nextNumber;
        // Generar números aleatorios y asegurarse de que no haya duplicados
        for (var counter = 0; counter < this.items; counter++) {
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
    };
    return BuildArray;
}());
// Instanciación de los objetos BuildArray
var testArray1 = new BuildArray(12, 'ascending');
var testArray2 = new BuildArray(8, 'descending');
// Mostrar los resultados llamando al método buildArray()
console.log(testArray1.buildArray()); // Muestra el array generado y ordenado en orden ascendente
console.log(testArray2.buildArray()); // Muestra el array generado y ordenado en orden descendente
