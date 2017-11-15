import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend'
import { Link } from 'preact-router/match';

import PostRead from 'async!../../components/postRead';
import PostEdit from 'async!../../components/postEdit';

export default class Post extends Component {
    constructor() {
        super();
        this.state = { editMode: false, post: {}};
    }

    toggleEditMode = () => {

        let tempFlag = this.state.editMode

        this.setState({ editMode: !tempFlag });
        console.log(this.state.editMode)
    }

    // before the component gets mounted to the DOM
    componentWillMount() {} 
    // after the component gets mounted to the DOM
    componentDidMount() {}
    // prior to removal from the DOM
    componentWillUnmount() {}
    // before new props get accepted
    componentWillReceiveProps() {}
    // before render(). Return false to skip render
    shouldComponentUpdate() {}
    // before render()
    componentWillUpdate(){}
    // after render()
    componentDidUpdate(){}

    componentWillMount () {
        Backend.get_current_post(this.props.id).then(item => {
            this.setState({ post:item[0] });
        })
    }

    render() {
        
        let postView = null

        if (this.state.editMode) {
            postView = <PostEdit postData={this.state.post} />;
        } else {
            postView = <PostRead postData={this.state.post} />;
        }

        return (
            <div class={style.home}>

                <button type="button" onClick={this.toggleEditMode}> Edit Post </button>
                <button type="button" onClick={this.deletePost}> Delete Post </button>
                
                {postView}

                <ul>
                    <li> Comment 1 </li>
                    <li> Comment 2 </li>
                    <li> Comment 3 </li>
                </ul>

            </div>


        );
    }
}


// function Child(props) {
//     return (
//         <div>
//             <h1>Current: { props.value }</h1>
//             <button onclick={ props.onIncr } value="+1" />
//             <button onclick={ props.onDecr } value="-1" />
//         </div>
//     )
// }

// class Parent extends Component {
//     state = { val:0 }

//     increase = _ => this.setState({ val:this.state.val + 1 })
//     decrease = _ => this.setState({ val:this.state.val - 1 })

//     render(_, state) {
//         return (
//             <Child value={ state.val } onIncr={ this.increase } onDecr={ this.decrease } />
//         )
//     }
// }