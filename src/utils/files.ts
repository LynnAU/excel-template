export function ArrayBufferToFile(buffer: ArrayBuffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }

  const file = btoa(binary)
  const type = 'application/xlsx'
  return `data:${type};base64,` + file
}
