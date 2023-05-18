export const SizeOptions = async () => {

    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let choicesHTML = ""
    for (const size of sizes) {
        choicesHTML += `<input type='radio' name='size' value='${size.id}' /> ${size.carets}`
    }

    return choicesHTML
}
