// To parse this data:
//
//   import { Convert, ProductoResponse } from "./file";
//
//   const productoResponse = Convert.toProductoResponse(json);

export interface ProductoResponse {
    total:     number;
    productos: Producto[];
}

export interface Producto {
    _id:        string;
    nombre:     string;
    direccion:  string;
    pais:       string;
    ciudad:     string;
    telefono:   number;
    disponible: boolean;
    usuario:    Categoria;
    categoria:  Categoria;
    img?:       string;
}

export interface Categoria {
    _id:    string;
    nombre: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toProductoResponse(json: string): ProductoResponse {
        return JSON.parse(json);
    }

    public static productoResponseToJson(value: ProductoResponse): string {
        return JSON.stringify(value);
    }
}
