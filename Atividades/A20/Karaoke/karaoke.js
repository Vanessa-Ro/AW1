function findLyrics(artist, song){
    return axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
});

function doSubmit(){
    const lyrics_el = document.querySelector('#lyrics');
    const artist    = document.querySelector('#artist');
    const song      = document.querySelector('#song');

    lyrics_el.innerHTML = `<div class="spinner-grow" role="status"></div>`;

    findLyrics(artist.value, song.value)
        .then(response => {
            if(response.data.lyrics){
                lyrics_el.innerHTML = response.data.lyrics;
            }
            else{
                lyrics_el.innerHTML = response.data.error;
            }
        })
        .catch(err => {
            lyrics_el.innerHTML = `Uepa! ${err}`;
        });
}