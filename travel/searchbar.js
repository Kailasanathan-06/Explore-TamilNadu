document.querySelector('#searchBar').addEventListener('click', function()
 {this.classList.toggle('active');});


const pages = [
    { name: "coimbatore", file: "coimbatore.html" },
    { name: "chennai", file: "chennai.html" },
    { name: "Kanyakumari", file: "Kanyakumari.html" },
    { name: "Namakkal", file: "namakkal.html" },
    { name: "Madurai", file: "madurai.html" }
];

const searchBar = document.getElementById("searchBar");
const searchResults = document.getElementById("searchResults");

searchBar.addEventListener("input", function() {
    const query = searchBar.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query) {
        pages.forEach(page => {
            if (page.name.toLowerCase().includes(query)) {
                const resultItem = document.createElement("div");
                resultItem.textContent = page.name;
                resultItem.className = "resultItem";
                resultItem.onclick = function() {
                    window.location.href = page.file;
                };
                searchResults.appendChild(resultItem);
            }
        });
    }
});