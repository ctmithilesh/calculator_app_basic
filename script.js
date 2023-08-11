function fetchFormData() {
    const num1 = document.getElementById("num_one").value
    const num2 = document.getElementById("num_two").value
    console.log(num1, num2)
    const numbers = {
        num1: parseInt(num1),
        num2: parseInt(num2)
    }
    return numbers
}
function createResultDiv(result) {

    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = `
        <div>   
                <h3> Your result is ${result} </h3>
        </div>
    
    `

}

function addNumbers() {

    // alert("Hello from addNumbers")
    const numbers = fetchFormData()
    console.log('numbers', numbers)
    const result = numbers.num1 + numbers.num2
    console.log(result)
    createResultDiv(result)

}