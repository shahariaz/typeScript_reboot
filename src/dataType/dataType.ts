let c = 25;
let cd: number = 0;

// stirng
const fname: string = "John Doe";

// boolean
const isBoolean: boolean = false;

//
const hello = <string>"hello world";

// union type
const surname: string | number = 2;

// function

function add(a: number, b: number): number {
  return a + b;
}
//type alias
type userName = string | number;

function greet(name: userName): userName {
  return name;
}

type fun2 = (n: number, m: number) => number;

const func: fun2 = (m, n) => {
  return m + n;
};

//array
const arr: number[] = [];
const arr2: Array<string> = [];
const array69: Array<string | number> = [];
