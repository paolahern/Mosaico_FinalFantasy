// escena donde ocurre el juego principal
class Juego extends Phaser.Scene {

    constructor(){
        super("Juego");
    }

    create(){

        // TEXTO OCULTO DETRAS
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            "Felicidades",
            {
                fontSize: "50px",
                color: "#ffff00"
            }
        ).setOrigin(0.5);

        // VARIABLES DE PUNTOS
        this.puntos = 0;

        // TEXTO DE PUNTOS
        this.textoPuntos = this.add.text(
            20,
            20,
            "Puntos: 0",
            {
                fontSize: "28px",
                color: "#ffffff"
            }
        );

        // GRUPO DE IMAGENES
        this.cubierta = this.add.group();

        // ARREGLO DE IMAGENES POSIBLES
        this.imagenesJuego = [
            "1",
            "2",
            "3"
        ];

// TAMAÑO DE LAS CELDAS el tamaño se adapte al dispositivo y siempre haya espacio para imágenes
let tamaño = Math.min(this.scale.width, this.scale.height) / 3;

// calcular columnas y filas
let columnas = Math.floor(this.scale.width / tamaño);
let filas = Math.floor(this.scale.height / tamaño);

// calcular espacio sobrante para centrar
let offsetX = (this.scale.width - (columnas * tamaño)) / 2;
let offsetY = (this.scale.height - (filas * tamaño)) / 2;

// CREAR CUADRICULA CENTRADA como se va a distribuiur las imagenes tambien on el tamaño que le corresponde a cada una 
for (let x = 0; x < columnas; x++){

    for (let y = 0; y < filas; y++){

        let imagenRandom = Phaser.Utils.Array.GetRandom(this.imagenesJuego);

        let posX = offsetX + x * tamaño + tamaño / 2;
        let posY = offsetY + y * tamaño + tamaño / 2;

        let img = this.add.image(posX, posY, imagenRandom);

        img.setDisplaySize(tamaño, tamaño);
        img.setInteractive();

        this.cubierta.add(img);

                // EVENTO CLICK permite saber si se presiono el boton y que ocasiona en este caso la suma de muntos depediendo
                //de la imagen 
                img.on("pointerdown", () => {

                    // SISTEMA DE PUNTOS
                    if (img.texture.key === "1"){
                        this.puntos += 1;
                    }

                    if (img.texture.key === "2"){
                        this.puntos += 2;
                    }

                    if (img.texture.key === "3"){
                        this.puntos += 3;
                    }

                    // ACTUALIZAR TEXTO
                    this.textoPuntos.setText("Puntos: " + this.puntos);

                    // ANIMACION DE DESAPARECER
                    this.tweens.add({
                        targets: img,
                        scale: 0,
                        duration: 200,
                        onComplete: () => {

                            img.destroy();

                    // VERIFICAR SI YA NO QUEDAN
                    if (this.cubierta.countActive(true) === 0){

                        this.add.text(
                            this.scale.width / 2,
                            120,
                            "Ganaste",
                            {
                                fontSize: "40px",
                                color: "#ffffff"
                            }
                        ).setOrigin(0.5);

                    }
                }
                   
                      })
                
                });

            }

        }

        // BOTON REINICIAR es el que esta arriba a la izquierda donde se determina
        ///su tamaño y posicionamiento en la pantalla
        let botonReiniciar = this.add.text(
            this.scale.width - 120,
            50,
            "Reiniciar",
            {
                fontSize: "24px",
                backgroundColor: "#A8E6A3",//cambio de color
                color: "#000",//cambio de color 
                padding: { x: 10, y: 5 }
            }
        );

        botonReiniciar.setInteractive();

        botonReiniciar.on("pointerdown", () => {

            this.scene.restart();

        });

    }


}

