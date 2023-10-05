async function getData() {
    const res = await fetch("./data/data.json")
    const data = await res.json()
    return data
}


async function displayData() {
    let reviewContainer = document.getElementsByClassName("results-container")[0]
    const data = await getData()

    const mappedUsers = data.map((result) => {
        return `
        <div class="${result.category}-container result" >
            <div class="result-name">
                <img src="${result.icon}"/>
                <span>${result.category}</span>
            </div>
            
            <div class="result-score">
                <span class="result-font">${result.score}</span> <span class="overall-score"> /</span> <span class="overall-score">100 </span>
            </div>
            </div>`
    }).join('')
    
    reviewContainer.innerHTML = mappedUsers
}



displayData()