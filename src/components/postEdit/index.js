import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';


// various props to use here will be type (new, edit, read) and post (empty, {})

export default class PostForm extends Component {

    render( { postData }) {
        return (
            <div class={style.home}>
                <h1> EDIT Post Details: </h1>

                <p> {postData.title} </p>
                <p> {postData.content} </p>
            </div>
        );
    }
}