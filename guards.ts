// GUARDS 

function strip(x: string | number) {
  if (typeof x === 'number') { // <= typeof is one of the guards to check the type of incoming values
    return x.toFixed(2) // <= this method is just for numbers
  }
  return x.trim() // <= this method is just for strings
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error result'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) { // <= instanceof works like typeof but for classes
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

// ===============

type AlertType = 'succes' | 'danger' | 'warning'

function setAlertType(AlertType) {
  // ....
}

setAlertType('succes')
setAlertType('warning')

setAlertType('default') // <= this wont worke because below we have create a type that expects other values