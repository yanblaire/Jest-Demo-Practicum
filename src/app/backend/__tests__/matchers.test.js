describe('matchers', () => {
    it('toBe', () => {
        expect(1 + 1).toBe(2)
    })

    it('toEqual', () => {
        const obj1 = { a: 1, b: 2 }
        const obj2 = { a: 1, b: 2 }
    
        expect(obj1).toEqual(obj2)
    });
    
    it('toBeNull', () => {
        const obj = null
        expect(obj).toBeNull()
        expect(obj).toBeDefined()
        expect(obj).not.toBeUndefined()
        expect(obj).not.toBeTruthy()
        expect(obj).toBeFalsy()
    });
    
    it('toBeUndefined', () => {
        const obj = undefined
        expect(obj).toBeUndefined()
        expect(obj).not.toBeNull()
        expect(obj).not.toBeTruthy()
        expect(obj).toBeFalsy()
    });
    
    it('toBeTruthy', () => {
        const obj = true
        expect(obj).toBeTruthy()
        expect(obj).not.toBeFalsy()
    });
    
    it('toBeFalsy', () => {
        const obj = false
        expect(obj).toBeFalsy()
        expect(obj).not.toBeTruthy()
    });
    
    it('toBeGreaterThan', () => {
        const obj = 1
        expect(obj).toBeGreaterThan(0)
        expect(obj).not.toBeGreaterThan(1)
    });
    
    it('toBeGreaterThanOrEqual', () => {
        const obj = 1
        expect(obj).toBeGreaterThanOrEqual(0)
        expect(obj).toBeGreaterThanOrEqual(1)
    }); 
    
    it('toBeLessThan', () => {
        const obj = 1
        expect(obj).toBeLessThan(2)
        expect(obj).not.toBeLessThan(0)
    });
    
    it('toBeLessThanOrEqual', () => {
        const obj = 1
        expect(obj).toBeLessThanOrEqual(2)
        expect(obj).toBeLessThanOrEqual(1)
    });
    
    it('toBeCloseTo', () => {
        const obj = 1
        expect(obj).toBeCloseTo(1.005)
        expect(obj).not.toBeCloseTo(1.2)
    });
    
    it('toMatch', () => {
        const obj = 'hello'
        expect(obj).toMatch(/hello/)
        expect(obj).not.toMatch(/world/)
    });
    
    it('toContain', () => {
        const obj = ['a', 'b']
        expect(obj).toContain('a')
        expect(obj).not.toContain('c')
    });
    
    it('toThrow', () => {
        const obj = () => {
            throw new Error('error')
        }
        expect(obj).toThrow()
        expect(obj).toThrow(Error)
        expect(obj).toThrow('error')
    }); 
    
    it('toThrowError', () => {
        const obj = () => {
            throw new Error('error')
        }
        expect(obj).toThrowError()
        expect(obj).toThrowError(Error)
        expect(obj).toThrowError('error')
    });
    
})

