/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  sentido: 'abajo',
  direccion: 'vertical',
  sprites: {
    abajo: 'imagenes/auto_rojo_abajo.png',
    arriba: 'imagenes/auto_rojo_arriba.png',
    der: 'imagenes/auto_rojo_derecha.png',
    izq: 'imagenes/auto_rojo_izquierda.png'
  },
  direcciones: {
    abajo: 'vertical',
    arriba: 'vertical',
    der: 'horizontal',
    izq: 'horizontal'
  },
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function (sentido) {
    var movX = 0,
      movY = 0;
    // El movimiento esta determinado por la velocidad del jugador
    if (sentido == 'izq') {
      movX = -(this.velocidad);
    }
    if (sentido == 'arriba') {
      movY = -(this.velocidad);
    }
    if (sentido == 'der') {
      movX = this.velocidad;
    }
    if (sentido == 'abajo') {
      movY = this.velocidad;
    }
    if (Juego.chequearColisiones(movX + this.x, movY + this.y)) {
      this.x += movX;
      this.y += movY;
      this.cambiarsentido(sentido);
    }
  },

  cambiarsentido: function(sentido){
    if(sentido != this.sentido){
      this.sprite = this.sprites[sentido];
      this.setSentido(sentido);
    }
  },

  setSentido: function(sentido){
    this.sentido = sentido;
    if(this.direccion != this.direcciones[sentido]){
      this.direccion = this.direcciones[sentido];
      this.toggleDimensions();
    }
  },

  toggleDimensions: function(){
    var alto = this.alto;
    this.alto = this.ancho;
    this.ancho = alto;
  },

  modifVidas: function(cant){
    this.vidas += cant;
    console.log(this.vidas);
  }
}
