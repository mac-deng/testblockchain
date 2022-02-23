import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
  return (<div>
	  		<div className='header'>
		  		<div className="section">
			  		<Link to="/" className="logo">
			  			<img src="/images/logo.png" />
			  		</Link>
				    <div className="avatar">
				    	<div className="bg1">124 ETH</div>
				    	<div className="bg2">
				    		0x11F240......DE831
				    		<div className='avatar-pic-outer'>
				    			<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic_source%2Fd3%2F24%2F6e%2Fd3246e32e81b9a74b5f932192a4f49d3_15.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648203760&t=7c3ea2aa2b7adb74d0ba21b27e32449d" />
				    		</div>
				    	</div>
				    </div>
			  		<nav>
				        <ul>
				          <li>
				            <Link to="drops">Drops</Link>
				          </li>
				          <li>
				            <Link to="/">whitePaper</Link>
				          </li>
				          <li>
				            <Link to="createAccount">Create</Link>
				          </li>
				        </ul>
				    </nav>
			    </div>
	      	</div>
	      	<div className="content">
	      		<Outlet />
	      	</div>
			
  </div>);
}

export default Layout;
