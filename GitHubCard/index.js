/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get(' https://api.github.com/users/HunterStevens')
.then(res => {
  console.log(res);
    cardPlace.append(createCard(res.data));
})
.catch(err => {
  console.log("trouble getting data from the server", err)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cardPlace = document.querySelector('.cards');
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [
  'mrsimpson3000',
  'devjaymoe',
  'gabeaster',
  'leachcoding',
  'HNelson98',
];

for(let i = 0; i < followersArray.length; i++){

axios.get(`https://api.github.com/users/${followersArray[i]}`)
.then(res =>{
  console.log("Info for the Follower Array", res);
  //res.data.forEach(info =>{
   // cardPlace.append(createCard(info));
  //});
  cardPlace.append(createCard(res.data));
})
.catch(err =>{
  console.log('ERROR: ', err)
})
}

// axios.get(`https://api.github.com/users/HunterStevens/followers`)
// .then(res =>{
//   console.log('Stretch Array', res);
//   const secondArray = res.data;
//   console.log(secondArray);
// })
// .then(
//  // const stretchArray = secondArray.map(info =>{
//   //  `https://api.github.com/users/${secondArray.}`
//   //})
// )
// .catch(err =>{
//   console.log('ERROR: ', err);
// })
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(ax) {
  const cardBod = document.createElement('div'),
        cardImg = document.createElement('img'),
        cardName = document.createElement('h3'),
        cardUser = document.createElement('p'),
        cardInfo = document.createElement('div'),
        cardLocate = document.createElement('p'),
        cardProfile = document.createElement('p'),
        cardAddress = document.createElement('a'),
        cardFollower = document.createElement('p'),
        cardFollowing = document.createElement('p'),
        cardBio = document.createElement('p');

        cardBod.append(cardImg);
        cardBod.append(cardInfo);
        cardInfo.append(cardName);
        cardInfo.append(cardUser);
        cardInfo.append(cardLocate);
        cardInfo.append(cardAddress);
        cardInfo.append(cardFollower);
        cardInfo.append(cardFollowing);
        cardInfo.append(cardBio);

        cardBod.classList.add('card');
        cardInfo.classList.add('card-info');
        cardName.classList.add('name');
        cardUser.classList.add('username');


        cardImg.src = ax.avatar_url;
        cardName.textContent = ax.name;
        cardUser.textContent = ax.login;
        cardLocate.textContent = ax.location;
       // cardAddress.textContent = `Profile: <a href = '${ax.url}'>${ax.url}</a>`;
       cardProfile.textContent = `Profile: ${cardAddress}`;
       cardAddress.textContent = `${ax.html_url}`;
       cardAddress.href = ax.html_url;
        cardFollower.textContent = `Followers: ${ax.followers}`;
        cardFollowing.textContent = `Following: ${ax.following}`;
        cardBio.textContent = `Bio ${ax.bio}`;

        return cardBod;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
