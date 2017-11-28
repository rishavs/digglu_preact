import { h, Component } from 'preact';
import style from './style';
import Backend from '../../../lib/Backend';

import PostEdit from '../../../components/postEdit';

export default class PostNew extends Component {
	constructor() {
		super();
		this.state = { editMode: true, post: {} };
	}

    toggleEditMode = () => {

    	let tempFlag = this.state.editMode;

    	this.setState({ editMode: !tempFlag });
    	// console.log(this.state.editMode);
    }

    // before the component gets mounted to the DOM
    componentWillMount() {
    }
    // after the component gets mounted to the DOM
    componentDidMount() {}
    // before new props get accepted
    componentWillReceiveProps() {}
    // before render(). Return false to skip render
    shouldComponentUpdate() {}
    // before render()
    componentWillUpdate(){}
    // after render()
    componentDidUpdate(){}
    // prior to removal from the DOM
    componentWillUnmount() {}

    render() {
    	return (
    		<div class={style.home}>
                <PostEdit postData={this.state.post} />

    		</div>


    	);
    }
}

