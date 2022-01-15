
// To parse this data:
//
//   import { Convert, AuthResponse } from "./file";
//
//   const authResponse = Convert.toAuthResponse(json);

export interface AuthResponse {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    nombre:         string;
    nombreCompleto: string;
    pais:           string;
    ciudad:         string;
    correo:         string;
    rol:            string;
    estado?:         boolean;
    password?:      string;
    imagen?:         string;
    uid:            string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAuthResponse(json: string): AuthResponse {
        return JSON.parse(json);
    }

    public static authResponseToJson(value: AuthResponse): string {
        return JSON.stringify(value);
    }
}
