const submitButton = document.querySelector(".button-post");

submitButton.addEventListener("click", async(e) => {
    const getDiv = document.querySelector("#error-messages");
    const userName = document.querySelector(".username-input").value.trim();
    const message = document.querySelector(".message-input").value.trim();

    e.preventDefault();

    getDiv.innerHTML = "";

    if (!message && !userName){
        getDiv.innerHTML = "ala ka name and post";
        return;
    }

    if (!userName){
        getDiv.innerHTML = "lagyan mo naman ng pangalan"
        return;
    }

    if (!message){
        getDiv.innerHTML = "wala ka gusto sabihin?";
        return;
    }
    

    e.target.closest("form").submit();
});