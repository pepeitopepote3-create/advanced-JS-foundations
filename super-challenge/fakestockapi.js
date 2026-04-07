// Asegúrate de usar `export` y de definir `date` antes de usarlo
export function getStockData() {
    const date = new Date(); // Esto estaba faltando
    return {
        name: "QtechAI",
        sym:  "QTA",
        price: Number((Math.random() * 3 + 1).toFixed(2)),
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}s`
    };
}