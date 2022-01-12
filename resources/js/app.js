import { render } from 'react-dom'
import React from 'react'
import Routes from "./routes";
import 'antd/dist/antd.css';
import 'react-multi-carousel/lib/styles.css';

render(
    <Routes />,
    document.getElementById('index')
)
