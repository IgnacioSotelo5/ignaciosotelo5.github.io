export const transformMinutes = (n: number) =>{
    const hours = Math.floor(n / 60)
    const minutes = n % 60
    return `${hours}h ${minutes}min` 
}