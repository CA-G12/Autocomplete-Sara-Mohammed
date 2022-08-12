const mime = require('mime-types')

describe("Test Mine", () => {
    test("Test File", () => {
        const file = 'index.html'
        expect(mime.lookup(file)).toBe('text/html')
    })
})