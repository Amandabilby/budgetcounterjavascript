let raknar = []; //Variabeln raknar görs till en array
 
function List(e){
       e.preventDefault();

       var oper = document.getElementById('operators').value; //Variabel som är kopplad till operators
    if(oper === '+') //Om du väljer + så händer följande: 
    {

        const text= document.querySelector("#beskrivning").value; //Variabel som är kopplad till id: text 1
        const tel2 = document.querySelector("#summa").value; //Variabel som är kopplad till id: tel 2
        let num =Number(tel2); //Variabeln num gör att variabeln tel2 konverteras till nummer 3

        raknar.push(num) //Pushar upp värdena i num till arrayen "raknar" 4
        const div2 = document.createElement("P"); //Skapar ett element P när variabeln div2 anropas 5
        div2.innerHTML = text + "    " + tel2 //Lägger text + tel2 i div2 inuti HTML-koden 6

        document.getElementById("inkomster").appendChild(div2); //Div2 kopplas ihop med id:et inkomster 7

    }

   else if(oper === '-') //Om du väljer - så händer följande: 
    {

    const text= document.querySelector("#beskrivning").value; //Variabel som är kopplad till id: text 1
    const tel = document.querySelector("#summa").value; //Variabel som är kopplad till id: tel 2
    let num2 = Number(-tel); //Variabeln num gör att variabeln tel2 konverteras till nummer 3

    raknar.push(num2) //Pushar upp värdena i num till arrayen "raknar" 4
    const div= document.createElement("P"); //Skapar ett element P när variabeln div2 anropas 5
    div.innerHTML= text + "    " + tel //Lägger text + tel2 i div2 inuti HTML-koden 6

    document.getElementById("utgifter").appendChild(div); //Div2 kopplas ihop med id:et inkomster 7

    }
let totalt= 0; //totalen ska vara noll från början på vinsten, detta är variabeln för det
    for(let i =0; i<raknar.length; i++){ //en loop som loopar igenom en array som bildas av alla nya värden
      totalt +=  raknar[i] //Den lägger då till värdena på totalt ( alltså 0)

    }

    document.querySelector("#vinstbold").textContent = ['Total vinst:'] + [' '] + totalt //totalt kommer sen att synas på #vinstbold

}

const addBtn = document.querySelector(".addBtn")
addBtn.addEventListener("click", List );