// 1️⃣Si le enviamos un array, nos debe unir cada elemento del array y devolver un string.
// 2️⃣Si le enviamos un string, nos debe separar cada caracter y formar un array como respuesta.
// [N,i,c,o] => 'Nico' ... string[] => string 1️⃣
//  'Nico' => [N,i,c,o] ... string => string[] 2

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;



// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('') // string
//   } else {
//     return input.split('') // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
      return input.join('') // string
    } else if (typeof input === 'string') {
      return input.split('') // string[]
    } else if (typeof input === 'number') {
      return true // string[]
    }
  }

const rtaArray = parseStr('Carlos')
rtaArray.reverse()
console.log("🚀 ~ rtaArray:", rtaArray)

const rtaStr = parseStr(['C', 'a', 'r', 'l', 'o', 's'])
rtaStr.toUpperCase()
console.log("🚀 ~ rtaStr:", rtaStr)

const rtaBoolean = parseStr(12)
console.log("🚀 ~ rtaBoolean:", rtaBoolean)

