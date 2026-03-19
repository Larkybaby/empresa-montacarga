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
    imagen:"/Montacargas/CPD-30-1.png",
    imagenes:[
      "/Montacargas/CPD-2.png",
      "/Montacargas/CPD-3.png",
      "/Montacargas/MD2.png",
      "/Montacargas/MD3.png",
      "/Montacargas/MD4.png",
      "/Montacargas/MD5.png",
      "/Montacargas/MD6.png",
      "/Montacargas/MD7.png",
      "/Montacargas/MD8.png",
      "/Montacargas/MD9.png",
    ],
    modelo: "CPD 30",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    detalles: "Detalles del montacargas 4",
    
  },{
    id: 2,
    imagen:"/Montacargas/FD-30.png",
    imagenes:[
      "/Montacargas/FD-2.png",
      "/Montacargas/FD-3.png",
      "/Montacargas/FD-4.png",
      "/Montacargas/FD-5.png",
      "/Montacargas/FD-6.png",
      "/Montacargas/FD-7.png",
      "/Montacargas/FD-8.png",
       "/Montacargas/MD10.png",
      "/Montacargas/MD11.png",
      "/Montacargas/MD12.png",
      "/Montacargas/MD13.png",
      
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
    
  },/*
  {
    id: 5,
    imagen:"/Montacargas/MD1.png",
    imagenes:[
      "/Montacargas/MD2.png",
      "/Montacargas/MD3.png",
      "/Montacargas/MD4.png",
      "/Montacargas/MD5.png",
      "/Montacargas/MD6.png",
      "/Montacargas/MD7.png",
      "/Montacargas/MD8.png",
      "/Montacargas/MD9.png",
      "/Montacargas/MD10.png",
      "/Montacargas/MD11.png",
      "/Montacargas/MD12.png",
      "/Montacargas/MD13.png",
    ],
    modelo: "MD",
    capacidad: " toneladas",
    para:"venta",
    tipo: "Gas",
    disponible: true,
    detalles: "Detalles del montacargas 5",
  }*/
];