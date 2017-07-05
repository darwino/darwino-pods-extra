/*!COPYRIGHT HEADER! - CONFIDENTIAL 
 *
 * Darwino Inc Confidential.
 *
 * (c) Copyright Darwino Inc. 2014-2017.
 *
 * Notice: The information contained in the source code for these files is the property 
 * of Darwino Inc. which, with its licensors, if any, owns all the intellectual property 
 * rights, including all copyright rights thereto.  Such information may only be used 
 * for debugging, troubleshooting and informational purposes.  All other uses of this information, 
 * including any production or commercial uses, are prohibited. 
 */

import React, { Component } from "react";
import Ons, {Toolbar, Page} from "react-onsenui";

export default class Home extends Component {

	renderToolbar() {
    	return (
      		<Toolbar>
       			<div className='center'>DWOTPL_APPLABEL</div>
      		</Toolbar>
    	);
  	}
  	
    render() {
        return (
      		<Page renderToolbar={this.renderToolbar}>
        		<p>DWOTPL_APPDESCRIPTION</p>
      		</Page>        	
        );
  	}
}