//function to clear grid (set opacity of all divs to 0)
let clearGrid = document.querySelector("#clear-grid")
clearGrid.addEventListener("click", function(){

    let allDivs = document.querySelectorAll('div')
    allDivs.forEach( function(id){
        id.style.opacity = 0;
    })
})



//get grid width and height from user via prompt and create grid of div elements using loop
let gridContainer = document.getElementById('grid-container')
let resizeGrid = document.querySelector("#resize-grid")
resizeGrid.addEventListener("click", function(){

    let gridWidth = prompt("How many pixels per side? (max 80)");

    //check that entered value is between 1 and 80, otherwise request valid # via alert box
    if (gridWidth <= 80 && gridWidth > 0){

        //the grid area is going to be how many empty div boxes we create total
        let gridArea = gridWidth * gridWidth
        console.log(`the grid area was set to ${gridArea} (${gridWidth} x ${gridWidth})`)

        //setting the number of pixels per column and the height and width of the container so that the pixels are always 15px by 15px
        let containerWidthHeight = gridWidth * 15;
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



//listen for hover event and increase opacity when triggered
let divs = document.querySelectorAll('div')
divs.forEach(addEventListener("mouseover", function(e){
    
    //test pixel detection
    console.log('pixel ' + e.target.id +' triggered')

    //make hover stop grabbing grid-container
    if(e.target.id !== 'grid-container' && 
        e.target.id !== "clear-grid" && 
        e.target.id !== "resize-grid"){

        //grab id from hover and increase current opacity of element by 10%
        let selectedPixel = document.getElementById(`${e.target.id}`)

        //opacity is a blank string by default and this creates NAN results for future equations
        //tbh i'm not sure why. its been a long day. but assigning 0 fixes it so...
        if(selectedPixel.style.opacity === ''){
            selectedPixel.style.opacity = 0
        }

        let currentOpacity = parseFloat(selectedPixel.style.opacity)
        console.log('current opacity is ' + selectedPixel.style.opacity)

        let newOpacity = currentOpacity + .1
        selectedPixel.style.opacity = `${newOpacity}`;
        console.log("the pixel's opacity is now " + selectedPixel.style.opacity)
        
    }

}));

