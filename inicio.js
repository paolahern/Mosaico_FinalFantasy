class Inicio extends Phaser.Scene {

    constructor(){
        super("Inicio");
    }

    create(){

       // fondo con imagen
        let fondo = this.add.image(
            this.scale.width / 2,
            this.scale.height / 2,
            "fondo"
        );

        fondo.setDisplaySize(this.scale.width, this.scale.height);

        // titulo
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 120,
            "Descubrir la imagen",//cambio de mensaje 
            {
                fontSize: "60px",
                color: "#d3f3ff"// cambio de color
            }
        ).setOrigin(0.5);

        // instrucciones
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 20,
            "Elimina las imagenes\npara descubrir el mensaje",
            {
                fontSize: "50px",
                align: "center",
                color: "#bbffd5"
            }
        ).setOrigin(0.5);

        // boton jugar
        let boton = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 + 80,
            "Jugar",
            {
                fontSize: "32px",
                color: "#3c3fff",//cambio de color
                backgroundColor: "#3f75eb", //cambio de color 
                padding: { x: 20, y: 10 }
            }
        ).setOrigin(0.5);

        boton.setInteractive();

        boton.on("pointerdown", () => {
            this.scene.start("Juego");
        });

        // efecto hover
        boton.on("pointerover", () => {
            boton.setStyle({ color: "#7cb1ff" });
        });

        boton.on("pointerout", () => {
            boton.setStyle({ color: "#ffffff" });
        });

    }

}
