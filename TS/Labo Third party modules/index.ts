import { create, all  } from 'mathjs'

const config = { }
const math = create(all, config)

const getal = math.unit('50 inch')
console.log(getal.to('cm').toString())