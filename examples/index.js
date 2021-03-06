import './examples.less';
import React from 'react';
import ReactDOM from 'react-dom';

import { createHistory } from 'history';

const history = createHistory();
const router = {};

const examples = new Array(7).join(',').split(',');

const nav = ({pathname}) => {
  const route = router[pathname] || router[Object.keys(router)[0]];
  if (route){
    route.init('#myGrid');
    document.title = route.title;
  }
};

history.listen(nav);

const menuEl = document.querySelector('.menu-container .menu');

class Menu extends React.Component {

  handleClickFactory(example){
    return function handleClick(event){
      return;
      event.preventDefault();
      history.push({
        pathname: example.route,
        state: {
          title: example.title
        }
      });
    };
  }

  render(){
    return <ul className="menu-list">
      {this.props.examples.map((item, index) =>{
        const count = index + 1;
        const example = require(`./example${count}`).default;
        router[example.route] = example;

        return <li key={count}>
          <a className="demo-link" href={example.route} onClick={this.handleClickFactory(example)}>{example.title}</a>
        </li>;
      })}
    </ul>
  }
};

ReactDOM.render(<Menu examples={examples} />, menuEl);


nav(history.getCurrentLocation());

