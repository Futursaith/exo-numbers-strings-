let numbers = [10, 15, 16, 5005, 52390903]

for (let i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]} = ${numbers[i].toString(2)}`)
  console.log(`${numbers[i]} = ${numbers[i].toString(8)}`)
  console.log(`${numbers[i]} = ${numbers[i].toString(16)}\n`)
}