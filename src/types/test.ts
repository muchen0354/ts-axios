

interface StringResolve {
  (reason: string): void
}
function request() {
  let res: StringResolve
  return new Promise<string>(resolve => {
    res = resolve
  })
}