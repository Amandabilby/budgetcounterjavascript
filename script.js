
let count = []; //Skapar en array

// Skapar en funkion med variablar som pushar värdena till arrayen 'count' och skapar ett p element
function List(e){
       e.preventDefault();

       var oper = document.getElementById('operators').value; //Variabel som är kopplad till operators
    if(oper === '+') //+ lägger till inkomst
    {

        const beskr= document.querySelector("#beskrivning").value;
        const summaInkomst = document.querySelector("#summa").value;
        let num =Number(summaInkomst); 
        count.push(num) 
        const div2 = document.createElement("P"); 
        div2.innerHTML = beskr + "    " + summaInkomst 
        document.getElementById("inkomster").appendChild(div2);

    }

   else if(oper === '-') // - lägger till kostnad 
    {

    const beskr= document.querySelector("#beskrivning").value; 
    const summaCost = document.querySelector("#summa").value; 
    let num2 = Number(-summaCost); 

    count.push(num2) //Pushar upp värdena i num till arrayen 
    const div= document.createElement("P"); 
    div.innerHTML= beskr + "    " + summaCost 

    document.getElementById("utgifter").appendChild(div); 

    }

    if(document.querySelector("#beskrivning").value === "" || document.querySelector("#summa").value === "")
    {
        alert("Fyll i både beskrivning och summa!");
    } // Skapar en alert ifall man inte fyllt i beskrivning och/eller summa
    
    
let totalt= 0; 
    for(let i =0; i<count.length; i++){ 
      totalt +=  count[i] // Lägger till det totala värdet (plussar på från 0)

    }

   
    document.querySelector("#totalVinst").textContent = ['Total vinst:'] + [' '] + totalt // kommer lägga till och visa det totala vinsten
   

}

const addBtn = document.querySelector(".addBtn")
addBtn.addEventListener("click", List );

