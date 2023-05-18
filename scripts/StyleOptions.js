import { setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setStyleChoice(convertedToInteger)
    }
}

export const StyleOptions = async () => {

    document.addEventListener("change", handleStyleChoice)


    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let choicesHTML = ""
    const divStringArray = styles.map(
        (style) => {
            return `<div>
                <input type='radio' name='style' value='${style.id}' /> ${style.style}
            </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")

    return choicesHTML
}