$(function () {
    let Pocitej ={
        stranaA: 5,
        stranaB: 2,
        typ: "obsah",
        jednotky: "cm",

        obvod:function(){
            return((this.stranaA+this.stranaB)*2);
        },

        obsah:function(){
            return(this.stranaA*this.stranaB);
        },
        
        uhlopricka:function(){
            return(sqrt(pow(stranaA,2)+pow(stranaB,2)));
        }

    }

    var vypis;

  $("#btn1").on("click", function () {
        Pocitej.stranaA = $("#A").val();
        Pocitej.stranaB = $("#B").val();
        Pocitej.jednotky = $("#unit").val();
        if ($("#typ").val() == "obsah"){
            vypis = Pocitej.obsah()+" "+Pocitej.jednotky;
            console.log(vypis);
            $("#vysledek").html(vypis);
        }
        else if ($("#typ").val() == "obvod"){
            vypis = Pocitej.obvod()+" "+Pocitej.jednotky;
            console.log(vypis);
            $("#vysledek").html(vypis);
        }
        else if ($("#typ").val() == "uhlopricka"){
            vypis = Pocitej.uhlopricka()+" "+Pocitej.jednotky;
            console.log(vypis);
            $("#vysledek").html(vypis);
        }
        else{
            vypis = "Vyber typ výpočtu!!!!";
            console.log(vypis);
            $("#vysledek").html(vypis);
        }

    })
});
