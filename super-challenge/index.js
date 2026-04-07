import { getStockData } from "./fakestockapi.js";
setInterval(function(){
    const stockData = getStockData()
    renderStockTicker(stockData)
},1500)

let prevprice = null

function renderStockTicker(stockData){
    const stockDisplayName = document.getElementById("nombre")
    const stockDisplaySymbol = document.getElementById("simbolo")
    const stockDisplayPrice = document.getElementById("precio")
    const stockDisplayPriceIcon = document.getElementById("precio-icono")
    const StockDisplayTime = document.getElementById("tiempo")

    const {name,sym,price,time} = stockData
    const priceDirectionIcon = price>prevprice ? "green.webp": price < prevprice ? "red.jpeg":"grey.webp"
    const priceIconElement = document.createElement("img")
    stockDisplayPriceIcon.src=`img/${priceDirectionIcon}`
    stockDisplayPriceIcon.alt = "Price direction icon"
    stockDisplayPriceIcon.innerHTML = ""
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.textContent = "name: " + name
    stockDisplaySymbol.textContent = "symbol: " + sym
    stockDisplayPrice.textContent = "price: " + price
    StockDisplayTime.textContent = "tiempo: " + time
    prevprice = price
}