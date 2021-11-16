const tagsToDelete = ['tagRecepies', 'tagFitness']

module.exports = function (migration) {
  tagsToDelete.forEach(tag => {
    migration.deleteTag(tag)
  })
}