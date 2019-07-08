export function generateSerie()  {
  const generateRandomNumber = (max) => ( Math.floor(Math.random() * max) )
  const topics = {
    1: [
      { description: "Rewrite reduce function.", initialCode: "function reduce(acc, value, index, array) {}", source: "", tests: [] },
      { description: "Rewrite map function.", initialCode: "function map(value, index, array) {}", source: "", tests: [] },
      { description: "Rewrite 'new' operator.", initialCode: "function newOperator(Constuctor, args) {}", source: "", tests: [] },
      { description: "Rewrite filter function.", initialCode: "function filter(current, index, array) {}", source: "", tests: [] },
    ]
  }

  return topics[1].map( (curr) => topics[1][generateRandomNumber(4)] )
}
