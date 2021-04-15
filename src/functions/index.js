export default function checkNumber(value) {
    if (!value) return 
    if (value === 0) return false


    for (let i = 2; i < value; i++)
        if (value % i === 0) {
            return false
        }
    return value > 1
}