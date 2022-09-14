function navbar(){
    return `
    
    <a href=""><img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="Unsplash"></a>
    <div class="navbar_search">
        <input type="text" placeholder="Search free high-resolution photos" id="searchInNavbar">
        <i class="fa fa-search" ></i>
    </div>
    <div class="nav">
   

       <a href="#images" id="nature">Nature</a>
       <a href="#images" id="animals">Animals</a>
       <a href="#images" id="human">Human</a>
       <a href="#images" id="fashion">Fashion</a>

     </div>
   
    
    
   
        <div class="login">

            <p>Log in</p>
            <span>/</span>
            <p>Sign up</p>
        </div>
       

       <div class="form_container">

           <div class="form">
               <i class="fa fa-close"></i>
               <form action="">
                   <input type="text" placeholder="Your Name">
                   <input type="email" placeholder="Your Email">
                   <input type="password" placeholder="Password">
                   <input type="submit" value="Log In" id="btnSubmit">
                   <a href="">Don't have an account ?</a>
               </form>
           </div>
       </div>`;
}

export default navbar;