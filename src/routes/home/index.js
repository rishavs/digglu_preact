import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend'
import { Link } from 'preact-router/match';
import NProgress from 'NProgress'

export default class Home extends Component {
    constructor() {
        super();
        this.state = { posts: [] };
    }

    // componentWillMount () {
		// Backend.get_all_posts().then(items => {
		//     this.setState({ posts:items });
		// })
    // }

    // before the component gets mounted to the DOM
    componentWillMount(){
        Backend.get_all_posts().then(items => {
            console.log(items)
            this.setState({ posts:items });
        })
    }
    // after the component gets mounted to the DOM
    componentDidMount() {};
    // before new props get accepted
    componentWillReceiveProps() {}
    // before render(). Return false to skip render
    shouldComponentUpdate() {}
    // before render()
    componentWillUpdate(){}
    // after render()
    componentDidUpdate(){}
    // prior to removal from the DOM
    componentWillUnmount() {}

    render() {
        return (
            <div class={style.home}>
                <h1>Posts List</h1>


                    { this.state.posts.map( post => (

                        <div class="row">
                            <div class="card">
                                <div class="section">
                                    <a href={'/post/' + post.id}><h3>{post.title}</h3></a>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        </div>
                    )) }


            </div>
        );
    }
}