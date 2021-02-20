console.log("hi");

$(".menu a").on("mouseenter",function(){

    $(this).addClass("selection");
})

$(".menu a").on("mouseleave",function(){
    $(this).removeClass("selection");
})



