class AioMap extends Map {
  constructor(contents: [unknown, unknown][]) {
    super()
    contents.forEach(([key, value]) => this.set(key, value))
  }

  set(key: any, value: any): this {
    if (Array.isArray(key)) {
      key.forEach((k) => super.set(k, value))
    } else {
      super.set(key, value)
    }

    return this
  }
}

export { AioMap }
export default AioMap
