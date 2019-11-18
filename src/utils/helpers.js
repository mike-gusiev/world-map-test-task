export const sortOptions = {
    abc: 'abc',
    desc: 'desc'
}

export const compareAbc = (a, b, prop) => {
    let valueA = a[prop]
    let valueB = b[prop]

    if (typeof valueA === 'string' && typeof valueB === 'string') {
        valueA = valueA.toUpperCase()
        valueB = valueB.toUpperCase()
    }
  
    let comparison = 0
    if (valueA < valueB) {
      comparison = 1
    } else if (valueA > valueB) {
      comparison = -1
    }
    return comparison
  }

export const compareDesc = (a, b, prop) => {
    let valueA = a[prop]
    let valueB = b[prop]

    if (typeof valueA === 'string' && typeof valueB === 'string') {
        valueA = valueA.toUpperCase()
        valueB = valueB.toUpperCase()
    }
  
    let comparison = 0
    if (valueA > valueB) {
      comparison = 1
    } else if (valueA < valueB) {
      comparison = -1
    }
    return comparison
  }