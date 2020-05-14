const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
//记得删掉颜色的部分
let justify = document.getElementsByClassName("justify");
for (let i = 0; i < works.length; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "item");
    let genre = document.createElement("h4");
    genre.innerHTML = "Genre : " + works[i].tips;
    item.appendChild(genre);
    let innerBox1 = document.createElement("div");
    innerBox1.setAttribute("class", "inner-box");
    item.appendChild(innerBox1);
    let author = document.createElement("h3");
    author.innerHTML = works[i].author;
    author.style.display = "inline";
    innerBox1.appendChild(author);
    let lifetime = document.createElement("h5");
    lifetime.innerHTML = "lifetime:" + works[i].lifetime;
    lifetime.style.display = "inline";
    lifetime.style.marginLeft = "1em";
    innerBox1.appendChild(lifetime);
    let innerBox2 = document.createElement("div");
    innerBox2.setAttribute("class", "inner-box");
    item.appendChild(innerBox2);
    let photoTitle =  document.createElement("h3");
    photoTitle.innerHTML = "Popular Photos";
    innerBox2.appendChild(photoTitle);
    for (let j = 0; j < works[i].photos.length; j++) {
        let photo = document.createElement("img");
        photo.setAttribute("class", "photo");
        photo.setAttribute("src", "images/" + works[i].photos[j]);
        innerBox2.appendChild(photo);
    }
    let btnVisit = document.createElement("button");
    btnVisit.setAttribute("value", "Visit");
    btnVisit.innerHTML = "Visit";
    item.appendChild(btnVisit);
    justify[0].appendChild(item);
}