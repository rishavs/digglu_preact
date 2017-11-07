import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>

				<Link activeClassName={style.active} href="/">
					<h1>Home</h1>
				</Link>

				<nav>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link>
					<Link activeClassName={style.active} href="/p/new">New Post</Link>
					<Link activeClassName={style.active} href="/signup">Signup</Link>
					<Link activeClassName={style.active} href="/login">Login</Link>
				</nav>
			</header>
		);
	}
}
