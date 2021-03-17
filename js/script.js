$(function () {
    let Pocitej = {
        stranaA: 5,
        stranaB: 2,
        jednotky: "cm",

        obvod:function(){
            return(this.stranaA+this.stranaB+this.stranaA+this.stranaB);
        },

        obsah:function(){
            return(this.stranaA*this.stranaB);
        },

        uhlopricka:function(){
            return(Math.sqrt(Math.pow(this.stranaA,2)+Math.pow(this.stranaB,2)));
        }

    };

    var vypis;
    var a;

  $("#btn1").on("click", function () {
        Pocitej.stranaA = parseInt($("#A").val());
        Pocitej.stranaB = parseInt($("#B").val());
        Pocitej.jednotky = $("#unit").val();
        if($('#obsah').prop('checked')){
            vypis = Pocitej.obsah()+ " " +Pocitej.jednotky;
        }else if($('#obvod').prop('checked')){
            vypis = Pocitej.obvod()+ " " + Pocitej.jednotky;
        }else if($('#uhlopricka').prop('checked')){
            vypis = Pocitej.uhlopricka()+" " + Pocitej.jednotky;
        }
        $("#vysledek").html(vypis);
    })
});
