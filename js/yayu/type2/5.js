//Object => Primitive 
// valueOf toString
let specialObj = {
  valueOf: function() {
    console.log('Calling valueOf...')
    return 123
  },
  toString: function() {
    return "456"
  }
}

// console.log(Number(specialObj));

let objectWithoutPrimitiveValueOf = {
  valueOf: function() {
    console.log("Calling valueof ...")
    return this
  },
  toString: function() {
    console.log("Calling toString。。。。")
    return "798"
  }
}
// toPrimitive
console.log(Number(objectWithoutPrimitiveValueOf))

let problemObj = {
  valueOf: function() {
    console.log("Calling valueof ...")
    return this
  },
  toString: function() {
    console.log("Calling toString。。。。")
    return this
  }
}

try {
  console.log(Number(problemObj))
} catch(e) {
  console.error(e)
}