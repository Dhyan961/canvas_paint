canvas = document.getElementById("myCanvas");
cntx = canvas.getContext("2d");

window.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("colour").value;
    width_of_line = document.getElementById("line_width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

window.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_pos_of_X = e.clientX - canvas.offsetLeft;
    current_pos_of_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        console.log("Current Position Of X and Y coordinates = ");
        console.log("x = " + current_pos_of_X + "y = " + current_pos_of_Y);

        cntx.beginPath();
        cntx.strokeStyle = color;
        cntx.lineWidth = width_of_line;
        cntx.arc(current_pos_of_X , current_pos_of_Y , radius , 0 , 2 * Math.PI);
        cntx.stroke();
    }
}

window.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp";
}