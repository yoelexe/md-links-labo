const { mdLinks } = require('../index.js');
const { getStats, getBroke } = require('./countPath.js');
const path = process.argv[2];
const validate = process.argv.filter((element) => element === '--validate').length > 0
const stats = process.argv.filter((element) => element === '--stats').length > 0
const options = {
  validate: validate,
  stats: stats,
}



mdLinks(path, options).then((response) => {
  if(options.stats){
    return getStats(response)
  }

  if(options.validate){
    return getBroke(response)
  }
})
.catch((err) => {
  console.error(err)
})