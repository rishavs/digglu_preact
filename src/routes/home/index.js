import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend'
import { Link } from 'preact-router/match';


export default class Home extends Component {
    constructor() {
        super();
        this.state = { posts: [] };
    }

    componentWillMount () {
		Backend.get_all_posts().then(items => {
		    this.setState({ posts:items });
		})
    }

    render() {
        return (
            <div class={style.home}>
                <h1>Home</h1>
                <p>This is the Posts List.</p>

                <ul>
                    { this.state.posts.map( post => (
                        <li>
                            <Link href={'/post/' + post.id}>{post.title}</Link>
                        </li>
                    )) }
                </ul>

            </div>
        );
    }
}