import { LightningElement, track, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/datatableWithRows.getContactList';

const columns = [
    {label : 'Name', fieldName : "Name"},
    {label : 'Phone', fieldName : "Phone"}
]
export default class DatabaseTableDemo extends LightningElement {

    @track showContacts = 'Show Contacts';
    @track isVisible = false;
    columns=columns;
    @track data = [];
    @api recordId;    //it stores the current page record Id
    @api searchKey='';


    //get related contact list from apex class

    connectedCallback()
    {
        getContactList({lwcRecordId : this.recordId})
        .then(response => {
            this.data = response;
        })
        .catch(err => {
            console.log("Error occurred:"+err);
        })
    }



    handleChange(event)
    {
        this.searchKey = event.target.value;
        
        // send searchKey and recordId to apex method 
        getContactList( {searchKeys : this.searchKey, lwcRecordId : this.recordId})
        .then(res => {
            this.data = res;
        })
        .catch(error => {
            console.log(error);
        })

        
    }

    //Show Hide Toggle functionality

    handleClick(event)
    {
        const label = event.target.label;

        if(label === 'Show Contacts'){
            this.showContacts = 'Hide contacts';
            this.isVisible = true;
        }
        else if(label === 'Hide contacts')
        {
            this.showContacts = 'Show Contacts';
            this.isVisible = false;
        }
    }

    getSelectedRows(event)
    {
        const selectedRowsDetails = event.detail.selectedRows;
        window.alert(JSON.stringify(selectedRowsDetails));
        //console.log(JSON.stringify(selectedRowsDetails));
    }
}