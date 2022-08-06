/* eslint-disable @typescript-eslint/no-explicit-any */

export default function groupBy(array: any, property: string) {
  return array.reduce(function (acc: any, obj: any) {
    const key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}
