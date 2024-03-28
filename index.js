
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
    { title: "you", artist: "Fertile Ground", genre: "Soulful House" },
    { title: "Cure", artist: "Moon Child", genre: "Lounge" },
    { title: "Damage", artist: "Her", genre: "R&B" },
    { title: "Youre Face", artist: "Sam Salter", genre: "R&B" },
    { title: "Too Much", artist: "Sampha", genre: "R&B" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Lounge",
    "Groot": "Soulful House"
   
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



/*1. **Expand the Songs Array**: Add at least five songs to the `songs` array, each with `title`, `artist`, and `genre`.
2. **Assign Preferences**: Complete the `guardians` object by assigning each Guardian their preferred music genre.
3. **Generate Playlists**: Implement the `generatePlaylist` function. Use the `map()` function to create a personalized playlist for each Guardian based on their genre preference.
4. **Display Playlists**: Dynamically create and append elements to the `#playlists` div to display each Guardian's playlist. Include the Guardian's name and their list of songs.
5. **Test Your Application**: Ensure that your application correctly filters songs by genre for each Guardian and displays the playlists on the web page.*/