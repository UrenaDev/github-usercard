/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/UrenaDev')
.then((response) => {
  entryPoint.append(CreateUserCard(response.data))
})
.catch(err => {
  console.log(err);
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['julieantonio', 'dhamano', 'adrian-guadalupe', 'k-jharris', 'logannegley'];
for (let i = 0; i< followersArray.length; i++){
axios.get('https://api.github.com/users/' + followersArray[i])
.then((response) => {
  entryPoint.append(CreateUserCard(response.data))
})
.catch(err => {
  console.log(err);
})}

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
let entryPoint = document.querySelector('.cards')

function CreateUserCard(data) {
  let newCard = document.createElement('div');
  let newImage = document.createElement('img');
  let cardInfo = document.createElement('div');
  let cardName = document.createElement('h3');
  let cardUser = document.createElement('p');
  let cardLocation = document.createElement('p');
  let userProfile = document.createElement('p');
  let userProfileLink = document.createElement('a');
  let cardFollowers = document.createElement('p');
  let cardFollowing = document.createElement('p');
  let cardBio = document.createElement('p');

  //classes
  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUser.classList.add('username');

  //content
  newImage.src = data.avatar_url;
  cardName.textContent = data.name;
  cardUser.textContent = data.login;
  cardLocation.textContent = 'Location: ' + data.location;
  userProfile.textContent = "Profile: "
  userProfileLink.href = data.html_url;
  userProfileLink.textContent = 'Click Here'
  cardFollowers.textContent = "Followers: " + data.followers;
  cardFollowing.textContent = "Following: " + data.following;
  cardBio.textContent = data.bio;
 
  //nesting
  entryPoint.appendChild(newCard);
  newCard.appendChild(newImage);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUser);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileLink);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  return newCard
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/