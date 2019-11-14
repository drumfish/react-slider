import React from 'react';
import {Link} from "react-router-dom";
import '../css/header.scss';

export default function Header() {
  return (
    <div className={'header'}>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
    </div>
  );
}