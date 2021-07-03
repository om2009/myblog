var guest_list = [];
var guest_list1 = [];
function submit()
{
    var input = document.getElementById("input_1").value;
    guest_list.push(input, "<br>");
    guest_list1.push(input);
    document.getElementById("submit_div").innerHTML = guest_list1;
}
function show()
{
    var remove_commas = guest_list.join(" ");
    console.log(remove_commas);
    document.getElementById("show_text").innerHTML = remove_commas;
}
function sort()
{
    guest_list1.sort()
    document.getElementById("srot_text").innerHTML = guest_list1;
}

function search()
{
    var s = document.getElementById("input_shearch").value;
    var found = 0;
    for(var j = 0; j<guest_list.length; j++)
    {
        if (s==guest_list[j])
        {
            found = found+1;
        }
    }
    document.getElementById("search_div").innerHTML = "Name Found" + " " + found + " " + "time's";
}