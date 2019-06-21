import cloneDeep from 'lodash/cloneDeep'

export function queryArray (array, key, keyAlias = 'key') {
  if (!(array instanceof Array)) {
    return null
  }
  const item = array.filter(a => a[keyAlias] === key)
  if (item.length) {
    return item[0]
  }
  return null
}

export function arrayToTree (array, id = 'id', pid = 'pid', children = 'children') {
  const data = cloneDeep(array)
  const result = []
  const hash = {}
  data.forEach((_, index) => {
    hash[data[index][id]] = data[index]
  })
  data.forEach(item => {
    const hashVP = hash[item[pid]]
    if (hashVP) {
      if (!hashVP[children]) {
        hashVP[children] = []
      }
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}
