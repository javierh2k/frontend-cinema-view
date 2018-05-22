import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render(){
        return (
                <header class="site-header">
                    <div class="container">
                        <Link to="/" id="branding">
                            <img src="images/logo.png" alt="" class="logo"/>
                            <div class="logo-copy">
                                <h1 class="site-title">Cinema Javier</h1>
                                <small class="site-description">Tagline goes here</small>
                            </div>
                        </Link>					
                    </div>
                </header>
        )
    }
}