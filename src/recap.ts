// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myName = 'Gustavo';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const Gustavo = new Persona(15, 'Gustavo');
Gustavo.getSummary();
