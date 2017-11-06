import { h, Component } from 'preact';
import style from './style';
// import Posts from '../../lib/Post'


export default class Home extends Component {
    constructor() {
        super();
        this.state = { postsList: [] };
    }

    componentWillMount () {
        fetch('https://data.diesel16.hasura-app.io/v1/template/get_all_posts')
			.then( response => response.json() )
          	.then( postsList => {
            	this.setState({ postsList });
          	})
          	.catch( error => {
            	console.log(error);
          	});
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
