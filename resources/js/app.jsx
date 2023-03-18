/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * 
 * if(document.getElementById('app')) {
 * ReactDOM.render(<App />, document.getElementById('app'));}
 * or customize the JavaScript scaffolding to fit your uniqu
 * 
 * e needs.
 */

//import './components/Example';

import './components/index';

import '../css/app.css'
import React from "react";
import ReactDOM from 'react-dom/client';
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout />
    </div>
  )
}

export default App;

if(document.getElementById('app')) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
}

