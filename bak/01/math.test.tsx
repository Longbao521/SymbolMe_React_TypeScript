import { sum } from './math'

it('1+1=2', () => {
    expect(sum(1,1)).toBe(2)
})
it('hello+world1=hello-world', () => {
    expect(sum('hello','world')).toBe('hello-world')
})