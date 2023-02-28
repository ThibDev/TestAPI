fetch("https://ex.smnarnold.com/json/acteurs/ryan-reynolds.json") 
  .then(data => data.json()) 
  .then(actor => { 
    console.log(actor);
  }); 

  getPictures('aww');

const grid = document.querySelector('.grid');

function getPictures(channel) {
  fetch(`https://www.reddit.com/r/${channel}.json?limit=9`)
    .then(data => data.json())
    .then(result => createHtml(result));
}

function createHtml(reddit) {
  let html = '';
  
  reddit.data.children.forEach(post => {
    if (post.data.preview) { // Si un preview est trouvé
      const url = post.data.preview.images[0].source.url;
      html += `
      <div class="cell">
        <img src="${url}">
      </div>`;
    }
  })

  grid.innerHTML = html;
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(users =>{
      return users.json();
})
.then(users =>{
      users.forEach(users => {
      const li = document.createElement("li");
      li.textContent = users.username;
      const li2 = document.createElement("li");
      li2.textContent = users.website;
      document.getElementById("liste").appendChild(li);
      document.getElementById("liste2").appendChild(li2); 
      });
})