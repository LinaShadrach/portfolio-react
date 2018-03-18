import tuneTrips from './img/tune-trips.png';
import heartsAndHands from './img/hearts-and-hands.png';
import nerdyKnits from './img/nerdy-knits.png';

export const masterProjectList = [
  {
    title: 'Nerdy Knits',
    description: 'The main purpose of this app is to generate a 2-color scarf knitting pattern from cellular automata rules. Users are able to choose the rule, 2 colors, and dimensions and see the scarf change immediately. Users are able to save their creations and revisit them later by signing in with a username and password.',
    technologies: 'AJAX, C# 6, CSS, D3, HTML5, ES5, Materialize.css, MSSQL, .NET Core 1.0 (Mvc, Entity Framework & Identity), Razor, SSMS, VS 2015',
    ghUrl: 'https://github.com/LinaShadrach/KnerdyKnitter',
    imageSrc: nerdyKnits
  },
  {
    title: 'Hearts & Hands Cafe',
    description: 'This is a site for Hearts & Hands Cafe, a nonprofit organization in Wasilla, Ak. Hearts and Hands offer supportive employment opportunities for individuals with mental disorders. This site is currently under construction and the code for this project is not available to the public.',
    technologies: 'Angular 4, Angular CLI, C# 7, .NET Core 2.0 (Mvc, Entity Framework & Identity), Material.css, SASS, VS 2017',
    ghUrl: 'https://github.com/LinaShadrach/blogsite',
    imageSrc: heartsAndHands
  },
  {
    title: 'Tune Trip',
    /*eslint-disable */
    description: `The main purpose of this application is to allow users to find concerts featuring artists that are catered to their likes based off of their LastFM profile. The user is able to search for concerts by city, state, zip code, and longitude and latitude. A list of the concerts and their locations and a map with the locations of the concerts plotted on a grid are shown to the user. This application was built with Angular CLI and uses the Google Geocoding API and Google Maps API, the LastFM API, and the SongKick API. When the user searches for concerts, the application uses the LastFM API to get the user's top tracks. It uses the SongKick API to generate a list of concerts featuring bands that are similar to the artists of those top tracks. It uses the Google Geocoding API to process the locations inputted by the user. It usese the Google Maps API to plot the results on a map.`,
    /*eslint-enable */
    technologies: 'Angular 2, Angular CLI, CSS, Firebase, TypeScript 2, SASS',
    ghUrl: 'https://github.com/LinaShadrach/tune-trip',
    imageSrc: tuneTrips
  }
];
