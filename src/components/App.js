import { Component } from 'react';
import Button from './Button/Button';

class App extends Component {
  state = {
    name: 'Show films',
  };
  onHandle() {
    console.log('Click Button');
  }
  render() {
    const { name } = this.state;
    return (
      <>
        <Button name={name} onHandle={this.onHandle}></Button>
      </>
    );
  }
}
export default App;
