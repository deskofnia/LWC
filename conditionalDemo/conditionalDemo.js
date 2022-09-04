import { LightningElement , track} from 'lwc';

export default class ConditionalDemo extends LightningElement {

    @track onClickButtonLabel = 'Show';
    myTitle = 'Saleforce';
    @track cardVisible = false;

    handleChange(event)
    {
        const label = event.target.label;
        console.log("1");
        if(label === 'Show')
        {
            console.log("2");
            this.onClickButtonLabel = 'Hide';
            this.cardVisible = true;
        }
        else if(label === 'Hide')
        {
            console.log("3");
            this.onClickButtonLabel = 'Show';
            this.cardVisible = false;
        }
    }
}