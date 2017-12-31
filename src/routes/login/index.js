import { h, Component } from 'preact';
import style from './style';
import Backend from '../../lib/Backend';
import linkState from 'linkstate';

export default class Login extends Component {
	constructor() {
		super();
		this.state = { uname: "", pwd:"" };
	}

    // before the component gets mounted to the DOM
    componentWillMount() {}
    // after the component gets mounted to the DOM
    componentDidMount() {}
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

    handleSubmit = (event) => {
        console.log(this.state.uname, this.state.pwd)
        Backend.login(this.state.uname, this.state.pwd)
        event.preventDefault();
    }

    render() {
    	return (
            <main class="pa4 black-80">
                <form class="measure center" onSubmit={this.handleSubmit}>
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input class="pa2 input-reset br2 ba bg-transparent w-100" type="text" id="username" onInput={linkState(this, 'uname')}/>
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 input-reset br2 ba bg-transparent  w-100" type="password" id="password" onInput={linkState(this, 'pwd')} />
                        </div>
                        <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div class="">
                        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div class="lh-copy mt3">
                        <a href="#0" class="f6 link dim black db">Sign up</a>
                        <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </main>



    	);
    }
}

