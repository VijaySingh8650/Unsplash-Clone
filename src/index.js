import navbar from "../components/navbar.js";
import append from "../components/append.js";

document.getElementById("navbar").innerHTML= navbar();

//login functionality
document.querySelector(".login").addEventListener("click",function(){
    let form = document.querySelector(".form");
   form.classList.add("change");
    let form_container = document.querySelector(".form_container");
   form_container.classList.add("change");
   document.querySelector("body").style.background="rgba(0,0,0,0.3)";
   let btn = document.querySelector(".form>i");
   btn.addEventListener("click",function(){
       form.classList.remove("change");
       form_container.classList.remove("change");
       document.querySelector("body").style.background="none";

   })
        
   }) 


   //taking input from navbar input tag
    document.getElementById("searchInNavbar").addEventListener("input",function(){
        let search = document.getElementById("searchInNavbar").value;  
        debouncing(search,1000);
       
        
    }) 
    

    //taking input from input tag
    document.getElementById("searchAtHome").addEventListener("input",function(){
        let search = document.getElementById("searchAtHome").value;  
        debouncing(search,1000);
        
    }) 

    //bouncing it before fetching the api
   let id ;
    let debouncing=(search,time)=>{
       if(id){
        clearTimeout(id);
        // console.log(id);
       }
       id = setTimeout(function(){
        func(search);
       },time);
    }
    


    //fetch the api with the help of axios
    let func =async (search)=>{

        let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=30&query=${search}&client_id=WqIrLg4DWN0BuAOgygKibxt6uKx72SLctPtE8d8CvFI`);
       let dat = await res.json();
    //    console.log(dat.results);
        append(dat.results);
    }


    //clicking on animals on navbar
    let animals =async ()=>{

        let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=30&query=animals&client_id=WqIrLg4DWN0BuAOgygKibxt6uKx72SLctPtE8d8CvFI`);
        let dat = await res.json();
        append(dat.results);
    }
     document.getElementById("animals").addEventListener("click",function(){

         //calling animals function
         animals();
     })



    //  clicking on nature on navbar
    let nature =async ()=>{

        let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=30&query=nature&client_id=WqIrLg4DWN0BuAOgygKibxt6uKx72SLctPtE8d8CvFI`);
        let dat = await res.json();
        append(dat.results);
    }
     document.getElementById("nature").addEventListener("click",function(){

         //calling animals function
         nature();
     })



     //clicking on fashion on navbar
    let fashion=async ()=>{

        let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=30&query=fashion&client_id=WqIrLg4DWN0BuAOgygKibxt6uKx72SLctPtE8d8CvFI`);
        let dat = await res.json();
        append(dat.results);
    }
     document.getElementById("fashion").addEventListener("click",function(){

         //calling animals function
         fashion();
     })


     //clicking on human on navbar
    let human =async ()=>{

        let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=30&query=human&client_id=WqIrLg4DWN0BuAOgygKibxt6uKx72SLctPtE8d8CvFI`);
        let dat=await res.json();
        append(dat.results);
    }
     document.getElementById("human").addEventListener("click",function(){

         //calling animals function
         human();
     })



