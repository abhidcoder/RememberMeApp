import React from 'react';
import App from './App';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Abhishek} from "./Context";



ReactDom.render(<Abhishek><BrowserRouter><App /></BrowserRouter></Abhishek>, document.querySelector('#root'));

