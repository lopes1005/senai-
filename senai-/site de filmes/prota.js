document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("#protagonistForm");
    const protagonistInfo = document.getElementById("#protagonistInfo");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("#name").value; 
        const age =  document.getElementById("#age").value;
        const film = document.getElementById("#filme").value;

        
       

        protagonistInfo.innerHTML = "Nome:", "idade", "filme";

    })



})