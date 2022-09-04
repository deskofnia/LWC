import { LightningElement } from 'lwc';


export default class FirstComponent extends LightningElement {

nameWithAge;

handleWithClick()
{
    var name = this.template.querySelector('.nameField').value;
    var age = this.template.querySelector('.ageField').value;

    this.nameWithAge = name +'`s age is '+age;

    if(1 < age <= 25)
    {
        this.template.querySelector('.pg').style.color ='Green';

    }
    if(25 < age <= 50)
    {
        this.template.querySelector('.pg').style.color ='Yellow';
    }
    if(50 < age <= 75)
    {
        this.template.querySelector('.pg').style.color ='Red';
    }


    
}
}