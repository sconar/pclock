$(function() {

    let buzzer = $("#alarm")[0],
        count = parseInt($("#num").html()),
        count1 = parseInt($("#breakNum").html());
        
        /*buzzer.play();*/
        
    $("#session").hide();
    
        
        
    $("#start").click(function() {
        
       let counter = setInterval(timer, 1000);
       
       
       
       function timer() {
           $("#custom").hide();
           $("#session").show();
           $("#session").html("Time: ");
           
           
           count -= 1;
           
           if (count === 0) {
               buzzer.play();
               clearInterval(counter);
               $("#num").hide;
               let counter1 = setInterval(breakTimer, 1000);
               
           }
           
           $("#num").html(count);
           
           if (count % 60 >= 10) {
               $("#num").html(Math.floor(count / 60) + ":" + count % 60)
           } else {
               $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60)
           }
           
           function breakTimer() {
               
               $("#session").html("Break: ");
               $("#breakNum").show();
               
               count1 -= 1;
               
               if (count1 === 0) {
                   clearInterval(count);
                   buzzer.play();
                   $("#reset").show();
                   $("#breakNum, #session").hide();
               }
               
               $("#breakNum").html(count1);
               
               if (count1 % 60 >= 10) {
               $("#breakNum").html(Math.floor(count1 / 60) + ":" + count1 % 60)
           } else {
               $("#breakNum").html(Math.floor(count1 / 60) + ":" + "0" + count1 % 60)
           }
           }
       }
    });
    

    $("#m5Time").click(function() {
        if (count > 0) {
            count -= 5;
            $("#num").html(count);
        }
        event.preventDefault();
    });

    $("#p5Time").click(function() {
        count += 5;
        $("#num").html(count);
        event.preventDefault();
    });
    
    $("#m5Break").click(function() {
        if (count1 > 0) {
            count1 -= 5;
            $("#breakNum").html(count1);
        }
        event.preventDefault();
    });

    $("#p5Break").click(function() {
        count1 += 5;
        $("#breakNum").html(count1);
        event.preventDefault();
    });
    
    $("#reset").click(function() {
        location.reload(true);
    });

});
