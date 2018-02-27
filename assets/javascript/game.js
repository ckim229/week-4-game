var winCounter = 0;
$(document).ready(function(){
    var kawhi = {
        name: "Kawhi Leonard",
        attack: 25,
        counter: 25,
        health: 220,
        pace: 5,
    }
    var curry = {
        name: "Stephen Curry",
        attack: 30,
        counter: 10,
        health: 200,
        pace: 12,
    }
    var mj = {
        name: "Michael Jordan",
        attack: 31,
        counter: 31,
        health: 270,
        pace: 10,
    }
    var kobe = {
        name: "Kobe Bryant",
        attack: 28,
        counter: 20,
        health: 230,
        pace: 8,
    };


    $(".kawhi").data(kawhi);
    $(".curry").data(curry);
    $(".mj").data(mj);
    $(".kobe").data(kobe);


    $(".card").one("click", function() {
        $(this).removeClass(".card");
        $(this).appendTo(".select");
        $(this).css("background-color", "green");
        select=$(this).data();
        $(".card").siblings().addClass("opponent");
        $(".opponent").siblings().css( "background-color", "red" );
        $(".card").siblings().removeClass(".card").appendTo(".opponents").off("click");
        $(".opponent").one("click", function() {
            $(this).appendTo(".defender");
            $(this).css("background-color", "blue");
            defender= $(this).data();
        });
    });
        })
    
    function attack () {
        select.health -= defender.counter;
        defender.health -= select.attack;
    }

    $(".attack").on("click", function() {
        attack();
        $(".select .health").html(select.health);
        $(".defender .health").html(defender.health);
        $(".counters").html("You attacked " + defender.name + " for " + select.attack + " damage.<br>" + defender.name + " attacked you back for " + defender.counter + " damage.");
        select.attack += select.pace;
        if(select.health <=0) {
            $(".counters").html("You lost to " + defender.name + ". Click RESTART")
            $(".restart").html("<br>"+"<div class='row'><button type='button' class='btn btn-secondary btn-sm restart'>Restart</button></div>")
        }
        if(defender.health <=0) {
            $(".defender").empty();
            defender.attack = 0;
            $(".counters").html("You have beaten " + defender.name);
            winCounter++;
            if (winCounter===3) {
                $(".counters").html("YOU WIN!!! Click RESTART")
                $(".restart").html("<div class='row'><button type='button' class='btn btn-secondary btn-lg restart'>Restart</button></div>")
            }                
        }
    });

    $(".restart").on("click", function(){
        location.reload();
    })
    



