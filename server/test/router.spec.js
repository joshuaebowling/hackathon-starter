describe('falcor router tests', () => {
    var rewire = require('rewire'),
        Router = rewire('../router'),
        namesRouter

    beforeEach(() => {
        Router.__set__('names', [
            {name: 'uno'},
            {name: 'dos'},
            {name: 'tres'}
        ])
        namesRouter = new Router()
    })

    it('gets the number of names', (done) => {
        namesRouter.get([['names', 'length']]).
        subscribeOnNext(response => {
            expect(response).toEqual({
                jsonGraph: {
                    names: {
                        length: 3
                    }
                }
            })
            done()
        })
    })

    it('gets a list of names by index range', (done) => {
        namesRouter.get([['names', {'from': 0, 'to': 1}, 'name']]).
        subscribeOnNext(response => {
            expect(response).toEqual({
                jsonGraph: {
                    names: {
                        0: {name: 'uno'},
                        1: {name: 'dos'}
                    }
                }
            })
            done()
        })
    })

    it('adds a new name', (done) => {
        var namesStore = Router.__get__('names')

        namesRouter.call(['names', 'add'], ['cuatro'], ['name']).
        subscribeOnNext((response) => {
            expect(response).toEqual({
                jsonGraph: {
                    names: {
                        3: {name: 'cuatro'},
                        length: 4
                    }
                },
                paths: [['names', 'length'], ['names', 3, 'name']]
            })

            expect(namesStore[3].name).toBe('cuatro')
            done()
        })
    })
})
