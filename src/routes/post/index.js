import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend'


export default class Home extends Component {
    constructor() {
        super();
        this.state = { post: {}};
    }

    componentWillMount () {
        Backend.get_current_post(1).then(item => {
            this.setState({ post:item });
        })
    }

    render(props, state) {
        return (
            <div class={style.home}>
                <h1> Post </h1>
                <p> {post.title} </p>
                <p> {post.content} </p>
            </div>
        );
    }
}