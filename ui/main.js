var button= document.getElementById('counter');
var counter=0;
button.onclick = function(){
    var request=new XMLHttpRequest() ;
    request.onreadystatechange = function(){
      if(request.readystatechange===XMLHttpRequest.DONE)
      {
          if(request.status===200)
          {
              var counter= request.responseText;
              var span =document.getElementById('count');
              span.innerHTML=counter.toString();
             
          }
      }
    };
     counter=counter+1;
    request.open('GET','http://nagasumanth48.imad.hasura-app.io/counter',true);
    request.send(null);
    
};