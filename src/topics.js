const generateRandomNumber = (max) => (Math.floor(Math.random() * max))

export function generateSerie(serieLength = 2) {

  const topics = {
    1: {
      id: 1,
      name: 'rewrite',
      challenges: [
        { id: 1, description: "Rewrite reduce function.", initialCode: "function reduce(acc, value, index, array) {\n\n\treturn\n}", source: "", tests: [] },
        { id: 2, description: "Rewrite map function.", initialCode: "function map(value, index, array) {\n\n\treturn\n}", source: "", tests: [] },
        { id: 3, description: "Rewrite 'new' operator.", initialCode: "function newOperator(Constuctor, args) {\n\n\treturn\n}", source: "", tests: [] },
        { id: 4, description: "Rewrite filter function.", initialCode: "function filter(current, index, array) {\n\n\treturn\n}", source: "", tests: [] }
      ]
    },
    2: {
      id: 2,
      name: 'this',
      challenges: []
    }
  }

  let newSerie = []
  let newChallenge = topics[1].challenges[generateRandomNumber(4)]

  while (newSerie.length < serieLength) {
    let newChallenge = topics[1].challenges[generateRandomNumber(4)]

    if (!newSerie.includes(newChallenge)) newSerie.push(newChallenge)
  }

  return newSerie
}
