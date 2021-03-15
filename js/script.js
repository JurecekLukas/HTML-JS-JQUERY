$(document).ready(function(){
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
            return(sqrt(pow(stranaA,2)+pow(stranaB,2)))
        }

    }



  $("#btn1").click(function(){
        let ao = $("#A").val();
        let ab = $("#B").val();
        alert((parseInt(ao)+parseInt(ab))*2);
    });
});
