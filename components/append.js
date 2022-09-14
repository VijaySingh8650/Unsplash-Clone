let append=(array)=>{
   let images = document.querySelector("#images");
   images.innerHTML=null;
   array.map(function(ele){
    let div = document.createElement("div");
    let image =  document.createElement("img");
    image.src=ele.urls.small;
    div.append(image);
    images.append(div);
   })
   window.location.href = '#images';
}

export default append;