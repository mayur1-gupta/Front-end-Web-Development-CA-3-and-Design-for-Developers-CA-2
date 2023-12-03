

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then((data)=> data.json()).then((queendata1)=>{
    const x1 = document.getElementById("ingr1");
    const x2 = document.getElementById("ingr2");
    const x3 = document.getElementById("ingr3");
    const x4 = document.getElementById("ingr4");
    const x5 = document.getElementById("ingr5");
    const rendomImage= document.querySelector("#pizzaimage")
const rendomName=document.querySelector('.pizza')

rendomImage.addEventListener("click", function(){
    x1.innerText=queendata1.meals[0].strIngredient1
    x2.innerText=queendata1.meals[0].strIngredient2
    x3.innerText=queendata1.meals[0].strIngredient3
    x4.innerText=queendata1.meals[0].strIngredient4
    x5.innerText=queendata1.meals[0].strIngredient5
});
    })





const search = document.getElementById('searchm')
    searchItem=()=>{
        const Value = search.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Value}`

        fetch(url)
        .then((data)=>data.json()).then((searchedData)=>{
            const searchedDiv= document.getElementById('searchedoutput')
            searchedDiv.innerHTML = ''
            for(let j = 0; j < 10;j++){
                let searchbox = document.createElement('div')
                searchbox.setAttribute('id','searchBox')
    
                let pic = document.createElement('img');
                pic.setAttribute('id','Img');
                pic.setAttribute('src',searchedData.meals[j].strMealThumb)
                        
                let Sname = document.createElement('h1');
                Sname.setAttribute('id','headed')
                Sname.innerHTML = searchedData.meals[j].strMeal
    
                searchbox.appendChild(pic)
                searchbox.appendChild(Sname)
                searchedDiv.appendChild(searchbox)
                console.log(searchbox)
                
            }
        
        })
    }
    const srcbtn = document.getElementById('sub')
    srcbtn.addEventListener('click',searchItem)




    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((data) => data.json())
        .then((kingdata) => {
            console.log(kingdata);

            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then((data) => data.json())
                .then((queendata) => {
                    const queen1 = document.getElementById('pizzaimage');
                    const queen2 = document.getElementsByClassName('pizza')[0];
                    queen1.src = queendata.meals[0].strMealThumb;
                    queen2.innerText = queendata.meals[0].strMeal;
                });
        });












