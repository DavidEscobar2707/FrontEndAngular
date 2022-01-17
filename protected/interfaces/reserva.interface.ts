export interface ReservaResponse {
    _id:          string;
    usuario:      Producto;
    fechaInicial: Date;
    fechaFinal:   Date;
    disponible:   boolean;
    producto:     Producto;
}

export interface Producto {
    _id:    string;
    nombre: string;
}
