var calcul=[]
function addToInterface(element){
    interface=document.getElementById("interface");
    interface.innerHTML+=element;
    calcul.push(element)
};

function clearInterface(){
    interface=document.getElementById("interface");
    interface.innerHTML='';
    calcul=[]
};

function exe(){
    for(let i=0;i!=calcul.length-1;i++){
        if(isNaN(calcul[i]) && isNaN(calcul[i+1])){
            clearInterface()
            alert("A symbol cannot be next to another symbol!")
            break

        }
    }
    console.log(calcul)
    if(calcul.length!=0){
        if(calcul[0]=="-"){
            calcul.shift()
            calcul[0]=-calcul[0]
        }else if(calcul[0]=="+"){
            calcul.shift
        }else if(isNaN(calcul[0])){
            clearInterface()
            alert("calcul cannot start with '.' , '*' or '/' ")
        }
        var n=""
        var numbers=[]
        var prioOperator=verify(calcul)
        for(var element=0 ;element!=calcul.length;element++){
            if (!isNaN(calcul[element]) || calcul[element]=="."){
                n+=calcul[element]
            }else{
                numbers.push(n)
                n=""
                numbers.push(calcul[element])
            }
        }
        numbers.push(n)
        console.log(numbers)
        if(prioOperator>0){
            for(let i = 0; i!=numbers.length;i++){
                if(numbers[i]=="*" || numbers[i]=="/"){
                    if(numbers[i]=="*"){
                        var result = numbers[i-1]*numbers[i+1]
                        numbers.splice(i,i+1)
                        numbers[i-1]=String(result)
                        console.log(numbers)
                        i-=1
                    }else{
                        var result = numbers[i-1]/numbers[i+1]
                        numbers.splice(i,i+1)
                        numbers[i-1]=String(result)
                        console.log(numbers)
                        i-=1
                    }
                }
            }
        }for (let i=0;i!=numbers.length;i++){
            if(numbers[i]=="+" || numbers[i]=="-"){
                if(numbers[i]=="+"){
                    var result = Number(numbers[i-1])+Number(numbers[i+1])
                    numbers.splice(i,i+1)
                    numbers[i-1]=String(result)
                    console.log(numbers)
                    i-=1
                }else{
                    var result = Number(numbers[i-1])-Number(numbers[i+1])
                    numbers.splice(i,i+1)
                    numbers[i-1]=String(result)
                    console.log(numbers)
                    i-=1
                }
            }
        }console.log(numbers)

    };
    clearInterface();
    var number = numbers[0]
    console.log(number)
    for (let i=0;i!=number.length;i++){
        if (!isNaN(number[i])){
            addToInterface(Number(number[i]))
        }else{
            addToInterface(number[i])
        }

    }
}
    
    // Verify if there is * or /
function verify(element){
    var nPrio=0;
    for(let i=0;i!=element.length;i++){
        if (element[i]=="*" || element[i]=="/"){
            nPrio+=1;
        }
    }
    return(nPrio);
}

function supp (){
    if(calcul.length!=0){
        var suppCalcul=calcul
        clearInterface()
        for (let i=0;i!=suppCalcul.length-1;i++){
            addToInterface(suppCalcul[i])
            console.log(suppCalcul[i])
        }
    }
    
}
