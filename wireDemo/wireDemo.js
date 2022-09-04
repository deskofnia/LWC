import { LightningElement, wire, track } from 'lwc';
import getOpportunity from '@salesforce/apex/WireDemoClass.getOpportunity'

const columns = [
    {label:'Opportunity', fieldName:'Name'},
    {label:'Record ID', fieldName:'Id'},
];
export default class WireDemo extends LightningElement {

    @track columns = columns;
    @track data = [];
    @wire(getOpportunity)
    wireOpportunities({data, error}){
    if(data)
    {
        this.data = data;
    }
    else if(error)
    {
        console.log("Error Occurred");
    }
    };
}