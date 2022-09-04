import { LightningElement, wire , track } from 'lwc';
import getOpportunity from '@salesforce/apex/forEachDemoClass.getOpportunity';

export default class ForEachDemo extends LightningElement {

    @track data = [];

    @wire(getOpportunity)
    opportunities;
}