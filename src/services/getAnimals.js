import api from './api';

const getAnimals = (animals) => {
    return fetch(api[animals])
        .then(res => res.json())
        .then(res => Object.entries(res).map(x => {
            return {
                id: x[0],
                category: x[1].category,
                description: x[1].description,
                image: x[1].image,
                name: x[1].name
            }
        }))
        .catch(err => console.log('Handle error: ' + err));
};

export default getAnimals;