// 1️⃣Si le enviamos un array, nos debe unir cada elemento del array y devolver un string.
// 2️⃣Si le enviamos un string, nos debe separar cada caracter y formar un array como respuesta.
// [N,i,c,o] => 'Nico' ... string[] => string 1️⃣
//  'Nico' => [N,i,c,o] ... string => string[] 2


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('') // string
  } else {
    return input.split('') // string[]
  }
}

const rtaArray = parseStr('Carlos')
console.log("🚀 ~ rtaArray:", rtaArray)

const rtaStr = parseStr(['C', 'a', 'r', 'l', 'o', 's'])
console.log("🚀 ~ rtaStr:", rtaStr)
