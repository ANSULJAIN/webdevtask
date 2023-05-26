$(document).ready(() => {
    // Get a reference to the data container element
    const myTopUsers         = document.getElementById('my-top-users');
    const myLeaderboardTable = document.getElementById('my-leaderboard-table');
    
    // Fetch the data from the URL
    fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
        .then(response => response.json())
        .then(data => {
        // Process the data
        renderData(data);
        })
        .catch(error => {
        // Handle any errors
        console.log('Error:', error);
        });
    
    // Render the data in the HTML
    function renderData(data) {
    
        data.sort((a, b) => b.points - a.points);
        // Clear the container
        myLeaderboardTable.innerHTML = '';
        myTopUsers.innerHTML         = '';
    
        // Generate html for top users
        var myTopUsersHtml = `
            <div>
                <div class="my-user-rank">
                    <span>2</span>
                </div>
                <img style="width: 140px" src="${data[1].avatar}" alt="">
                <div class="my-user-name">
                    <span>${data[1].name} ${data[1].points}</span>
                </div>
            </div>
            <div>
                <div class="my-user-rank">
                    <span>1</span>
                </div>
                <img style="width: 180px" src="${data[0].avatar}" alt="">
                <div class="my-user-name">
                    <span>${data[0].name} ${data[0].points}</span>
                </div>
            </div>
            <div>
                <div class="my-user-rank">
                    <span>3</span>
                </div>
                <img style="width: 140px" src="${data[2].avatar}" alt="">
                <div class="my-user-name">
                    <span>${data[2].name} ${data[2].points}</span>
                </div>
            </div>
        `;
        myTopUsers.innerHTML = myTopUsersHtml;
    
        // Generate html for rest of the users
        var myLeaderboardTableHtml = "";
        for (let i = 3; i < data.length; i++) {
            const user = data[i];
            myLeaderboardTableHtml += `
                <div class="my-leaderboard-row">
                    <div class="my-table-serial">${i+1}</div>
                    <div class="my-table-avatar"><img src="${data[i].avatar}" alt=""></div>
                    <div class="my-table-name">${data[i].name}</div>
                    <div class="my-table-score">${data[i].points}</div>
                </div>`;
        }
        myLeaderboardTable.innerHTML = myLeaderboardTableHtml;
    }
});
