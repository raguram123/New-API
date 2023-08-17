

var res = fetch("https://api.publicapis.org/entries");

res.then((data)=>data.json()).then((data1)=>foo(data1));
    function foo(data1){
      for(var i in data1){
        console.log(i,data1[i]);
        var div = document.createElement("div");
        div.innerHTML=`<p>${i}</p>
        <h6>${data1[i].Description}</h6>`
        document.body.append(div);
      }
    }
