import React from 'react';
import './App.css';
import ChildrenDiffer from './react-children-differ/ChildrenDiffer';
import { ChildrenDiffResult } from '@egjs/children-differ';

class App extends React.Component {
  public state = {
    list: [0, 1, 2, 3, 4, 5, 6, 7].map(i => <div key={i}>{i}</div>),
  };
  public change = () => {
    this.setState({
      list: [2, 3, 0, 4, 1].map(i => <div key={i}>{i}</div>),
    });
  }
  public differ?: ChildrenDiffer;
  public render() {
    return (<div className="App">
      <button onClick = {this.change}>CHANGE</button>
      <ChildrenDiffer onUpdate={this.update}>{this.state.list}</ChildrenDiffer>
    </div>);
  }
  public update = (result: ChildrenDiffResult) => {
    console.log("update", result);
  }
  public componentDidUpdate() {
    console.log("didupdate");
  }
  public componentDidMount() {
    console.log("mount");
  }
}


export default App;
