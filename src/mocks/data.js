export const destinations = [
  {
    id: 'atacama',
    nombre: 'San Pedro de Atacama',
    pais: 'Chile',
    paisaje: 'Desierto',
    icono: '☀',
    actividades: ['Ver las estrellas', 'Recorrer el Valle de la Luna', 'Visitar los géiseres del Tatio'],
  },
  {
    id: 'chiloe',
    nombre: 'Chiloé',
    pais: 'Chile',
    paisaje: 'Archipiélago',
    icono: '≈',
    actividades: ['Pasear entre palafitos', 'Probar un curanto', 'Recorrer las iglesias de madera'],
  },
  {
    id: 'patagonia',
    nombre: 'Torres del Paine',
    pais: 'Chile',
    paisaje: 'Montaña',
    icono: '▲',
    actividades: ['Caminar hasta Base Torres', 'Navegar por el lago Grey', 'Avistar guanacos'],
  },
]

export const travelOptions = {
  atacama: {
    vuelos: [
      { id: 'ata-v1', aerolinea: 'Aire de Otro Planeta', origen: 'Santiago (SCL)', llegada: '2027-01-15', salida: '2027-01-15', precio: 62900, moneda: 'CLP', disponibilidad: 8 },
      { id: 'ata-v2', aerolinea: 'Cóndor con Prisa', origen: 'Santiago (SCL)', llegada: '2027-01-16', salida: '2027-01-16', precio: 74900, moneda: 'CLP', disponibilidad: 4 },
    ],
    hoteles: [
      { id: 'ata-h1', nombre: 'Posada El Cactus Tímido', entrada: '2027-01-15', salida: '2027-01-18', precio: 156000, moneda: 'CLP', disponibilidad: 5 },
      { id: 'ata-h2', nombre: 'Refugio Siesta Lunar', entrada: '2027-01-16', salida: '2027-01-19', precio: 180000, moneda: 'CLP', disponibilidad: 0 },
    ],
  },
  chiloe: {
    vuelos: [
      { id: 'chi-v1', aerolinea: 'Pudú Express', origen: 'Santiago (SCL)', llegada: '2027-02-05', salida: '2027-02-05', precio: 73900, moneda: 'CLP', disponibilidad: 7 },
      { id: 'chi-v2', aerolinea: 'Alerce al Aire', origen: 'Santiago (SCL)', llegada: '2027-02-06', salida: '2027-02-06', precio: 81900, moneda: 'CLP', disponibilidad: 3 },
    ],
    hoteles: [
      { id: 'chi-h1', nombre: 'Hostal Llueve Bajito', entrada: '2027-02-05', salida: '2027-02-08', precio: 135000, moneda: 'CLP', disponibilidad: 4 },
      { id: 'chi-h2', nombre: 'Palafito Patas Largas', entrada: '2027-02-06', salida: '2027-02-09', precio: 168000, moneda: 'CLP', disponibilidad: 2 },
    ],
  },
  patagonia: {
    vuelos: [
      { id: 'pat-v1', aerolinea: 'Guanaco Volador', origen: 'Santiago (SCL)', llegada: '2027-02-19', salida: '2027-02-19', precio: 104900, moneda: 'CLP', disponibilidad: 6 },
      { id: 'pat-v2', aerolinea: 'Viento de Cola', origen: 'Santiago (SCL)', llegada: '2027-02-20', salida: '2027-02-20', precio: 119900, moneda: 'CLP', disponibilidad: 3 },
    ],
    hoteles: [
      { id: 'pat-h1', nombre: 'Refugio Calcetín Seco', entrada: '2027-02-19', salida: '2027-02-22', precio: 222000, moneda: 'CLP', disponibilidad: 4 },
      { id: 'pat-h2', nombre: 'Hostería Abrígate Bien', entrada: '2027-02-20', salida: '2027-02-23', precio: 258000, moneda: 'CLP', disponibilidad: 2 },
    ],
  },
}
