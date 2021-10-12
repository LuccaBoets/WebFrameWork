var names: string[] = ['Andie', 'Kelly', 'Silke', 'Lucca', 'Issam', 'Sven', 'Nabil', 'Muhammed'];

console.log(names.filter(name => name.length == 4))
console.log(names.filter(name => name[0] == 'S'))
console.log(names.filter((name, index) => index % 2 == 0))

console.log(names.sort((a, b) => {
    return a.length - b.length
}))

console.log(names.sort((a, b) => {
    return b.length - a.length
}))

