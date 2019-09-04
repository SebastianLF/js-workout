export const topics = {
    'rjf': 'Rewrite js functions',
    'this': '`this` keyword',
    'arrman': 'Array manipulation',
    'eqop': 'Equality operators'
}

export const pickSerie = (topic) => ({
    1: [
        { id: 1, description: "Rewrite reduce function.", initialCode: "function reduce(acc, value, index, array) {}", source: "", tests: [] },
        { id: 2, description: "Rewrite map function.", initialCode: "function map(value, index, array) {}", source: "", tests: [] },
        { id: 3, description: "Rewrite 'new' operator.", initialCode: "function newOperator(Constuctor, args) {}", source: "", tests: [] },
        { id: 4, description: "Rewrite filter function.", initialCode: "function filter(current, index, array) {}", source: "", tests: [] }
    ]
})