import { setMetalChoice } from "./TransientState.js"


const handleMetalChoice = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setMetalChoice(convertedToInteger)
    }
}

export const MetalOptions = async () => {

    document.addEventListener("change", handleMetalChoice)

    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let choicesHTML = ""
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
                <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
            </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")

    return choicesHTML
}
