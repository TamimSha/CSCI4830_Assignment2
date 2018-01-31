$(document).ready(function() { // do this when the document is loaded
    $("#content_dialer").show(); // show the element with ID "element"
    $("#content_list").hide();
    $("#content_third").hide(); // hide the element with ID "otherElement"
});

$("#b1").click(function() { // when "button_id" is clicked
    $("#content_dialer").show(); // show element
    $("#content_list").hide();
    $("#content_third").hide(); // hide other element
});

$("#b2").click(function() { // when "button_id" is clicked
    $("#content_list").show(); // show element
    $("#content_dialer").hide();
    $("#content_third").hide(); // hide other element
});

$("#b3").click(function() { // when "button_id" is clicked
    $("#content_third").show(); // show element
    $("#content_dialer").hide();
    $("#content_list").hide(); // hide other element
});