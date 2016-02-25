(function($) {
    // jQuery plugin definition
    $.fn.getState= function(state){

        console.log(state);

        if(state == "VA"){
            state= "Virginia";
        }

        if(state == "UT"){
            state= "Utah";
        }

        if(state == "OR"){
            state = "Oregon";
        }

        $(this).attr("font-family","Georgia");
        $(this).attr("font-weight","20px");

        if(state!="") {
            if (state == "OK" || state == "MA" || state == "AL" || state == "DC") {
                if (state == "MA") {
                    state = "mass";
                }
                $(this).html("<p style='margin-left:6%'>Website only allows sameorigin. For More Details about the State Government and Services <a href='http://www." + state + ".gov ' target='_blank'>Click here</a></p>");
            } else {
                $(this).html("<p style='margin-left:23%'>For More Details about the State Government and Services</p><iframe src= 'http://www." + state + ".gov' height='500px' width='800px' id='myFrame'></iframe>");
            }
        }
        else{
            $(this).html("<p></p>");
        }
    };

    return this;

})(jQuery);
