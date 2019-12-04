
var url='https://api.themoviedb.org/3/discover/movie?api_key=96cdbfd4439a92ac248f81cae03ab9db&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
var xhr=new XMLHttpRequest()
xhr.open('GET',url)
xhr.onreadystatechange=test
function test(){
  if(this.status==200 && this.readyState==4)
  {
  var a=JSON.parse(this.responseText)
  var div_tag=document.getElementsByClassName('flip-card-back')
      for(let i=0;i<=a.results.length;i++)
      {
        if(a.results[i].title=="Frozen II")
          div_tag[0].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
        else if(a.results[i].title=="Spider-Man: Far from Home")
                div_tag[2].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
        else if(a.results[i].title=="Joker")
                div_tag[3].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
        else if(a.results[i].title=="Terminator: Dark Fate")
                div_tag[4].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
       else if(a.results[i].title=="The Irishman")
                div_tag[5].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
       else if(a.results[i].title=="Hustlers")
                div_tag[6].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
        else if(a.results[i].id==466272)
                div_tag[1].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
      }
  }
}
xhr.send()

//people
var url1='https://api.themoviedb.org/3/person/popular?api_key=96cdbfd4439a92ac248f81cae03ab9db&language=en-US&page=1'
var xhr1=new XMLHttpRequest()
xhr1.open('GET',url1)
xhr1.onreadystatechange=test1
function test1(){
  if(this.status==200 && this.readyState==4)
  {
  var a=JSON.parse(this.responseText)
  var img1='https://image.tmdb.org/t/p/original'+a.results[0].name
  var x=document.getElementsByClassName('item2')
  x[0].setAttribute('background','url(img2)')
  var img2='https://image.tmdb.org/t/p/w235_and_h235_face'+a.results[1].name
  var y=document.getElementsByClassName('item1')
  y[0].setAttribute('background','url(img2)')
  }
}
xhr1.send()
