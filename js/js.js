function myAccordion() {
    // slide the contents of .accordion-title-description up or down depending upon the condition.
    $(this).children(".accordion-title-description").slideToggle();
    // if span element has class .rotate180Degrees then remove it else add it
    if($(this).children("h2").children().hasClass("rotate180Degrees") == true) {
        $(this).children("h2").children().removeClass("rotate180Degrees");
    } else {
        $(this).children("h2").children().addClass("rotate180Degrees");
    }
    // if other descriptions are open then slide them up and make their arrow down by rotating it 180 degrees
    $(this).siblings().children(".accordion-title-description").slideUp(function () {
        $(this).siblings("h2").children().removeClass("rotate180Degrees"); // here this reflects .accordion-title-description2
    });
}


$(document).ready(function() {

    var accordionTitle = $(".accordion-title");
    var accordionTitleDescription = $(".accordion-title-description");
    
    accordionTitleDescription.hide();
    accordionTitle.click(myAccordion);

});
