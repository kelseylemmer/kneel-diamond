export const StyleOptions = async () => {

    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let choicesHTML = ""
    for (const style of styles) {
        choicesHTML += `<input type='radio' name='size' value='${style.id}' /> ${style.style}`
    }

    return choicesHTML
}