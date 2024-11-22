function greet(name) {
  return `Hello, ${name}!`;
}

greet('威哦')
greet.language  = 'english'
greet.greetInSpanish = function (name) {
  return `Hola, ${name}!`;
}

function invokeGreeting(greetingFunction, name) {
  return greetingFunction(name)
}

console.log(invokeGreeting(greet, '威哦'))