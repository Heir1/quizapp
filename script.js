const content = document.createElement("div");
content.className= "content"
content.id="content"
let id = 0;
let result=0;
let interval = "";
let nom, email;
let arr = [];


const questions = [
    {
        id : 1,
        question : "Quel est le type d'un fichier JavaScript ?",
        assert1 : ".ts",
        assert2 : ".js",
        assert3 : ".php",
        assert4 : ".html",
        ok : ".js",
    },

    {
        id : 2,
        question : "Javascript est un langage _______ ?",
        assert1 : "Orienté objet",
        assert2 : "Basé sur l'objet",
        assert3 : "Procédural",
        assert4 : "Aucune bonne assertion",
        ok : "Orienté objet",
    },

    {
        id : 3,
        question : "La Méthode pour accéder aux éléments HTML est ?",
        assert1 : "getElementById()",
        assert2 : "getElementsByClassName()",
        assert3 : "Les deux premières assertions sont vraies",
        assert4 : "Aucune bonne assertion",
        ok : "Les deux premières assertions sont vraies",
    },

    {
        id : 4,
        question : "Comment afficher les données avec du Javascript ?",
        assert1 : "document.write()",
        assert2 : "console.log()",
        assert3 : "window.alert()",
        assert4 : "Toutes les assertions sont vraies",
        ok : "Toutes les assertions sont vraies",
    },

    {
        id : 5,
        question : "Comment déclarer une donnée de type constant ?",
        assert1 : "const",
        assert2 : "var",
        assert3 : "let",
        assert4 : "constant",
        ok : "const",
    },

    {
        id : 6,
        question : "Lequel de ces frameworks n'est pas de Javascript ?",
        assert1 : "Express",
        assert2 : "VueJs",
        assert3 : "NextJs",
        assert4 : "Laravel",
        ok : "Laravel",
    },

    {
        id : 7,
        question : "Le mot clé pour déclarer une fonction asynchrone est ?",
        assert1 : "async",
        assert2 : "await",
        assert3 : "setTimeout",
        assert4 : "Aucune bonne assertion",
        ok : "async",
    },

    {
        id : 8,
        question : "Comment arrêter un timer en Javascript ?",
        assert1 : "clearTimer",
        assert2 : "clearInterval",
        assert3 : "intervalOval",
        assert4 : "Aucune bonne assertion",
        ok : "clearInterval",
    },

    {
        id : 9,
        question : "Comment déclarer une variable en Javascript ?",
        assert1 : "var",
        assert2 : "let",
        assert3 : "Les deux premières assertions sont vraies",
        assert4 : "Aucune bonne assertion",
        ok : "Les deux premières assertions sont vraies",
    },

    {
        id : 10,
        question : "Comment écrire un commentaire en une ligne ?",
        assert1 : "//",
        assert2 : "/**/",
        assert3 : "#",
        assert4 : "$$",
        ok : "//",
    },

    {
        id : 11,
        question : "Le résultat du code suivant est  ?  NaN === NaN",
        assert1 : "true",
        assert2 : "false",
        assert3 : "undefined",
        assert4 : "Error",
        ok : "false",
    },

    {
        id : 12,
        question : "Le résultat du code suivant est ?  typeof(NaN)",
        assert1 : "Object",
        assert2 : "Number",
        assert3 : "String",
        assert4 : "Aucune bonne assertion",
        ok : "Number",
    },

    {
        id : 13,
        question : "Comment écrire un commentaire en plusieurs lignes ?",
        assert1 : "//",
        assert2 : "/**/",
        assert3 : "#",
        assert4 : "$$",
        ok : "/**/",
    },

    {
        id : 14,
        question : "Dans quel élément HTML place-t-on le JavaScript ?",
        assert1 : "<script>",
        assert2 : "<javascript>",
        assert3 : "<js>",
        assert4 : "<scripting>",
        ok : "<script>",
    },

    {
        id : 15,
        question : "Comment écrire 'Hello World' dans une boîte d'alerte ?",
        assert1 : "msg('Hello World')",
        assert2 : "msgBox('Hello World')",
        assert3 : "alert('Hello World')",
        assert4 : "alertBox('Hello World')",
        ok : "alert('Hello World')",
    }

]



// Quel est le résultat de l'extrait de code suivant ?



function home(){
    content.innerHTML = `
        <div class="home">
            <h1 class="center">JavaScript Quiz</h1>
            <p class="description">
                Evaluez vos cannaissances en JavaScript en répondant aux questions que nous avons spécialement sélectionnées pour vous. <br>C'est fun et c'est gratuit.
            </p>
            <form onsubmit="signin(event)">
                <div class="formcontent">
                    <label for="" class="loginlabel">Nom</label>
                    <input type="text" name="name" id="name">
                    <span id="errorname">N’oubliez pas de renseigner votre nom avant de commencer le Quiz.</span>
                </div>

                <div class="formcontent">
                    <label for="" class="loginlabel1">Email</label>
                    <input type="text" name="email" id="email">
                    <span id="erroremail">N’oubliez pas de renseigner votre email avant de commencer le Quiz.</span>
                </div>

                <div class="formcontent">
                    <button class="commencer" type="submit">Commencer</button>
                </div>

            </form>
        </div>
`
document.body.appendChild(content)
}

window.onload = home()

function exam(){
        content.innerHTML = `
            <div class="home">
                <h6 class="justifier" id="quizquestion">${questions[id].question}</h6>
                <div class="formcontent" id="timingquestion">                   
                    <div class="labelcontent">
                        <label for="" id="numquest">Question ${questions[id].id}/${questions.length}</label>
                        <label for="" id="min">60</label>
                    </div>
                    <progress id="progress" value="60" max="60"></progress>
                </div>
                <form onsubmit="evaluation(event)" id="myForm">
                    <div class="formcontent">
                        <div class="question" onClick="handleClick(this)" id="question">
                            <input type="radio" onClick="choose(this)" class="rdbg" name="response" id="first" value="${questions[id].assert1}"> <span class="ass" id="first1">${questions[id].assert1}</span>
                        </div>
                        <div class="question" onClick="handleClick(this)" id="question1">
                            <input type="radio" onClick="choose(this)" class="rdbg" name="response" id="second" value="${questions[id].assert2}"> <span class="ass"id="second1">${questions[id].assert2}</span>
                        </div>
                        <div class="question" onClick="handleClick(this)" id="question2">
                            <input type="radio" onClick="choose(this)" class="rdbg" name="response" id="third" value="${questions[id].assert3}"> <span class="ass" id="third1">${questions[id].assert3}</span>
                        </div>
                        <div class="question" onClick="handleClick(this)" id="question3">
                            <input type="radio" onClick="choose(this)" class="rdbg" name="response" id="fourth" value="${questions[id].assert4}"> <span class="ass" id="fourth1">${questions[id].assert4}</span>
                        </div>
                        
                        <div class="formbtn">
                            <button class="quitter" type="button" onClick="resultat()">Quitter</button>
                            <button class="suivant" type="submit" id="suivant" disabled>Suivant</button>
                        </div>
                    </div>
                </form>
            </div>
        `

    document.body.appendChild(content)
    increment();
}

function increment(){
    interval = setInterval(function () {
       let num = Number(document.getElementById("progress").value)
       if(num > 0) num--
       document.getElementById("progress").value = num
       document.getElementById("min").textContent = num
       if(num === 0){
           if((id+1) === questions.length){
               resultat();
           }
           else{
               evaluation1()
           }   
       }
    }, 1000);
}


function signin (event){
    event.preventDefault();
    nom = document.getElementById("name").value.trim()
    email = document.getElementById("email").value.trim()
    

    if(!nom){
        errorNameValidation();
    }
    
    if(!email){
        errorEmailValidation();
    }

    if(nom.length > 1 && validateEmail(email)){
        exam();
    }

    if(nom.length > 1){
        const errorname = document.getElementById("errorname");
        errorname.style.color = "white";
        nom = document.getElementById("name")
        nom.setAttribute("style", "1px solid #DDDDDD")
    }

    if(validateEmail(email)){
        const erroremail = document.getElementById("erroremail");
        erroremail.style.color = "white";
        email = document.getElementById("email")
        email.setAttribute("style", "1px solid #DDDDDD")
    }

    if(nom.length === 1){
        const errorname = document.getElementById("errorname");
        errorname.textContent = "Veuillez renseigner un nom d'au moins de deux caractères.";
        errorname.setAttribute("style", "color: #FF3838")
        errorname.style.fontSize = "9px";
        errorname.style.textAlign = "justify";
        errorname.style.fontWeight = "bold";
    }

    if(email.length > 0 && !validateEmail(email)){
        const erroremail = document.getElementById("erroremail");
        erroremail.textContent = "Veuillez renseigner une adresse email valide.";
        erroremail.setAttribute("style", "color: #FF3838")
        erroremail.style.fontSize = "9px";
        erroremail.style.textAlign = "justify";
        erroremail.style.fontWeight = "bold";
    }

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const validName = (name) => {

}

function quitter(event){
    event.preventDefault();
    // home()
}

function evaluation1(){
    id++;
    clearInterval(interval)
    document.getElementById("myForm").reset()
    document.getElementById("quizquestion").textContent = questions[id].question
    document.getElementById("progress").value = 60;
    increment();
    document.getElementById("numquest").textContent = `Question ${id+1}/${questions.length}`;
    document.getElementById("suivant").disabled = true;
    document.getElementById("question").removeAttribute("style")
    document.getElementById("question1").removeAttribute("style")
    document.getElementById("question2").removeAttribute("style")
    document.getElementById("question3").removeAttribute("style")   
}

function evaluation(event){
    event.preventDefault();
    checking();
    id++;
    if(id < questions.length){

        if(id === questions.length-1){
            document.getElementById("suivant").textContent = "Terminer";
        }
        document.getElementById("myForm").reset()
        clearInterval(interval)
        document.getElementById("quizquestion").textContent = questions[id].question
        affectation();
        document.getElementById("progress").value = 60;
        increment();
        document.getElementById("numquest").textContent = `Question ${id+1}/${questions.length}`;
        document.getElementById("suivant").disabled = true;
        document.getElementById("question").removeAttribute("style")
        document.getElementById("question1").removeAttribute("style")
        document.getElementById("question2").removeAttribute("style")
        document.getElementById("question3").removeAttribute("style")
    }
    else{
        resultat();
    }
    

}

function choose(btn){
    document.getElementById("suivant").disabled = false;
}

function affectation(){

    document.getElementById("first").value = questions[id].assert1
    document.getElementById("second").value = questions[id].assert2
    document.getElementById("third").value = questions[id].assert3
    document.getElementById("fourth").value = questions[id].assert4

    document.getElementById("first1").textContent = questions[id].assert1
    document.getElementById("second1").textContent = questions[id].assert2
    document.getElementById("third1").textContent = questions[id].assert3
    document.getElementById("fourth1").textContent = questions[id].assert4

}

function checking(){
    if(document.getElementById("first").checked){
        if(document.getElementById("first").value === questions[id].ok )result++
    }else if(document.getElementById("second").checked){
        if(document.getElementById("second").value === questions[id].ok )result++
    }else if(document.getElementById("third").checked){
        if(document.getElementById("third").value === questions[id].ok )result++
    }else if(document.getElementById("fourth").checked){
        if(document.getElementById("fourth").value === questions[id].ok )result++
    }
}

function resultat(){
    clearInterval(interval)
    if(result >= (questions.length)/2){
        for (let index = 0; index < 100; index++) {
            confetti({
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.1
                }
            })
        }
        content.innerHTML = `
            <div class="home">
                <div class="result">
                    <h1 class="center1">${nom}</h1>
                    <br><br>
                    <h3 class="justifier">${email}</h3>
                    <img src="success.png" alt="">
                    <h3 class="score">${result}/${questions.length}</h3>
                    <br>
                    <button class="accueil" onClick="home()" >Accueil</button>
                </div>
            </div> 
        `
    }
    else{
        content.innerHTML = `
            <div class="home">
                <div class="result">
                    <h1 class="center1">${nom}</h1>
                    <br><br>
                    <h3 class="justifier">${email}</h3>
                    <img src="failed.png" alt="">
                    <h3 class="score">${result}/${questions.length}</h3>
                    <br>
                    <button class="accueil" onClick="home()">Accueil</button>
                </div>
            </div>
        `
    }
    id=0;
    result=0;
}

function errorNameValidation(){
    nom = document.getElementById("name");
    const errorname = document.getElementById("errorname");
    errorname.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz."
    errorname.setAttribute("style", " color : #FF3838; font-size: 9px; text-align: justify; font-weight: bold;");
    nom.setAttribute("style", "border: 1px solid #FF3838;");
}

function errorEmailValidation(){
    email = document.getElementById("email")
    const erroremail = document.getElementById("erroremail");
    erroremail.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz."
    erroremail.setAttribute("style", " color : #FF3838; font-size: 9px; text-align: justify; font-weight: bold;");
    email.setAttribute("style", "border: 1px solid #FF3838;");
}

function handleClick(btn){
    let id = btn.id;
    let i=2;

    btn.setAttribute('style', "border : 1px solid #008000bf");

    let elem = document.getElementById(`${id}`);

    arr.push(elem);
    if(arr.length >= 2){
        arr[(arr.length-2)].setAttribute('style', "border : 1px solid #DDDDDD");
        console.log(arr[(arr.length-2)]);
    }
    elem.children[0].checked = true;
    document.getElementById("suivant").disabled = false
}