// OPERATORS
interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // we receive => 'name' | 'email'
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'> // here we receive the same

let u1 = 'name' 
u1 = '_id' // <= will work because we dont mention the type

let u2:UserKeysNoMeta1 = 'name'
u2 = '_id' // <= wont work because we assign a type that contains extracted field with method Exclude<> or Pick<>