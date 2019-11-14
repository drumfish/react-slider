import React from 'react';
import Header from "../components/Header";
import '../css/page_404.scss'
import {Link} from "react-router-dom";

export default function Page404() {
  return (
    <>
      <Header/>
      <div className="error" data-text="404">404</div>
      <div className="error-subtitle">This page doesn't exist.</div>
      <Link className="error-link" to="/">← Back home</Link>
    </>
  );
}