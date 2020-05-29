const baseUrl = "https://www.mangaeden.com/api/";
const mangaList = `${baseUrl}list/1/`;


fetch(mangaList)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const html = data.manga.slice(1238, 1247).map((mangaInfo) => {
      return `
          <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
              <img class="image" src="https://cdn.mangaeden.com/mangasimg/${mangaInfo.im}" alt="${mangaInfo.t} cover photo" />
              <div class="details">
                  <h4 class="name">${mangaInfo.t}</h4>
                  <p><b>Category:</b>${mangaInfo.c}</p>
                  <p><b>Clicks:</b> ${mangaInfo.h}</p>
                  <a class="btn btn-primary" href="details.html?id=${mangaInfo.i}">Details</a>
              </div>
          </div>
      </div>
            `;
    });
    // JS to try and solve the 403 error when loading pictures. my laptop gives 200 status after change
    // but gaming pc still gives 403. Unsure what the problem might be. 
    var meta = document.createElement('meta');
    meta.name = "referrer";
    meta.content = "www.mangaeden.com";
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.querySelector(".results").innerHTML = html;
  })
  .catch((error) => {
    console.log(error);
  });