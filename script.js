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

