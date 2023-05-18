import { setSizeChoice } from "./TransientState.js"


const handleSizeChoice = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSizeChoice(convertedToInteger)
    }
}

export const SizeOptions = async () => {

    document.addEventListener("change", handleSizeChoice)

    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let choicesHTML = ""

    const divStringArray = sizes.map(
        (size) => {
            return `<div>
                <input type='radio' name='size' value='${size.id}' /> ${size.carets}
            </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")

    return choicesHTML
}
