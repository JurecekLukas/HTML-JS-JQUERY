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

    };
    $("#btn1").on("click", function () {
        let vypis;
        Pocitej.stranaA = $("#A").val();
        Pocitej.stranaB = $("#B").val();
        Pocitej.jednotky = $("#unit").val();
        if ($("#typ").val() == 'obsah') vypis = `Obsah je: ${Pocitej.obsah()} ${Pocitej.jednotky} `;
        if ($("#typ").val() == 'obvod') vypis = `Obvod je: ${Pocitej.obvod()} ${Pocitej.jednotky} `;
        if ($("#typ").val() == 'uhlopricka') vypis = `Úhlopříčka je dlouhá : ${Pocitej.uhlopricka()} ${Pocitej.jednotky} `;
        else vypis=`Nezadal jste co vypočítat`;
        $("#vysledek").html(vypis);
    })    
});
