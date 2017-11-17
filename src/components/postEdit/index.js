import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Backend from '../../lib/Backend';


// various props to use here will be type (new, edit, read) and post (empty, {})

export default class PostForm extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            postId: props.postData.id,
            postTitle: props.postData.title,
            postContent: props.postData.content
        };
    }

    handleSubmit = (event) => {
        alert(this.state.postTitle);
    }

    render( ) {
        return (
            <div class={style.home}>
                <h1> EDIT Post Details: </h1>
               
                <form onSubmit={this.handleSubmit} action="javascript:">
                    <label>Title:</label>
                    <input type="text" value={this.state.postTitle} onInput={linkState(this, 'postTitle')} />

                    <label> Content:</label>
                    <textarea value={this.state.postContent} onInput={linkState(this, 'postContent')} />
                    
                    <button type="submit"> Save Post </button>
                </form>

            </div>
        );
    }
}