
//TODO: Fix mobile modal button
//TODO: Add contact info
//TODO: Add contact modal

const descriptions = [
    "Sed ornare a nisi sed commodo. Phasellus in faucibus est. Nunc vitae urna quis magna pellentesque sollicitudin quis et ipsum. Integer vel pellentesque dui. Nam.", 
    "In suscipit nunc vel enim elementum, in venenatis leo condimentum. Integer sed ultricies mauris. Duis id gravida urna. Nulla pulvinar mauris ipsum, eu ornare ligula.",
    "Integer vel ligula tincidunt, luctus felis ut, tincidunt neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mollis posuere.",
    "Nam tincidunt dui vitae orci sollicitudin cursus. Duis id libero quis metus bibendum mollis. Suspendisse rutrum, tellus ornare consectetur gravida, elit neque tempor lacus, eget.",
    "Quisque porta vel quam sit amet consequat. Nulla sit amet consectetur mauris. Aenean posuere scelerisque metus sit amet pellentesque. Etiam vestibulum magna vel metus consectetur."
];
const techStacks = ["fa-html5", "fa-css3-alt", "fa-js", "fa-sass", "fa-react", "fa-node-js", "fa-bootstrap"]
const modalDic = {
    one: ["Project One", "images/stock1.jpg", descriptions[0], techStacks[0], techStacks[1], techStacks[2]],
    two: ["Project Two", "images/stock2.jpg", descriptions[1] , techStacks[0], techStacks[3], techStacks[2]],
    three: ["Project Three", "images/stock3.jpg", descriptions[2], techStacks[4], techStacks[3], techStacks[2]],
    four: ["Project Four", "images/stock4.jpg", descriptions[3], techStacks[6], techStacks[1], techStacks[2]],
    five: ["Project Five", "images/stock5.jpg", descriptions[4], techStacks[3], techStacks[5], techStacks[6]]
    
};



$(function () {
    $.fn.generateModal = function(project){ 
        $('#projectModal').modal('show');
        $("#projectLabel").html(project[0]);
        $("#projectImage").attr("src", project[1]);
        $("#projectDescription").html(project[2]);
        $("#techOne").removeClass();
        $("#techOne").addClass("fab fa-lg ml-2");
        $("#techOne").addClass(project[3]);
        $("#techTwo").removeClass();
        $("#techTwo").addClass("fab fa-lg ml-2");
        $("#techTwo").addClass(project[4]);
        $("#techThree").removeClass();
        $("#techThree").addClass("fab fa-lg ml-2");
        $("#techThree").addClass(project[5]);

    }

    $("#projectOne").click(function () {
        $.fn.generateModal(modalDic.one);
    });
    $("#projectTwo").click(function () {
        $.fn.generateModal(modalDic.two);
    });
    $("#projectThree").click(function () {
        $.fn.generateModal(modalDic.three);
    });
    $("#projectFour").click(function () {
        $.fn.generateModal(modalDic.four);
    });
    $("#projectFive").click(function () {
        $.fn.generateModal(modalDic.five);
    });
});
