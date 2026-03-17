export interface Montacargas {
  id: number;
  imagen:string;
  imagenes: string[];
  modelo: string;
  capacidad: string;
  para:string;
  tipo: string;
  disponible: boolean;
  detalles: string;
  
}

export const datos: Montacargas[] = [
  {
    id: 1,
    imagen:"/Montacargas/CPD-30-1.JPEG",
    imagenes:[],
    modelo: "CPD 30",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    detalles: "Detalles del montacargas 4",
    
  },{
    id: 2,
    imagen:"/Montacargas/FD-30.jpeg",
    imagenes:[
      "/Montacargas/FD-2.jpeg",
    ],
    modelo: "FD 30",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    detalles: "Detalles del montacargas 4",
    
  },{
    id: 3,
    imagen:"/Montacargas/Naranja-1.jpeg",
    imagenes:[
      "/Montacargas/Naranja-2.jpeg",
      "/Montacargas/Naranja-3.jpeg",
      "/Montacargas/Naranja-4.jpeg",
      "/Montacargas/Naranja-5.jpeg",
      "/Montacargas/Naranja-6.jpeg",
      "/Montacargas/Naranja-7.jpeg",
    ],
    modelo: "Montacargas Naranja",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    detalles: "Detalles del montacargas 4",
    
  },{
    id: 4,
    imagen:"/Montacargas/25.jpeg",
    imagenes:[],
    modelo: "CPD 25",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    detalles: "Detalles del montacargas 4",
    
  }
];