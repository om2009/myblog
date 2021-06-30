menu_list_array = ["Veg Margherita Pizza", 
                   "chicken pizza", 
                   "chocalate pizza", 
                   "paneer pizza"];

function getmenu(){
var htmldata;
//Complete the code
htmldata = "<ol class='menu_list'>"
menu_list_array.sort
for (var k=0; k<menu_list_array.length; k++)
{
    htmldata = htmldata + '<li>' + menu_list_array[k] + '</li>';
}
htmldata = htmldata + "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code
htmldata = "<section class='cards'>"
menu_list_array.sort
for (var k=0; k<menu_list_array.length; k++)
{
    htmldata = htmldata + "<div class='cards'>" + '<img class="img" src= "pizzaImg.png"/>' + menu_list_array[k] + "</div>";
}
htmldata = htmldata + "</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;

}

function add_top(){
//Complete the code
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
document.getElementById("add_item").value = " ";
}