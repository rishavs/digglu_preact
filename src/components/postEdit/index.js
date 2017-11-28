import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import linkState from 'linkstate';

import Backend from '../../lib/Backend';

export default class PostEdit extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.postData.id,
            title: props.postData.title,
            content: props.postData.content
        };
    }

    handleSubmit = (event) => {
        if (this.state.id) {
            // alert(JSON.stringify(this.state));
            Backend.save_current_post(this.state)
            // .then(res => { console.log(res) })
            .then( route ('/'));
        }
        else {
            alert("opo");
        }
    }

    render( ) {
        return (
            <div class={style.home}>
                <h1> EDIT Post Details: </h1>
               
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input value={this.state.title} onInput={linkState(this, 'title')} />

                    <label> Content:</label>
                    <textarea value={this.state.content} onInput={linkState(this, 'content')} />
                    
                    <button type="submit"> Save Post </button>
                </form>

            </div>
        );
    }
}