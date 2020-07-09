class Form{
    constructor(){
        this.name=createInput("Enter name: ");
        this.email=createInput("Enter email: ");
        this.age=createInput("Enter age: ");
        this.button=createButton("Save");
    }
    display(){

         
         this.email.position(150,500);

         
         this.name.position(350,500);
        
         
         this.age.position(550,500);

        
         this.button.position(750,500);

        var q1=createElement("h3", "Do you live near a containment zone?" );
        var radio=createRadio("h3");
        radio.option("Yes");
        radio.option("No");
        q1.position(50,50);
        radio.position(50,100);

        var q2=createElement("h3", "Do you know anybody infected with COVID-19?" );
        var radio2=createRadio("h3");
        radio2.option("Yes");
        radio2.option("No");
        q2.position(50,150);
        radio2.position(50,200);

        var q3=createElement("h3", "Do you have any symptoms?" );
        var radio3=createRadio("h3");
        radio3.option("Yes");
        radio3.option("No");
        q3.position(50,250);
        radio3.position(50,300);

        this.button.mousePressed(()=>{
            database.ref('/').set({
                name:this.name,
                email:this.email,
                age:this.age
                

            })
        });
    }

}