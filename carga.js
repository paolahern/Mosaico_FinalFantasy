class Carga extends Phaser.Scene {

    constructor(){
        super("Carga");
    }
// aqui es donde estan todos los elementos graficos que se deberan de cargar para el juego 
    preload(){

        // fondo de carga
        this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            this.scale.width,
            this.scale.height,
            0x222222
        );

        // texto
        let texto = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 50,
            "Cargando 0%",
            { fontSize: "30px", color: "#ffffff" }
        ).setOrigin(0.5);

        // barra fondo
        let barraFondo = this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            400,
            30,
            0x555555
        );

        // barra progreso
        let barra = this.add.rectangle(
            this.scale.width / 2 - 200,
            this.scale.height / 2,
            0,
            30,
            0xffff00
        ).setOrigin(0, 0.5);

        // archivos a cargar
        this.load.image("fondo", "../img/fondo.jpg");
        this.load.image("1", "../img/1.jpg");
        this.load.image("2", "../img/2.jpeg");
        this.load.image("3", "../img/3.jpg");

        // progreso de carga
        this.load.on("progress", (valor) => {

            let porcentaje = parseInt(valor * 100);

            texto.setText("Cargando " + porcentaje + "%");

            barra.width = 400 * valor;

        });

    }

    create(){

        // esperar un poco antes de cambiar de escena
        this.time.delayedCall(1500, () => {

            this.scene.start("Inicio");

        });

    }

}