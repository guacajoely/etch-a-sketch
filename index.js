let gridContainer = document.getElementById('grid-container')
let button = document.querySelector("button")

//get grid width and height from user via prompt and create grid of div elements using loop
button.addEventListener("click", function(){

    let gridWidth = prompt("How many pixels per side? (max 100)");

    //check that entered value is between 0 and 100, otherwise request valid # via alert box
    if (gridWidth < 100 && gridWidth > 0){

        //the grid area is going to be how many empty div boxes we create total
        let gridArea = gridWidth * gridWidth
        console.log(`the grid area was set to ${gridArea} (${gridWidth} x ${gridWidth})`)

        //setting the number of pixels per column and the height and width of the container so that the pixels are always 20px by 20px
        let containerWidthHeight = gridWidth * 20;
        gridContainer.setAttribute('style', `

        grid-template-columns: repeat(${gridWidth},1fr); 
        width: ${containerWidthHeight}px; 
        height: ${containerWidthHeight}px;
        
        `); 

        //!***clear current grid before creating new divs***!
        gridContainer.innerHTML = ''

        //create DIVS using for loop
        for (let i=0; i < gridArea; i++){
            
            gridContainer.innerHTML += `<div id='${i}' class='pixel'></div>`

        }
    }

    else {alert("please enter a valid number")}

})


//listen for hover event and change div class to pixelFilled when triggered
let div = document.querySelector("div")
div.addEventListener("mouseover", function(e){
    
    //test pixel detection
    console.log('pixel ' + e.target.id +' triggered')

    //make hover stop grabbing grid-container
    if(e.target.id !== 'grid-container'){

        //grab id from hover and add pixelFilled class to classList
        let selectedPixel = document.getElementById(`${e.target.id}`)
        selectedPixel.classList.add('pixelFilled');  
    }

});

