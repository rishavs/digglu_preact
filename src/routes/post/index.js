import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend'
import { Link } from 'preact-router/match';


export default class Home extends Component {
    constructor() {
        super();
        this.state = { editMode: false, post: {}};
    }

    componentWillMount () {
        Backend.get_current_post(this.props.id).then(item => {
            this.setState({ post:item[0] });
        })
    }

    render() {
        return (
            <div class={style.home}>
                <h1> Post Details: </h1>
                <p> {this.state.post.title} </p>
                <img src= {this.state.post.thumb} alt='what dis?'/>
                <p> {this.state.post.content} </p>

                <Link href={"/profile/me"}>
                     <button type="button"> Edit Post </button>
                </Link>                

                <Link href={"/profile/me"}>
                     <button type="button"> Delete Post </button>
                </Link>
            </div>


        );
    }
}
