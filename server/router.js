var Router = require('falcor-router'),
    names = require('./names'),
    NamesRouter = Router.createClass([
        {
            route: 'names[{integers:nameIndexes}]["name"]',
            get: (pathSet) => {
                var results = [];
                pathSet.nameIndexes.forEach(nameIndex => {
                    if (names.length > nameIndex) {
                        results.push({
                            path: ['names', nameIndex, 'name'],
                            value: names[nameIndex].name
                        })
                    }
                })
                return results
            }
        },
        {
            route: 'names.length',
            get: () => {
                return {path: ['names', 'length'], value: names.length}
            }
        },
        {
            route: 'names.add',
            call: (callPath, args) => {
                var newName = args[0];

                names.push({name: newName})

                return [
                    {
                        path: ['names', names.length-1, 'name'],
                        value: newName
                    },
                    {
                        path: ['names', 'length'],
                        value: names.length
                    }
                ]
            }
        }
    ])

module.exports = NamesRouter