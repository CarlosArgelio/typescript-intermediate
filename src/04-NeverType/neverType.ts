const withoutEnd = () => {
  while (true) {
    console.log('Never stop learning');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'isString';
  } else if (Array.isArray(input)) {
    return 'isArray';
  }

  return fail('Unknown input type');
}

console.log(example('str'));
console.log(example([1,2,3]));
console.log(example(1)); // Stop Program
console.log(example('str after fail'));

