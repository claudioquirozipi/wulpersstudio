import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Home from './view/wulpers';
import Blog from './view/blog';
import Blog1 from './view/blog/blog1';
import Blog2 from './view/blog/blog2';
import Blog3 from './view/blog/blog3';
import Cases from './view/cases';
import Studio from './view/studio';
import StudioBlog from './view/studio/blog';
import StudioBlog1 from './view/studio/blog/blog1';
import StudioBlog2 from './view/studio/blog/blog2';
import StudioBlog3 from './view/studio/blog/blog3';
import StudioProjects from './view/studio/projects';
import Error404 from './view/error404';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cases" component={Cases} /> 
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/1" component={Blog1} />
          <Route exact path="/blog/2" component={Blog2} />
          <Route exact path="/blog/3" component={Blog3} />
          <Route path="/blog/:id" component={Blog} />
          <Route exact path="/studio" component={Studio} /> 
          <Route exact path="/studio/blog/1" component={StudioBlog1} />
          <Route exact path="/studio/blog/2" component={StudioBlog2} />
          <Route exact path="/studio/blog/3" component={StudioBlog3} />
          <Route path="/studio/blog" component={StudioBlog} /> 
          <Route path="/studio/projects" component={StudioProjects} /> 
          <Route component={Error404} /> 
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
