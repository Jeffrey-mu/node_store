

function fn() {
  try {
    return 2
  } catch (error) {
    return 3
  } finally {
    // return 4
  }
  return 1
}
console.log(fn())
