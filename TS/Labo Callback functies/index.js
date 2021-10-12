var names = ['Andie', 'Kelly', 'Silke', 'Lucca', 'Issam', 'Sven', 'Nabil', 'Muhammed'];
console.log(names.filter(function (name) { return name.length == 4; }));
console.log(names.filter(function (name) { return name[0] == 'S'; }));
console.log(names.filter(function (name, index) { return index % 2 == 0; }));
console.log(names.sort(function (a, b) {
    return a.length - b.length;
}));
console.log(names.sort(function (a, b) {
    return b.length - a.length;
}));
