import React from 'react';
import Editor from './Editor';
import Library from './Library';

const App = () => {
  const widgetsCollection = [
    {
      id: 1,
      body: '<p>Widget 1 has <a href="https://google.com">Link to Google</a></p>',
      meta: {},
    },
    {
      id: 2,
      body: '<p>Widget 2 has <a href="https://facebook.com">Link to Facebook</a></p>',
      meta: {},
    },
  ];
  return (
    <div>
      <Editor />
      <Library widgets={widgetsCollection} />
    </div>
  );
};

export default App;
