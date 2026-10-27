export { cn } from "cn"
export const formatPrice = (amount:number)=>{
    return amount.toLocaleString('en-US',{
        style:'currency',
        currency: "USD",
        maximumFractionDigits:0,
        minimumFractionDigits: 0
    })
}