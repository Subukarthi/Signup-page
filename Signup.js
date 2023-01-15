var singup=document.getElementById("signup1")
singup.addEventListener("click",function(){
    var main=document.getElementById("main")
    main.style.display="none"
    var main2=document.getElementById("main2")
    main2.style.display="inline-block"
})

var signin=document.getElementById("signin2")
signin.addEventListener("click",function(){
    var main2=document.getElementById("main2")
    main2.style.display="none"
    var main=document.getElementById("main")
    main.style.display="flex"
})