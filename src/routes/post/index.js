import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend';

import PostRead from 'async!../../components/postRead';
import PostEdit from 'async!../../components/postEdit';

export default class Post extends Component {
	constructor() {
		super();
		this.state = { editMode: false, post: {} };
	}

    toggleEditMode = () => {

    	let tempFlag = this.state.editMode;

    	this.setState({ editMode: !tempFlag });
    	console.log(this.state.editMode);
    }

    // before the component gets mounted to the DOM
    componentWillMount() {
        Backend.get_current_post(this.props.id).then(item => {
    		this.setState({ post: item[0] });
    	});
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
        
    	let postView = null;

    	if (this.state.editMode) {
    		postView = <PostEdit postData={this.state.post} onTogl={this.toggleEditMode} />;
    	}
    	else {
    		postView = <PostRead postData={this.state.post} onTogl={this.toggleEditMode} />;
    	}

    	return (
    		<div class={style.home}>
                
    			{postView}

    			<ul>
    				<li> Comment 1 </li>
    				<li> Comment 2 </li>
    				<li> Comment 3 </li>
    			</ul>

    		</div>


    	);
    }
}

