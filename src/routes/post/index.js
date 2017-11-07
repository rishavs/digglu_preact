import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend'


export default class Home extends Component {
    constructor() {
        super();
        this.state = { post: {}};
    }

    componentWillMount () {
        Backend.get_current_post(this.props.id).then(item => {
            this.setState({ post:item[0] });
        })
    }

    render() {
        return (
            <div class={style.home}>
                <h1> Posts </h1>
                <p> {this.state.post.title} </p>
                <p> {this.state.post.content} </p>
            </div>
        );
    }
}
