class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here...");
   //Create a input box to enter the number
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option ")
    

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question1 = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.Question1.html("What Is The Total Land Area Of USA In Square Kilometers ?")
    this.Question1.position(150,80)
    
     this.option1.html("A: 9,172,389")
     this.option1.position(160,125)

     this.option2.html("B: 9,498,382")
     this.option2.position(460,125)

     this.option3.html("C: 8,253,897")
     this.option3.position(160,205)

     this.option4.html("D: 3,984,156")
     this.option4.position(460,205)

     

     this.input1.position(150, 280);
     this.input2.position(450,280)
     this.button.position(360, 320);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted")
      this.message.position(150,360)
    })


  }
}
