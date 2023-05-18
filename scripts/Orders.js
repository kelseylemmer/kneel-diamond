export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()

    let ordersHTML = ""
    const ordersArray = orders.map(
        (order) => {
            return `<section class="orders">
                <div>Order ${order.id}</div>
            
        </section>`

        }
    )
    ordersHTML += ordersArray.join("")
    return ordersHTML
}