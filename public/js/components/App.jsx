import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  // Nav,
  // NavItem,

  Container,
  Jumbotron,

  Badge,

  Row,
  Col,
} from 'reactstrap';

import WidgetList from './WidgetList';
import Counter from './Counter';

const es6content = require('../content.js');

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar expand="md" color="secondary" dark fixed="top">
        <NavbarBrand href="#" className="text-primary">sketchpack</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <span className="navbar-text">
            This is a bootstrap navbar rendered with React!
          </span>
          {
          // <Nav className="ml-1" navbar>
          //   <NavItem>
          //     This is a Bootstrap navbar!
          //   </NavItem>
          // </Nav>
            ' ' }
        </Collapse>
      </Navbar>
    );
  }
}

const App = () => (
  <div>
    <DemoNavbar />

    <main role="main">
      <Jumbotron>
        <Container>
          <h1 className="display-3">React App</h1>
          <p className="lead">
            Welcome to my
            &nbsp;<Badge color="primary">Webpack</Badge>+
            <Badge color="secondary">React</Badge>+
            <Badge color="danger">Redux</Badge>+
            <Badge color="warning">Babel</Badge> sketchpack boilerplate, now
            +<Badge color="success">Bootstrap</Badge>
          </p>
          <hr className="my-2" />
          <p>
            {es6content}
          </p>
          {process.env.NODE_ENV === 'production' ? (null) : (
            <p className="text-warning">
              And this block will get minified away in prod if react minification is working properly! <br />
              (Try it for yourself by running: <tt>NODE_ENV=production npm run start:dev</tt>)
            </p>
          )}
        </Container>
      </Jumbotron>


      <Container>
        <Row>
          <Col md="4">
            <h2>Redux Demo</h2>
            <p>
              Here we also include an example redux template.
              We have state that corresponds to two widgets: <tt>WidgetList</tt> and <tt>Counter</tt>.  Take a look at both
              JSX&apos;s to see how they&apos;re wired up to the state store with <tt>react-redux</tt>, note the store creation
              in <tt>reactApp.jsx</tt>, and look at the de-boilerplates actions and reducers created with <tt>redux-actions</tt>.
            </p>
          </Col>

          <Col md="4">
            <h2>Counter Demo</h2>
            <Counter />
          </Col>

          <Col md="4">
            <h2>Widget List Demo</h2>
            <WidgetList styleViolation={ 'easter egg: linting also runs in JSX files... this piece fails react/jsx-curly-spacing' } />
          </Col>
        </Row>
      </Container>
    </main>
  </div>
);


export default App;
