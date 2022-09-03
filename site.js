function sendForme(e)
{
    var keyBox=document.search.key;
    var val = keyBox.value;
    if (val.length>5)
    {
        alert("soo loong");
        e.preventDefault();
    }
    else
    alert("Lets go!");
}
var sendButton = document.search.send;
sendButton.addEventListener("click", sendForme);
