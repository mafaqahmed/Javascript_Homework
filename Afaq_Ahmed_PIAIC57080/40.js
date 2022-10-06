function make_album(artist_name, album_title, tracks){
    var a = {artistname: artist_name, albumtitle: album_title}
    if(tracks != undefined){
        a["tracks"] = tracks;
    }
    return(a)
}

console.log(make_album("Arijit", "Rockstar"));
console.log(make_album("Atif Aslam", "Pehli Dafa"));
console.log(make_album("Guru", "Man of the Moon"));

console.log(make_album("Arijit", "Rockstar", 5));