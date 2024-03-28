const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "You", artist: "Fertile Ground", genre: "Soulful House" },
    { title: "Cure", artist: "Moon Child", genre: "Lounge" },
    { title: "Damage", artist: "Her", genre: "R&B" },
    { title: "Youre Face", artist: "Sam Salter", genre: "R&B" },
    { title: "Too Much", artist: "Sampha", genre: "R&B" },
    { title: "Live in Amsterdam", artist: "June Mariezy", genre: "Lounge" },
    { title: "Dont touch my hair", artist: "Solange", genre: "Lounge" },
    { title: "Yebo Nkosi", artist: "Chayma Chamelion", genre: "Soulful House" },
]  

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Lounge",
    "Groot": "Soulful House",
};

function generatePlaylist(guardians, songs) {
    const playlists = {};

    Object.entries(guardians).forEach(([guardian, genre]) => {
        if (genre) {
           
            const playlist = songs.filter(song => song.genre === genre)
                                   .map(song => `${song.title} by ${song.artist}`);
          
            playlists[guardian] = playlist;
        }
    });

    return playlists;
}

// Function to display playlists for each guardian
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');
    playlistsContainer.innerHTML = ''; // Clear existing content

    // Iterate over each guardian's playlist
    Object.keys(playlists).forEach(guardian => {
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');

        // Create heading for each playlist
        const heading = document.createElement('h2');
        heading.textContent = guardian === 'Star-Lord' ? 'Star-Lord Playlist' : guardian;
        playlistDiv.appendChild(heading);

        // Create list for each playlist
        const playlistList = document.createElement('ul');
        // Iterate over each song in the playlist
        playlists[guardian].forEach(song => {
            const listItem = document.createElement('li');
            // Split song into title and artist
            const [title, artist] = song.split(' by ');
            // Create spans for title and artist
            const titleSpan = document.createElement('span');
            titleSpan.textContent = title;
            const artistSpan = document.createElement('span');
            artistSpan.textContent = artist;
            // Apply gold color and link only to the title span
            titleSpan.style.color = 'gold';
            listItem.appendChild(titleSpan);
            listItem.appendChild(document.createTextNode(' by '));
            listItem.appendChild(artistSpan);
            playlistList.appendChild(listItem);
        });

       
        playlistDiv.appendChild(playlistList);
   
        playlistsContainer.appendChild(playlistDiv);
    });
}

const playlists = generatePlaylist(guardians, songs);

displayPlaylists(playlists);
