import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend'


export default class Home extends Component {
    constructor() {
        super();
        this.state = { postsList: [] };
    }

    componentWillMount () {
		Backend.get_all_posts().then(items => {
		    this.setState({ postsList:items });
		})
    }

    render(props, state) {
        return (
            <div class={style.home}>
                <h1>Home</h1>
                <p>This is the Home component.</p>

                <ul>
                    { state.postsList.map( post => (
                        <li>{post.title}</li>
                    )) }
                </ul>

            </div>
        );
    }
}