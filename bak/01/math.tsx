function sum(a: number, b: number): number
function sum(a: string, b: string): string
function sum(a: any, b: any): any {
    // 类型保护
    if(typeof a === 'number') {
        return a+b
    } else {
        return a+'-'+b
    }
}

export { sum }