'use strict';

const apiKey = 'lPFWMY1xW9R96TsCZ47lH4ekbcF54MUyYK45dxWe';
const searchURL = 'https://developer.nps.gov/api/v1/parks';

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

function displayResults(responseJson, maxResults) {
    console.log(responseJson);
    $('#results-list').empty();
    for (let i = 0; i < responseJson.data.length & i < maxResults; i++) {
        $('#results-list').append(
            `<li><h3>${responseJson.data[i].fullName}<h3>
      <p><a href= "${responseJson.data[i].url}">${responseJson.data[i].url}</a></p>
      <p>${responseJson.data[i].description}</p>
      </li`
        )
    };
    $('#results').removeClass('hidden');
}

function getNationalParks(query, maxResults = 10) {
    const params = {
        stateCode: query,
        api_key: apiKey,
        maxResults,
    }

    const queryString = formatQueryParams(params);
    const url = searchURL + '?' + queryString;
    console.log(url);

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson, maxResults))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}



function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = $('#search-term').val();
        const maxResults = $('#js-max-results').val();
        getNationalParks(searchTerm, maxResults);
    })
}

$(watchForm);