interface Rect {
  readonly id: string // <= READONLY property, you cant change it
  color?: string // <= The ?: means that it's optional
  size: { 
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

// You can change the inside state of the constant, but you cant assign a new value to it.

rect2.color = 'black'; // <= This is a valid code!
rect2.id = '123'; // <= Not valid because this field has READONLY property.

// ==========

const rect3 = {} as Rect //another way to assign a Type
const rect4 = <Rect>{} //another way to assign a Type

// ===========

interface RectWithArea extends Rect { //<= New interface inherits types of Rect
  getArea: () => number // Here this interface expects to receive not only the fields from interface Rect, but the function getArea that will return a number too
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height  // <= Here we approve the expectations of the new interface and declare a function that returns a number
  }
}

// =============

interface IClock { //<= Usually the name of the interface is starting with big letter I
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock { //<= Here we implement methods to class from the interface
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

//===========

interface Styles {
  [key: string]: string // <= Here we use keyword KEY to mention that we expect keys with string values!
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}