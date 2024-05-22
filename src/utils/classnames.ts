export function cl(
  ...args: Array<string | number | object | (() => boolean)>
): string {
  function work(arg: string | number | object | (() => boolean)): string {
    if (typeof arg === 'string' || typeof arg === 'number') {
      return arg + ' '
    }

    if (typeof arg === 'object') {
      return Object.entries(arg).reduce((className, [key, value]) => {
        if (typeof value === 'object') {
          return className + work(value)
        }

        if (typeof value === 'function') {
          return className + `${value()} `
        }

        if (value) {
          return className + `${key} `
        }

        return className
      }, '')
    }

    return ''
  }

  return args
    .reduce((className: string, arg) => {
      return className + work(arg)
    }, '')
    .trim()
}
