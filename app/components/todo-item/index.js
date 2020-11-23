import Component from '@glimmer/component'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class TodoItem extends Component {

    @tracked is_check = this.args.isDone;

    @action 
    check(e) {
        this.is_check = e.target.checked;
        let onCheck = this.args.onCheck;
        if(onCheck) {
            onCheck(e.target.checked)
        }
    }
}