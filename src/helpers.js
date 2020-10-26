export function formatofecha(date) {
    const dato = date.split(".")[0];
    const fecha = dato.split("T")[0];
    const mes = fecha.split("-")[1];
    const anio = fecha.split("-")[0];
    const dia = fecha.split("-")[2]
    console.log(mes);
    const hora = dato.split("T")[1];
    return [
      hora,
      "  ",
      dia,'/',
      mes,'/',
      anio
    ];
  }
export function mes(date){
    const dato = date.split(".")[0];
    const fecha = dato.split("T")[0];
    const mes = fecha.split("-")[1];
    switch (mes) {
        case 1:
            return `enero`;
        case 2:
            return 'febrero';
        case 3:
            return `marzo`;
        case 4:
            return `abril`;
        case 5:
            return `mayo`;
        case 6:
            return `junio`;
        case 7:
            return 'julio';
        case 8:
            return `agosto`;
        case 9:
            return `septiembre`;
        case 10:
            return `octubre`;
        case 11:
            return `noviembre`;
        case 12:
            return `diciembre`;
    
        default:
            return;
    }
}