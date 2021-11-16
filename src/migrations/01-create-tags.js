const newTags = [
  {
    id: 'tagRecepies',
    name: 'tag: Recepies'
  },
  {
    id: 'tagFitness',
    name: 'tag: Fitness'
  }
]

module.exports = function (migration) {
  newTags.forEach(tag => {
    migration.createTag(tag.id, {
      name: tag.name
    })
  })
}