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

                {postView}

                <button type="button" onClick={this.toggleEditMode}> Edit Post </button>

                <button type="button" onClick={this.deletePost}> Delete Post </button>

                <ul>
                    <li> Comment 1 </li>
                    <li> Comment 2 </li>
                    <li> Comment 3 </li>
                </ul>

            </div>


        );
    }
}
