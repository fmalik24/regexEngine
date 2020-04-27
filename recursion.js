let categories = [
    {id: 'animals', 'parent': null},
    {id: 'mamamls', 'parent': 'animals'},
    {id: 'cats', 'parent': 'mamamls'},
    {id: 'dogs', 'parent': 'mamamls'},
    {id: 'chihuhua', 'parent': 'dogs'},
    {id: 'labrador', 'parent': 'dogs'},
    {id: 'persian', 'parent': 'cats'},
    {id: 'siamese', 'parent': 'cats'},
]


let makeTree = (categories, parent) => {
    let node = {};
    categories
    .filter( val => val.parent === parent )
    .forEach(val => {
        node[val.id] = makeTree(categories, val.id)
    });
    return node;
}


console.log(JSON.stringify(makeTree(categories, null), null, 2))