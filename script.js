const resourceContainer = document.getElementById("resource-container");
const buttons = document.querySelectorAll("nav button");
function displayResources(category) {
    const filteredResources = resources.filter(resource => resource.category === category);

    if (filteredResources.length > 0) {
        const resource = filteredResources[0]; 
        resourceContainer.innerHTML = `
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        `;
    }
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        displayResources(selectedCategory);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    displayResources("HTML");
});
