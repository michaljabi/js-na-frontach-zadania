export const createMany = <Func extends (...args: unknown[]) => any>(
  func: Func,
  repeat: number = 1
) => {
  const result: Array<ReturnType<Func>> = []
  for (let i = 0; i < repeat; i++) {
    result.push(func())
  }
  return result
}

export const toArray = <Element extends unknown>(
  elements: Element | Element[]
): Element[] => (Array.isArray(elements) ? elements : [elements])
