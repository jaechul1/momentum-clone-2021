const searchForm = document.querySelector(".search-box");
const searchInput = searchForm.querySelector("input");

function handleSubmit(event) {
    event.preventDefault();
    const searchText = searchInput.value;
    window.open(`http://www.google.com/search?q=${searchText}`, "_self");
    searchInput.value = "";
}

function init() {
    searchForm.addEventListener("submit", handleSubmit)
}

init();