import getData from './app/schema/dataSchema.js';

// getData('query HeroNameQuery { pokemon { name type species } }').then(result => {
//     console.log(result.data);
// });
console.time('query');
getData(`
    query HeroNameQuery {
        offer(id: "2") {
            model {
                vendor {
                    id
                    name
                }
            }
        }
    }
`)
    .then(result => {
        console.log(result.data);
        console.timeEnd('query');
    });
