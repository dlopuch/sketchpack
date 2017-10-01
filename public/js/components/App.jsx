import React from 'react';

import WidgetList from './WidgetList';
import Counter from './Counter';


const App = () => (
  <div>
    <div>
      <h1>React App!</h1>
      <p>
        This text was rendered by a demo react component!
      </p>

      {process.env.NODE_ENV === 'production' ? (null) : (
        <div>
          And this block will get minified away in prod if react minification is working properly! <br />
          (Try it for yourself by running: <tt>NODE_ENV=production npm run start:dev</tt>)
        </div>
      )}
    </div>

    <div>
      <h1>Redux Demo</h1>

      <p>
        Here we also include an example redux template.
        We have state that corresponds to two widgets: <tt>WidgetList</tt> and <tt>Counter</tt>.  Take a look at both
        JSX&apos;s to see how they&apos;re wired up to the state store with <tt>react-redux</tt>, note the store creation
        in <tt>reactApp.jsx</tt>, and look at the de-boilerplates actions and reducers created with <tt>redux-actions</tt>.
      </p>

      <Counter />

      <WidgetList styleViolation={ 'easter egg: linting also runs in JSX files... this piece fails react/jsx-curly-spacing' } />

    </div>

  </div>
);


export default App;
