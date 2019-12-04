var url="https://api.themoviedb.org/3/movie/upcoming?api_key=f29c80c39ceace2ef3f36ad59c1fd7e3&language=en-US&page=1"
    var xhr=new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.onreadystatechange = test
    function test()
    {
      if(this.status==200 && this.readyState==4)
      {
      var a= JSON.parse(xhr.responseText)
      for(let i=0;i<=a.results.length;i++)
      {
        if(a.results[i].title=="Angel Has Fallen")
          print_content(0,i)
       else if(a.results[i].title=="Ip Man 4: The Finale")
          print_content(1,i)
        else if(a.results[i].title=="Parasite")
          print_content(2,i)
        else if(a.results[i].title=="Star Wars: The Rise of Skywalker")
          print_content(3,i)
        else if(a.results[i].title=="Last Christmas")
          print_content(4,i)
      }
      function print_content(j,i){
        var get_tag=document.getElementsByClassName('content')
      var ele=document.createElement('h3')
      ele.innerHTML=a.results[i].title
      var para=document.createElement('p')
      para.innerHTML='<br>'+'Overview:-'+'<br>'+a.results[i].overview
      get_tag[j].appendChild(ele)
      get_tag[j].appendChild(para)
      }
  }
}
    xhr.send();
