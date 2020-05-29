const baseUrl = "https://www.mangaeden.com/api/";
const mangaList = `${baseUrl}list/1/`;


fetch(mangaList)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const html = data.manga.slice(1229, 1238).map((mangaInfo) => {
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

    /*
    The code below was added in an attempt to solve the issue with pictures
    getting a 403 no access error. The code was found on stackoverflow. 
    Link to form. https://stackoverflow.com/questions/6817595/remove-http-referer
    I did not remove the referrer, but added a link to the API used. As they also
    want users to to. But it does not seem to work as I intended at all times. 
    It seem to work on my laptop and chrome, but not in safari. Then works again 
    on gaming pc. In chrome i now get a 200 status, but in safari 403. unsure why,
    but guess it got to do with cashed images.

    */

    var meta = document.createElement('meta');
    meta.name = "referrer";
    meta.content = "https://www.mangaeden.com/api/";
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.querySelector(".results").innerHTML = html;
  })
  .catch((error) => {
    console.log(error);
  });