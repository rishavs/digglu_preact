import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class="w-100 dt pa3 ph5-ns bg-near-black">
				<div class="dtc v-mid tl w-50">
					<a class="dib f5 f4-ns fw6 mt0 mb1 link light-gray dim" href="/">digglu </a>
				</div>
				<nav class="dc dtc v-mid w-100 tr">
					<a class="f6 fw6 dim link light-gray mr1 mr3-m mr4-l dib" href="/post/new">New Post</a>
					<a class="f6 fw6 dim link light-gray mr1 mr3-m mr4-l dib" href="/login">Login</a>
					<a class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib light-gray" href="#0">Signup</a>

				</nav>
			</header>
		);
	}
}
