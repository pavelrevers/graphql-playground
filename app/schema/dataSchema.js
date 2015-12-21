import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLInterfaceType,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLList,
    GraphQLID
} from 'graphql';

var grass = "grass", water = "water", fire = "fire", bug = "bug",
  psychic = "psychic", flying = "flying", ghost = "ghost", fighting = "fighting",
  normal = "normal", poison = "poison", electric = "electric", ground = "ground",
  fairy = "fairy", rock = "rock", ice = "ice", dragon = "dragon";

export const Vendors = [
    {id: '1', name: 'Apple'},
    {id: '2', name: 'Sony'},
    {id: '3', name: 'Samsung'},
];

export const Models = [
    {id: '1', name: 'iPhone 6', vendor: '1'},
    {id: '2', name: 'iPhone 5', vendor: '1'},
    {id: '3', name: 'iPhone 4', vendor: '1'},
    {id: '4', name: 'iPhone 3', vendor: '1'}
];

export const Offers = [
    {id: '1', name: 'iPhone 6', price: 40000, shop: '1', model: '1'},
    {id: '2', name: 'iPhone 5', price: 30000, shop: '2', model: '2'},
    {id: '3', name: 'iPhone 4', price: 20000, shop: '1', model: '3'},
    {id: '4', name: 'iPhone 3', price: 10000, shop: '3', model: '4'}
];

export const Shops = [
    {id: '1', name: 'Apple Store'},
    {id: '2', name: 'reStore'},
    {id: '3', name: 'Amazon'}
];

function getModelById(id) {
    console.log(id);
    return Models.filter(model => model.id === id)[0];
}

export const Pokemon = [
  { name : "Bulbasaur", type : grass, stage : 0, caught : 0, species : "Seed Pokemon"},
  { name : "Ivysaur", type : grass, stage : 3, caught : 0, species : "Seed Pokemon"},
  { name : "Venusaur", type : grass, stage : 5, caught : 0, species : "Seed Pokemon"},
  { name : "Charmander", type : fire, stage : 0, caught : 0, species : "Lizard Pokemon"},
  { name : "Charmeleon", type : fire, stage : 3, caught : 0, species : "Flame Pokemon"},
  { name : "Charizard", type : fire, stage : 5, caught : 0, species : "Flame Pokemon"},
  { name : "Squirtle", type : water, stage : 0, caught : 0, species : "Tiny Turtle Pokemon"},
  { name : "Wartortle", type : water, stage : 3, caught : 0, species : "Turtle Pokemon"},
  { name : "Blastoise", type : water, stage : 5, caught : 0, species : "Shellfish Pokemon"},
  { name : "Caterpie", type : bug, stage : 1, caught : 0, species : "Worm Pokemon"},
  { name : "Metapod", type : bug, stage : 2, caught : 0, species : "Cocoon Pokemon"},
  { name : "Butterfree", type : bug, stage : 4, caught : 0, species : "Butterfly Pokemon"},
  { name : "Weedle", type : bug, stage : 1, caught : 0, species : "Hairy Bug Pokemon"},
  { name : "Kakuna", type : bug, stage : 2, caught : 0, species : "Cocoon Pokemon"},
  { name : "Beedrill", type : bug, stage : 4, caught : 0, species : "Poison Bee Pokemon"},
  { name : "Pidgey", type : flying, stage : 1, caught : 0, species : "Tiny Bird Pokemon"},
  { name : "Pidgeotto", type : flying, stage : 3, caught : 0, species : "Bird Pokemon"},
  { name : "Pidgeot", type : flying, stage : 5, caught : 0, species : "Bird Pokemon"},
  { name : "Rattata", type : normal, stage : 1, caught : 0, species : "Mouse Pokemon"},
  { name : "Raticate", type : normal, stage : 2, caught : 0, species : "Mouse Pokemon"},
  { name : "Spearow", type : flying, stage : 1, caught : 0, species : "Tiny Bird Pokemon"},
  { name : "Fearow", type : flying, stage : 3, caught : 0, species : "Beak Pokemon"},
  { name : "Ekans", type : poison, stage : 1, caught : 0, species : "Snake Pokemon"},
  { name : "Arbok", type : poison, stage : 3, caught : 0, species : "Cobra Pokemon"},
  { name : "Pikachu", type : electric, stage : 1, caught : 0, species : "Mouse Pokemon"},
  { name : "Raichu", type : electric, stage : 3, caught : 0, species : "Mouse Pokemon"},
  { name : "Sandshrew", type : ground, stage : 1, caught : 0, species : "Mouse Pokemon"},
  { name : "Sandslash", type : ground, stage : 2, caught : 0, species : "Mouse Pokemon"},
  { name : "Nidoran F", type : poison, stage : 1, caught : 0, species : "Poison Pin Pokemon"},
  { name : "Nidorina", type : poison, stage : 2, caught : 0, species : "Poison Pin Pokemon"},
  { name : "Nidoqueen", type : poison, stage : 5, caught : 0, species : "Drill Pokemon"},
  { name : "Nidoran M", type : poison, stage : 1, caught : 0, species : "Poison Pin Pokemon"},
  { name : "Nidorino", type : poison, stage : 2, caught : 0, species : "Poison Pin Pokemon"},
  { name : "Nidoking", type : poison, stage : 5, caught : 0, species : "Drill Pokemon"},
  { name : "Clefairy", type : fairy, stage : 1, caught : 0, species : "Fairy Pokemon"},
  { name : "Clefable", type : fairy, stage : 3, caught : 0, species : "Fairy Pokemon"},
  { name : "Vuplix", type : fire, stage : 1, caught : 0, species : "Fox Pokemon"},
  { name : "Ninetales", type : fire, stage : 3, caught : 0, species : "Fox Pokemon"},
  { name : "Jigglypuff", type : fairy, stage : 1, caught : 0, species : "Balloon Pokemon"},
  { name : "Wigglytuff", type : fairy, stage : 3, caught : 0, species : "Balloon Pokemon"},
  { name : "Zubat", type : poison, stage : 1, caught : 0, species : "Bat Pokemon"},
  { name : "Golbat", type : poison, stage : 2, caught : 0, species : "Bat Pokemon"},
  { name : "Oddish", type : grass, stage : 1, caught : 0, species : "Weed Pokemon"},
  { name : "Gloom", type : grass, stage : 2, caught : 0, species : "Weed Pokemon"},
  { name : "Vileplume", type : grass, stage : 3, caught : 0, species : "Flower Pokemon"},
  { name : "Paras", type : bug, stage : 1, caught : 0, species : "Mushroom Pokemon"},
  { name : "Parasect", type : bug, stage : 2, caught : 0, species : "Mushroom Pokemon"},
  { name : "Venonat", type : bug, stage : 1, caught : 0, species : "Insect Pokemon"},
  { name : "Venomoth", type : bug, stage : 2, caught : 0, species : "Poison Moth Pokemon"},
  { name : "Diglett", type : ground, stage : 1, caught : 0, species : "Mole Pokemon"},
  { name : "Dugtrio", type : ground, stage : 2, caught : 0, species : "Mole Pokemon"},
  { name : "Meowth", type : normal, stage : 1, caught : 0, species : "Scratch Cat Pokemon"},
  { name : "Persian", type : normal, stage : 2, caught : 0, species : "Classy Cat Pokemon"},
  { name : "Psyduck", type : water, stage : 1, caught : 0, species : "Duck Pokemon"},
  { name : "Golduck", type : water, stage : 2, caught : 0, species : "Duck Pokemon"},
  { name : "Mankey", type : fighting, stage : 1, caught : 0, species : "Pig Monkey Pokemon"},
  { name : "Primeape", type : fighting, stage : 2, caught : 0, species : "Pig Monkey Pokemon"},
  { name : "Growlithe", type : fire, stage : 1, caught : 0, species : "Puppy Pokemon"},
  { name : "Arcanine", type : fire, stage : 2, caught : 0, species : "Legendary Pokemon"},
  { name : "Poliwag", type : water, stage : 1, caught : 0, species : "Tadpole Pokemon"},
  { name : "Poliwhirl", type : water, stage : 2, caught : 0, species : "Tadpole Pokemon"},
  { name : "Poliwrath", type : water, stage : 5, caught : 0, species : "Tadpole Pokemon"},
  { name : "Abra", type : psychic, stage : 1, caught : 0, species : "Psi Pokemon"},
  { name : "Kadabra", type : psychic, stage : 2, caught : 0, species : "Psi Pokemon"},
  { name : "Alakazam", type : psychic, stage : 5, caught : 0, species : "Psi Pokemon"},
  { name : "Machop", type : fighting, stage : 1, caught : 0, species : "Superpower Pokemon"},
  { name : "Machoke", type : fighting, stage : 2, caught : 0, species : "Superpower Pokemon"},
  { name : "Machamp", type : fighting, stage : 5, caught : 0, species : "Superpower Pokemon"},
  { name : "Bellsprout", type : grass, stage : 1, caught : 0, species : "Flower Pokemon"},
  { name : "Weepinbell", type : grass, stage : 3, caught : 0, species : "Flycatcher Pokemon"},
  { name : "Victreebel", type : grass, stage : 5, caught : 0, species : "Flycatcher Pokemon"},
  { name : "Tentacool", type : water, stage : 1, caught : 0, species : "Jellyfish Pokemon"},
  { name : "Tentacruel", type : water, stage : 3, caught : 0, species : "Jellyfish Pokemon"},
  { name : "Geodude", type : rock, stage : 1, caught : 0, species : "Rock Pokemon"},
  { name : "Graveler", type : rock, stage : 3, caught : 0, species : "Rock Pokemon"},
  { name : "Golem", type : rock, stage : 5, caught : 0, species : "Megaton Pokemon"},
  { name : "Ponyta", type : fire, stage : 2, caught : 0, species : "Fire Horse Pokemon"},
  { name : "Rapidash", type : fire, stage : 3, caught : 0, species : "Fire Horse Pokemon"},
  { name : "Slowpoke", type : water, stage : 2, caught : 0, species : "Dopey Pokemon"},
  { name : "Slowbro", type : water, stage : 3, caught : 0, species : "Hermit Crab Pokemon"},
  { name : "Magnemite", type : electric, stage : 2, caught : 0, species : "Magnet Pokemon"},
  { name : "Magneton", type : electric, stage : 3, caught : 0, species : "Magnet Pokemon"},
  { name : "Farfetch'd", type : flying, stage : 3, caught : 0, species : "Wild Duck Pokemon"},
  { name : "Doduo", type : flying, stage : 2, caught : 0, species : "Twin Bird Pokemon"},
  { name : "Dodrio", type : flying, stage : 4, caught : 0, species : "Triple Bird Pokemon"},
  { name : "Seel", type : water, stage : 3, caught : 0, species : "Sea Lion Pokemon"},
  { name : "Dewgong", type : ice, stage : 5, caught : 0, species : "Sea Lion Pokemon"},
  { name : "Grimer", type : poison, stage : 2, caught : 0, species : "Sludge Pokemon"},
  { name : "Muk", type : poison, stage : 4, caught : 0, species : "Sludge Pokemon"},
  { name : "Shellder", type : water, stage : 2, caught : 0, species : "Bivalve Pokemon"},
  { name : "Cloyster", type : ice, stage : 4, caught : 0, species : "Bivalve Pokemon"},
  { name : "Gastly", type : ghost, stage : 2, caught : 0, species : "Gas Pokemon"},
  { name : "Haunter", type : ghost, stage : 3, caught : 0, species : "Gas Pokemon"},
  { name : "Gengar", type : ghost, stage : 4, caught : 0, species : "Shadow Pokemon"},
  { name : "Onix", type : rock, stage : 3, caught : 0, species : "Rock Snake Pokemon"},
  { name : "Drozee", type : psychic, stage : 1, caught : 0, species : "Hypnosis Pokemon"},
  { name : "Hypno", type : psychic, stage : 3, caught : 0, species : "Hypnosis Pokemon"},
  { name : "Krabby", type : water, stage : 3, caught : 0, species : "River Crab Pokemon"},
  { name : "Kingler", type : water, stage : 4, caught : 0, species : "Pincer Pokemon"},
  { name : "Voltorb", type : electric, stage : 1, caught : 0, species : "Ball Pokemon"},
  { name : "Electrode", type : electric, stage : 3, caught : 0, species : "Ball Pokemon"},
  { name : "Exeggcute", type : grass, stage : 3, caught : 0, species : "Egg Pokemon"},
  { name : "Exeggutor", type : grass, stage : 5, caught : 0, species : "Coconut Pokemon"},
  { name : "Cubone", type : ground, stage : 3, caught : 0, species : "Lonely Pokemon"},
  { name : "Marowak", type : ground, stage : 4, caught : 0, species : "Bone Keeper Pokemon"},
  { name : "Hitmonchan", type : fighting, stage : 5, caught : 0, species : "Kicking Pokemon"},
  { name : "Hitmonlee", type : fighting, stage : 5, caught : 0, species : "Punching Pokemon"},
  { name : "Lickitung", type : normal, stage : 4, caught : 0, species : "Licking Pokemon"},
  { name : "Koffing", type : poison, stage : 2, caught : 0, species : "Poison Gas Pokemon"},
  { name : "Weezing", type : poison, stage : 4, caught : 0, species : "Poison Gas Pokemon"},
  { name : "Rhyhorn", type : rock, stage : 3, caught : 0, species : "Spikes Pokemon"},
  { name : "Rhydon", type : rock, stage : 4, caught : 0, species : "Drill Pokemon"},
  { name : "Chansey", type : normal, stage : 4, caught : 0, species : "Egg Pokemon"},
  { name : "Tangela", type : grass, stage : 4, caught : 0, species : "Vine Pokemon"},
  { name : "Kangaskhan", type : normal, stage : 4, caught : 0, species : "Parent Pokemon"},
  { name : "Horsea", type : water, stage : 1, caught : 0, species : "Dragon Pokemon"},
  { name : "Seadra", type : water, stage : 2, caught : 0, species : "Dragon Pokemon"},
  { name : "Goldeen", type : water, stage : 3, caught : 0, species : "Goldfish Pokemon"},
  { name : "Seaking", type : water, stage : 4, caught : 0, species : "Goldfish Pokemon"},
  { name : "Staryu", type : water, stage : 1, caught : 0, species : "Star Shape Pokemon"},
  { name : "Starmie", type : water, stage : 2, caught : 0, species : "Mysterious Pokemon"},
  { name : "Mr. Mime", type : psychic, stage : 4, caught : 0, species : "Barrier Pokemon"},
  { name : "Scyther", type : bug, stage : 4, caught : 0, species : "Mantis Pokemon"},
  { name : "Jynx", type : psychic, stage : 4, caught : 0, species : "Human Shape Pokemon"},
  { name : "Electabuzz", type : electric, stage : 5, caught : 0, species : "Electric Pokemon"},
  { name : "Magmar", type : fire, stage : 5, caught : 0, species : "Spitfire Pokemon"},
  { name : "Pinsir", type : bug, stage : 5, caught : 0, species : "Stag Beetle Pokemon"},
  { name : "Tauros", type : normal, stage : 4, caught : 0, species : "Wild Bull Pokemon"},
  { name : "Magikarp", type : water, stage : 1, caught : 0, species : "Fish Pokemon"},
  { name : "Gyrados", type : water, stage : 5, caught : 0, species : "Atrocious Pokemon"},
  { name : "Lapras", type : water, stage : 4, caught : 0, species : "Transport Pokemon"},
  { name : "Ditto", type : normal, stage : 4, caught : 0, species : "Transform Pokemon"},
  { name : "Eevee", type : normal, stage : 2, caught : 0, species : "Evolution Pokemon"},
  { name : "Vaporeon", type : water, stage : 4, caught : 0, species : "Bubble Jet Pokemon"},
  { name : "Jolteon", type : electric, stage : 4, caught : 0, species : "Lightning Pokemon"},
  { name : "Flareon", type : fire, stage : 4, caught : 0, species : "Flame Pokemon"},
  { name : "Porygon", type : normal, stage : 5, caught : 0, species : "Virtual Pokemon"},
  { name : "Omanyte", type : water, stage : 4, caught : 0, species : "Spiral Pokemon"},
  { name : "Omastar", type : water, stage : 5, caught : 0, species : "Spiral Pokemon"},
  { name : "Kabuto", type : rock, stage : 4, caught : 0, species : "Shellfish Pokemon"},
  { name : "Kabutops", type : rock, stage : 5, caught : 0, species : "Shellfish Pokemon"},
  { name : "Aerodactyl", type : flying, stage : 5, caught : 0, species : "Fossil Pokemon"},
  { name : "Snorlax", type : normal, stage : 5, caught : 0, species : "Sleeping Pokemon"},
  { name : "Articuno", type : ice, stage : 6, caught : 0, species : "Freeze Pokemon"},
  { name : "Zapdos", type : electric, stage : 6, caught : 0, species : "Electric Pokemon"},
  { name : "Moltres", type : fire, stage : 6, caught : 0, species : "Flame Pokemon"},
  { name : "Dratini", type : dragon, stage : 4, caught : 0, species : "Dragon Pokemon"},
  { name : "Dragonair", type : dragon, stage : 5, caught : 0, species : "Dragon Pokemon"},
  { name : "Dragonite", type : dragon, stage : 6, caught : 0, species : "Dragon Pokemon"},
  { name : "Mewtwo", type : psychic, stage : 6, caught : 0, species : "Genetic Pokemon"},
  { name : "Mew", type : psychic, stage : 7, caught : 0, species : "New Species Pokemon"}
];

var Wishs = [
    {
        id: '1',
        type: 'offer'
    },
    {
        id: '1',
        type: 'model'
    },
    {
        id: '3',
        type: 'offer'
    },
    {
        id: '4',
        type: 'offer'
    },
    {
        id: '2',
        type: 'model'
    }
];

const ShopType = new GraphQLObjectType({
    name: 'Shop',
    description: 'A Shop',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Shop Id.'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the Shop.',
        },
        offers: {
            type: new GraphQLList(OfferType),
            resolve: shop => Offers.filter(offer => shop.id === offer.shop)
        }
    }),
    resolve: shop => Shops
});

const OfferType = new GraphQLObjectType({
    name: 'Offer',
    description: 'A Offer',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Offer Id.'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the Offer.',
        },
        price: {
            type: GraphQLInt,
            description: 'Offer Price.',
        },
        shop: {
            type: ShopType,
            description: 'The list of blocks of a post',
            resolve: offer => Shops.filter(shop => shop.id === offer.shop)[0]
        },
        model: {
            type: ModelType,
            resolve: offer => getModelById(offer.model)
        }
    }),
    resolve: offer => Offers
});

const ModelType = new GraphQLObjectType({
    name: 'Model',
    description: 'A Model',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Model Id.'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the Model.',
        },
        vendor: {
            type: VendorType,
            resolve: model => Vendors.filter(vendor => vendor.id === model.vendor)[0]
        }
    }),
    resolve: model => Models
});

const VendorType = new GraphQLObjectType({
    name: 'Vendor',
    description: 'A Vendor',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Vendor Id.'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the Vendor.',
        }
    }),
    resolve: vendor => Vendors
});

const WishType = new GraphQLObjectType({
    name: 'Wish',
    description: 'A Wish',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Wish Id.'
        },
        type: {
            type: GraphQLString,
            description: 'The name of the Wish.',
        }
    }),
    resolve: wish => Wishs
});

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'A Pokemon',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the Pokemon.',
    },
    type: {
      type: GraphQLString,
      description: 'The type of the Pokemon.',
    },
    stage: {
      type: GraphQLInt,
      description: 'The level of the Pokemon.',
    },
    species: {
      type: GraphQLString,
      description: 'The species of the Pokemon.',
    }
  }),
  resolve: pokemon => {console.log(pokemon); return Pokemon}
});

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            pokemon: {
                type: new GraphQLList(PokemonType),
                args: {
                    name: {
                        description: 'name of the pokemon',
                        type: GraphQLString
                    }
                },
                resolve: (root, { name, age }) => name ? Pokemon.filter(p => p.name === name) : Pokemon
            },
            offer: {
                type: new GraphQLList(OfferType),
                args: {
                    id: {
                        description: 'id of the offer',
                        type: GraphQLString
                    }
                },
                resolve: (root, { id }) => id ? Offers.filter(offer => offer.id === id) : Offers
            },
            shop: {
                type: new GraphQLList(ShopType),
                args: {
                    id: {
                        description: 'id of the offer',
                        type: GraphQLString
                    }
                },
                resolve: (root, { id }) => id ? Shops.filter(shop => shop.id === id) : Shops
            }
        }
    })
});

export default function getData(query) {
    return graphql(schema, query);
}
