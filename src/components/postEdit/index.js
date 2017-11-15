import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';


// various props to use here will be type (new, edit, read) and post (empty, {})

export default class PostForm extends Component {

    render( { postData }) {
        return (
            <div class={style.home}>
                <h1> EDIT Post Details: </h1>
                
                <label>
                    Title:
                    <input type="text" value={postData.title} />
                </label>

                <label>
                    Content:
                    <textarea value={postData.content} />
                </label>

            </div>
        );
    }
}