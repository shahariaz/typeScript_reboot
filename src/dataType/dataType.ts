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

// tuple

const tuple: [string, number] = ["hello", 10];
const array32: [number, number, string] = [3, 2, "hello"];

//obj
const obj: { name: string; age: number } = {
  name: "John Doe",
  age: 30,
};

type obj2 = {
  name: string;
  age: number;
  greet?: (name: string) => string;
};
const obj4: obj2 = {
  name: "John Doe",
  age: 30,
};
// interface

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 30,
};

interface NewPerson extends Person {
  city: string;
}

const newPerson: NewPerson = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

//function

// if we have optional parameter then we have to use ? after the parameter
type FuncType = (n: number, m: number, l?: number) => number;

const func69: FuncType = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  return n * m * l;
};

// rest operator
const funcRest = (...m: number[]): number[] => {
  return m;
};

function lol(n: number): number {
  return n;
}

// obj inside function
const getData = (product: { name: string; age: number }): void => {
  console.log(product.name, product.age);
};

// using type
type GetDataType = (product: {
  name: string;
  stock: number;
  price: number;
  photo: string;
}) => void;

const getProductData: GetDataType = (product) => {
  console.log(product.name, product.stock, product.price, product.photo);
};

//using interface

interface Product3 {
  name: string;
  stock: number;
  price: number;
  photo: string;
}
type GetDataType2 = (product: Product3) => void;

const getProductData2: GetDataType2 = (product) => {
  console.log(product.name, product.stock, product.price, product.photo);
};

const product4: Product3 = {
  name: "Product 1",
  stock: 10,
  price: 20,
  photo: "image.jpg",
};
getProductData2(product4);
