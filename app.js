
function List(e){
    e.preventDefault();
    const text = document.querySelector("#n1").value; //Tar värdet från #text
    const tel = document.querySelector("#n2").value; //Tar värdet från #tel

    var oper = document.getElementById('operators').value;

    if(oper === '+')
    {
        const div = document.createElement("div"); //Skapar en div - måste va kvar
        const body = document.querySelector("body"); //Skapar en div inuti body

        div.innerHTML="<li>" + ["Inkomst"]+ " " + text + [" "] + tel + "</li>"; //Skapar en lista med inskrivna värdena
        body.appendChild(div);     }

    if(oper === '-')
    {
        const div = document.createElement("div"); //Skapar en div - måste va kvar
        const body = document.querySelector("body"); //Skapar en div inuti body

        div.innerHTML="<li>" + ["Kostnad"]+ " " + text + [" "] + tel + "</li>"; //Skapar en lista med inskrivna värdena
        body.appendChild(div);     }


    }