setInterval(
  function()
  {    
    //do something special
           setTimeout(function(){
               var dt = new Date();
           var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();           
           var d1 = new Date("2016-10-19 14:00:00");
           SECONDS=((d1-dt)/1000)+2;
           console.log(secondsTimeSpanToHMS(SECONDS)); 
               if(SECONDS<3)
               {
                     GrabtheDeal();
               }
            }, 1000);
  }, 1000);


function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}

function GrabtheDeal()
{
     clearInterval(timer);
    console.log("Grab deal called");
    var domLink = $( ".product" ).find( "div" ).find("a").get()[20];
    while($(domLink).hasClass("btn-disabled"))
    {
        console.log(" -- Not activated -- Will Grab it when avail");      
    }  
    $(domLink).click();

}
