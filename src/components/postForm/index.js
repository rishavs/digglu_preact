import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';


// various props to use here will be type (new, edit, read) and post (empty, {})

export default class PostForm extends Component {
    constructor() {
        super();
        this.state = { post: {} };
    }

    setData = e => {
        this.setState({ text: e.target.value });
    };

    savePost = () => {
        let { todos, text } = this.state;
        todos = todos.concat({ text });
        this.setState({ todos, text: '' });
    };

    render({ }, { todos, text }) {
        return (
            <form onSubmit={this.savePost} action="javascript:">
            	<label> Title
                	<input value={text} onInput={this.setText} />
                </label>
		        <label> Content:
		        	<textarea value={this.state.value} onChange={this.handleChange} />
		        </label>

                <button type="submit">Add</button>
            </form>
        );
    }
}