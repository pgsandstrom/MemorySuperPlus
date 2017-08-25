import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    // this.goto = this.goto.bind(this);
  }

  onChange(e) {
    this.setState({ id: e.target.value });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.goto();
    }
  }

  goto() {
    Router.push(`/home/${this.state.id}`);
  }

  render() {
    return (<div>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta charSet="utf-8" />
        <title>SuperMemoryPlus</title>
      </Head>
      <div>
        <div>Welcome to SuperMemoryPlus!</div>
        <div>Plox give a unique ID:</div>
        <input value={this.state.id} onChange={this.onChange} onKeyPress={this.onKeyPress} />
        <div>Click <Link href={{ pathname: `/home/${this.state.id}` }}><a>here</a></Link> to read more</div>
      </div>
    </div>);
  }
}
export default Welcome;
