// CLASSES
class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescrit version is ${this.version}`
  }
}

// => 1st Variant
// class Car { 
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

// => 2nd Variant (the same as in 1st but smarter)
class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}

// ========================
// MODIFICATORS FOR CLASSES

class Animal {
  protected voice: string = '' // <= you can acces protected from classes that extends from this class
  public color: string = 'black' // <= you can acces public from anywhere
  
  constructor() {
    this.go()
  }
  private go() { // <= you can acces private only in the class where he was announced
    console.log('Go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color);

// ==========================
// ABSTRACT CLASSES

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }
  info(): string {
    return 'This is info';
  }
}