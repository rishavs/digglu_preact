import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';


// various props to use here will be type (new, edit, read) and post (empty, {})

export default class PostRead extends Component {

    render( props ) {
        return (
            <div class={style.home}>
                <h1> READ Post Details: </h1>

                <p> {props.postData.title} </p>
                <p> {props.postData.content} </p>
                
                <button type="button" onClick={ props.onTogl }> Edit Post </button>
            </div>
        );
    }
}