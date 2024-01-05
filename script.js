function main()
{
    var randomNumberP1 = Math.floor((Math.random()*6)+1);
    var randomNumberP2 = Math.floor((Math.random()*6)+1);
    document.querySelector("#die-value-p1").setAttribute("src","./images/dice"+randomNumberP1+".png");
    document.querySelector("#die-value-p2").setAttribute("src","./images/dice"+randomNumberP2+".png");
    if(randomNumberP1!=randomNumberP2)
    {
        document.querySelector(".draw-message").classList.add("hidden");
        document.querySelector(".result.p1").classList.remove("hidden");
        document.querySelector(".result.p2").classList.remove("hidden");
    }
    else
    {
        document.querySelector(".draw-message").classList.remove("hidden");
        document.querySelector(".result.p1").classList.add("hidden");
        document.querySelector(".result.p2").classList.add("hidden");
    }
    if(randomNumberP1>randomNumberP2)
    {
        document.querySelector(".result.p1").textContent="Winner!";
        document.querySelector(".result.p2").textContent="Loser!";
    }
    else
    {
        document.querySelector(".result.p1").textContent="Loser!";
        document.querySelector(".result.p2").textContent="Winner!";
    }
}
main();