console.log("Page is loading");

/*------------------- ES6 -----------------*/
//1. Make sure that the page has loaded
window.addEventListener('load', () => {
  console.log("Page has loaded");

  //2. Send a request for data
  fetch("http://api.open-notify.org/astros.json")
  //3. receive a response object that includes the information about data
  .then(response => {
    return response.json(); //return the json inside the response object
  })
  //4. access the data
  .then(data => {
    console.log(data);

    astronautNumber = data.number;

    //5. do something with the data
    // let astronautNo = data.number;

    // //create a new html element
    // let numberPar = document.createElement('p');
    // //add content to the paragraph
    // numberPar.innerHTML = astronautNo;

    // //select a section element
    // let containerDiv = document.getElementById('data_container');
    // //append the p element to the section
    // containerDiv.append(numberPar);

    // //add styling
    // numberPar.setAttribute('class', 'astronaut_number');
  })
  .catch(error => {
    console.log(error);
  });
});

/*--------------p5 -------------------*/

let astronautNumber;

function setup (){
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('data_container');

  // background(40, 40, 40);
}

function draw(){
  //check if the data is ready
  if(astronautNumber){
    for(let i=0; i<astronautNumber; i++){
      ellipse(100+i*70, 200, 50);
    }
  }else{
    console.log("Data is not ready");
  }

}
