var loquetenes;

var paraellos;// 0 - Ambos --  1- Hombres -- 2-Mujeres
var complejidad;// S- Simple --- M- Mediana --- C-Complejo

var componentes = ["aguardiente", "aguardiente de cereza", "amaretto", "baileys", "bitter angostura", "brandy", "cachaca", "campari", "cerveza", "cervezanegra", "cointreau", "vodka", "ron", "ron blanco", "ron dorado", "malibu", "fernet", "gin", "tequila", "whisky", "whisky irlandes", "jagermeister", "vermouth", "vermouth bianco", "vermouth dry", "gancia", "pisco", "sweet and sour", "cognac", "old fashioned", "champagne", "martini rosso", "martinidry", "triplesec", "tiamaria", "blue curacao", "licor de melon", "licor de manzana verde", "licor de cafe", "licor de dulce de leche", "licor de manzana", "licor de frutilla", "naranjas", "banana", "cola", "sprite", "fanta", "jugo de naranja", "jugo de manzana", "anana", "limones", "manzanas", "leche condensada", "leche", "agua tonica", "menta", "agua con gas", "granadina", "jugo de durazno", "leche de coco", "jugo de tomate", "jugo de arandanos"];
var x, y;
var destornillador = {nombre: 'Destornillador', descripcion: '', tipo: 'Classic', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/destornillador.jpg', paraellos: 2, dificultad:'S'};
var gintonic = {nombre: 'Gintonic', descripcion: '', tipo: 'Classic', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/gintonic.jpg', paraellos: 1, dificultad:'S'};
var fernetcola = {nombre: 'Fernetcola', descripcion: '', tipo: 'Classic', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/fernetcola.jpg', paraellos: 0, dificultad:'S'};
var ElixirdeMoises = {nombre: 'Elixir de Moises', descripcion: '', tipo: 'Classic', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/elixirdemoises.jpg', paraellos: 1, dificultad:'C'};
var Ganciabatido = {nombre: 'Gancia batido', descripcion: '', tipo: 'Classic', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/ganciabatido.jpg', paraellos: 2, dificultad:'M'};
var Whiscola = {nombre: 'Whiscola', descripcion: '', tipo: 'Classic', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/whiscola.jpg', paraellos: 1, dificultad:'S'};
var Mojito = {nombre: 'Mojito', descripcion: '', tipo: 'Classic', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/mojito.jpg', paraellos: 0, dificultad:'M'};
var TequilaSunrise = {nombre: 'Tequila Sunrise', descripcion: '', tipo: 'Modern', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/tequilasunrise.jpg', paraellos: 2, dificultad:'M'};
var BatidaBrasilera = {nombre: 'Batida Brasilera', descripcion: '', tipo: 'Modern', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/batidabrasilera.jpg', paraellos: 2, dificultad:'C'};
var Margarita = {nombre: 'Margarita', descripcion: '', tipo: 'Modern', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/margarita.jpg', paraellos: 0, dificultad:'C'};
var Pinacolada = {nombre: 'Piña colada', descripcion: '', tipo: 'Modern', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], receta: '', imagen: 'undefined', paraellos: 2, dificultad:'C'};
var PiscoSour = {nombre: 'Pisco Sour', descripcion: '', tipo: 'Modern', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/piscosour.jpg', paraellos: 1, dificultad:'M'};
var Hurricane = {nombre: 'Hurricane', descripcion: '', tipo: 'American', alcohol: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], receta: '', imagen: 'fotostragos/hurricane.jpg', paraellos: 2, dificultad:'M'};
var AtomicGreen = {nombre: 'Atomic Green', descripcion: '', tipo: 'American', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/atomicgreen.jpg', paraellos: 1, dificultad:'C'};
var LongIslandIceTea = {nombre: 'Long Island Ice Tea', descripcion: '', tipo: 'American', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/longislandicetea.jpg', paraellos: 2, dificultad:'C'};
var Madonna = {nombre: 'Madonna', descripcion: '', tipo: 'American', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], receta: 'null', imagen: 'fotostragos/madonna.jpg', paraellos: 2, dificultad:'M'};
var Metropolitan = {nombre: 'Metropolitan', descripcion: '', tipo: 'American', alcohol: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/metropolitan.jpg', paraellos: 2, dificultad:'M'};
var ArcoIris = {nombre: 'Arco Iris', descripcion: '', tipo: 'American', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/arcoiris.jpg', paraellos: 2, dificultad:'M'};
var BlindMelon = {nombre: 'Blind Melon', descripcion: '', tipo: 'American', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/blindmelon.jpg', paraellos: 2, dificultad:'C'};
var B52 = {nombre: 'B 52', descripcion: '', tipo: 'Shooter', alcohol: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/b52.jpg', paraellos: 1, dificultad:'M'};
var MonkeyBrain = {nombre: 'Monkey Brain', descripcion: '', tipo: 'Shooter', alcohol: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/monkeybrain.jpg', paraellos: 1, dificultad:'C'};
var TocToc = {nombre: 'Toc-Toc', descripcion: '', tipo: 'Shooter', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/toctoc.jpg', paraellos: 0, dificultad:'S'};
var ABC = {nombre: 'ABC', descripcion: '', tipo: 'Shooter', alcohol: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/abc.jpg', paraellos: 0, dificultad:'S'};
var GreenDemon = {nombre: 'Green Demon', descripcion: '', tipo: 'Shooter', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/greendemon.jpg', paraellos: 0, dificultad:'C'};
var Diablitos = {nombre: 'Diablitos', descripcion: '', tipo: 'Shooter', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/diablitos.jpg', paraellos: 0, dificultad:'M'};
var LuzPurpura = {nombre: 'Luz Purpura', descripcion: '', tipo: 'Shooter', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/luzpurpura.jpg', paraellos: 2, dificultad:'M'};
var Manhattan = {nombre: 'Manhattan', descripcion: '', tipo: 'Internacional', alcohol: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/manhattan.jpg', paraellos: 1, dificultad:'S'};
var BloodyMary = {nombre: 'Bloody Mary', descripcion: '', tipo: 'Internacional', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], receta: 'null', imagen: 'fotostragos/bloodymary.jpg', paraellos: 1, dificultad:'M'};
var Negroni = {nombre: 'Negroni', descripcion: '', tipo: 'Internacional', alcohol: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/negroni.jpg', paraellos: 1, dificultad:'M'};
var WhiteLady = {nombre: 'White Lady', descripcion: '', tipo: 'Internacional', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/whitelady.jpg', paraellos: 0, dificultad:'C'};
var Oldfashioned = {nombre: 'Old fashioned', descripcion: '', tipo: 'Internacional', alcohol: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/oldfashioned.jpg', paraellos: 0, dificultad:'M'};
var Bronx = {nombre: 'Bronx', descripcion: '', tipo: 'Internacional', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/bronx.jpg', paraellos: true, dificultad:'M'};
var WhiteRussian = {nombre: 'White Russian', descripcion: '', tipo: 'Internacional', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/whiterussian.jpg', paraellos: 1, dificultad:'M'};
var VodkaMartini = {nombre: 'Vodka-Martini', descripcion: '', tipo: 'Martinis', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/vodkamartini.jpg', paraellos: 1, dificultad:'M'};
var VerydryMartini = {nombre: 'Very dry Martini', descripcion: '', tipo: 'Martinis', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/verydrymartini.jpg', paraellos: true, dificultad:'M'};
var SweetMartini = {nombre: 'Sweet Martini', descripcion: '', tipo: 'Martinis', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/sweetmartini.jpg', paraellos: 2, dificultad:'M'};
var SidecarClassic = {nombre: 'Sidecar Classic', descripcion: '', tipo: 'Martinis', alcohol: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/sidecarclassic.jpg', paraellos: true, dificultad:'M'};
var SangreyArena = {nombre: 'Sangre y Arena', descripcion: '', tipo: 'Martinis', alcohol: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/sangreyarena.jpg', paraellos: 1, dificultad:'M'};
var Liberty = {nombre: 'Liberty', descripcion: '', tipo: 'Martinis', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/liberty.jpg', paraellos: 0, dificultad:'M'};
var Mimosa = {nombre: 'Mimosa', descripcion: '', tipo: 'Martinis', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/mimosa.jpg', paraellos: 2, dificultad:'M'};
var Princesa = {nombre: 'Princesa', descripcion: '', tipo: 'Champagne', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/princesa.jpg', paraellos: 2, dificultad:'M'};
var BlackVelvet = {nombre: 'Black Velvet', descripcion: '', tipo: 'Champagne', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/blackvelvet.jpg', paraellos: 2, dificultad:'M'};
var BesodeFrutilla = {nombre: 'Beso de Frutilla', descripcion: '', tipo: 'Champagne', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], receta: 'null', imagen: 'fotostragos/besodefrutilla.jpg', paraellos: 2, dificultad:'M'};
var French75 = {nombre: 'French 75', descripcion: '', tipo: 'Champagne', alcohol: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], receta: 'null', imagen: 'fotostragos/french75.jpg', paraellos: 1, dificultad:'M'};







var lostragos = [destornillador, BatidaBrasilera, ElixirdeMoises, Ganciabatido, Margarita, Mojito, TequilaSunrise, Whiscola, fernetcola, gintonic, ABC, ArcoIris, AtomicGreen, B52, BlindMelon, Diablitos, GreenDemon, Hurricane, LongIslandIceTea, LuzPurpura, Madonna, Metropolitan, Manhattan, BloodyMary, Negroni, WhiteLady, Oldfashioned, Bronx, WhiteRussian, VodkaMartini, VerydryMartini, SweetMartini, SidecarClassic, SangreyArena, Liberty, Mimosa, Princesa, BlackVelvet, BesodeFrutilla, French75];









/*for (i = 0; i < componentes.length; i++) {
 var string = "<li> <input type = 'checkbox' id ='"+i+"' class = 'custom' value = '2'>" +
 "<label for = '"+i+"'>"+ componentes[i] +"</label>" +
 "</li>";
 console.log(string);
 }*/