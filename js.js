const championFilterCheckbox = document.getElementById('championFilter');
/////////////////////////////
const theBestFilter = document.getElementById('theBest');
/////////////////////////////
const teamSearchInput = document.getElementById('teamSearch');
const standingsTable = document.getElementById('standings').getElementsByTagName('tbody')[0];
const rows = standingsTable.getElementsByTagName('tr');
/////////////////////////////
championFilterCheckbox.addEventListener('change', filterTeams);
teamSearchInput.addEventListener('input', filterTeams);
/////////////////////////////
theBestFilter.addEventListener('change', filterTeams);
teamSearchInput.addEventListener('input', filterTeams);


function filterTeams() {
    const showChampionsOnly = championFilterCheckbox.checked;
    const theBestTeam = theBestFilter.checked
    const searchTerm = teamSearchInput.value.toLowerCase();

    for (let i = 0; i < rows.length; i++) {
        const teamName = rows[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        const isChampion = rows[i].getElementsByTagName('td')[7].textContent === 'Yes';
        const isTheBest = rows[i].getElementsByTagName('td')[8].textContent === 'Yes';
        let shouldShowRow = true;
        //////////////////////////////
        if (theBestTeam && !isTheBest) {
            shouldShowRow = false
        }
        /////////////////////////////
        if (showChampionsOnly && !isChampion) {
            shouldShowRow = false;
        }
/////////////////////////////
        if (searchTerm && !teamName.includes(searchTerm)) {
            shouldShowRow = false;
        }
/////////////////////////////
        rows[i].style.display = shouldShowRow ? '' : 'none';
    }
}