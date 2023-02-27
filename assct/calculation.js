$(document).ready(function () {
    $('#on').click(function () {
        $("#calculator").css({ "backgroundColor": "white", "color": "black" });
        $("#container").css({ "backgroundColor": "white", "color": "black" });
        $(".num").css({ "backgroundColor": "white","color":"black"});
        $(".special").css({ "backgroundColor": "white" });
        $("#off").show();
        $("#on").hide();

    });
});
$(document).ready(function () {
    $('#off').click(function () {
        $("#calculator").css({ "backgroundColor": "black" });
        $("#container").css({ "backgroundColor": "black" });
        $(".num").css({ "backgroundColor": "black","color":"white" });
        $(".special").css({ "backgroundColor": "black" });
        $("#off").hide();
        $("#on").show();

    });
});
function backOneDigit() {
    $screenVAl = $("#screen").val();
    $length = $screenVAl.length;

    $("#screen").val($screenVAl.slice(0, ($length - 1)));
    console.log($screenVAl.length)

}
$("#clear").click(function () {
    $("#screen").val("");
    console.log("clearing..");
});


function onscreen(data) {
    if (data != '=') {
        $prv_Val = $("#screen").val();
        $("#screen").val($prv_Val + data);
    }

    else if (data == '=') {
        $prv_Val = $("#screen").val();
        $("#screen").val(eval($prv_Val));
    }
    else
        $("#screen").val("SYSTEM ERROR");

}
