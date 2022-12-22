let str = 'find_and_replace_element_of_array'

function camel(el) {
    let arr = el.split('_')
    let result = arr.map(e => e.charAt(0).toUpperCase() + 
    e.slice(1,e.length))
    let first = result.splice(0,1)
    let word = first.join('').toLowerCase()
    return word + result.join('') 
}

console.log(camel(str))