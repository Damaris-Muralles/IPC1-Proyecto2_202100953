"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuarios = [
    {
        Usuario: "IPC1F",
        Password: "123"
    },
    {
        Usuario: "JS",
        Password: "234"
    },
    {
        Usuario: "Prueba",
        Password: "345"
    }
];
const Pokemon = [
    {
        Numero: "7",
        Nombre: "Squirtle",
        Tipo: "Agua",
        Imagen: "https://pngimg.com/uploads/pokemon/pokemon_PNG88.png",
        Ataque: "Pistola Agua"
    },
    {
        Numero: "158",
        Nombre: "Totodile",
        Tipo: "Agua",
        Imagen: "https://i.pinimg.com/originals/f0/89/7f/f0897f57e05ed84f2480cf9483ff009e.png",
        Ataque: "Pistola Agua"
    },
    {
        Numero: "183",
        Nombre: "Marill",
        Tipo: "Agua",
        Imagen: "https://i.pinimg.com/originals/25/3e/71/253e7196c97b0ad5ed5fe214d22e5c80.png",
        Ataque: "Acua Aro"
    },
    {
        Numero: "118",
        Nombre: "Goldeen",
        Tipo: "Agua",
        Imagen: "https://www.pngplay.com/wp-content/uploads/11/Goldeen-Pokemon-PNG-Photos.png",
        Ataque: "Hidropulso"
    },
    {
        Numero: "489",
        Nombre: "Phione",
        Tipo: "Agua",
        Imagen: "https://www.pngplay.com/wp-content/uploads/11/Phione-Pokemon-PNG-Photo-Image.png",
        Ataque: "Torbellino"
    },
    {
        Numero: "4",
        Nombre: "Charmander",
        Tipo: "Fuego",
        Imagen: "https://www.pngmart.com/files/13/Charmander-PNG-HD.png",
        Ataque: "Lanzallamas"
    },
    {
        Numero: "155",
        Nombre: "Cyndaquil",
        Tipo: "Fuego",
        Imagen: "https://www.pngplay.com/wp-content/uploads/10/Cyndaquil-Pokemon-PNG-HD-Quality.png",
        Ataque: "Rueda Fuego"
    },
    {
        Numero: "662",
        Nombre: "Fletchinder",
        Tipo: "Fuego",
        Imagen: "https://i.pinimg.com/originals/81/11/54/811154dc34448f409f216804ac8a1845.png",
        Ataque: "Ascuas"
    },
    {
        Numero: "37",
        Nombre: "Vulpix",
        Tipo: "Fuego",
        Imagen: "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/b/ba/latest/20180907174353/Vulpix_ilustraci%C3%B3n.png/1200px-Vulpix_ilustraci%C3%B3n.png",
        Ataque: "Lanzallamas"
    },
    {
        Numero: "255",
        Nombre: "Torchic",
        Tipo: "Fuego",
        Imagen: "https://www.pngplay.com/wp-content/uploads/12/Torchic-Pokemon-PNG-HD-Quality.png",
        Ataque: "Ascuas"
    },
    {
        Numero: "1",
        Nombre: "Bulbasaur",
        Tipo: "Planta",
        Imagen: "https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-HD-Quality.png",
        Ataque: "Látigo Cepa"
    },
    {
        Numero: "152",
        Nombre: "Chikorita",
        Tipo: "Planta",
        Imagen: "https://www.pngplay.com/wp-content/uploads/10/Chikorita-Pokemon-Transparent-File.png",
        Ataque: "Hoja Afilada"
    },
    {
        Numero: "158",
        Nombre: "Bellossom",
        Tipo: "Planta",
        Imagen: "https://images.wikidexcdn.net/mwuploads/esssbwiki/a/a6/latest/20220119213400/Bellossom_Ilustraci%C3%B3n.png",
        Ataque: "Tormenta Floral"
    },
    {
        Numero: "252",
        Nombre: "Treecko",
        Tipo: "Planta",
        Imagen: "https://www.pngplay.com/wp-content/uploads/12/Treecko-Pokemon-PNG-HD-Images.png",
        Ataque: "Absorber"
    },
    {
        Numero: "187",
        Nombre: "Hoppip",
        Tipo: "Planta",
        Imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/90/latest/20151017011541/Hoppip.png/1200px-Hoppip.png",
        Ataque: "Somnífero"
    },
];
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/users', (req, res) => {
            res.send(Usuarios);
        });
        this.router.get('/Pokemon', (req, res) => {
            res.send(Pokemon);
        });
        this.router.get('/PokemonNumero/:Numero', (req, res) => {
            const poke = this.obtenerPorNumero(req.params.Numero);
            res.send(poke);
        });
        this.router.get('/PokemonNombre/:Nombre', (req, res) => {
            const poke = this.obtenerPorNombre(req.params.Nombre);
            res.send(poke);
        });
        this.router.get('/PokemonTipo/:Tipo', (req, res) => {
            var poke = this.obtenerPorTipo(req.params.Tipo);
            res.send(poke);
        });
    }
    obtenerPorNumero(Numero) {
        return Pokemon.find(dato => dato.Numero == Numero);
    }
    obtenerPorNombre(Nombre) {
        return Pokemon.find(dato => dato.Nombre == Nombre);
    }
    obtenerPorTipo(Tipo) {
       
        return Pokemon.filter(dato => dato.Tipo == Tipo)
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
