import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ahsanimg1 from "./ahsan.png";

class landingpage extends Component {
    render() {
        return(
            <div style = {{width : '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col={12}> 
                        <img src={ahsanimg1}
                        alt = "myself"
                        className="my-img-landing"
                        />

                        <div className = "banner-text">
                            <h1> Ahsan Syed </h1>
                            <h2> BASc Chemical Engineering </h2>
                            <h2> Computer Science Minor </h2>
                        <hr/>
                        <div className="social-links">
                            {/* Github */}
                            <a href = 'https://github.com/Makhdoomzada' rel="noopener noreferrer" target="_blank"> 
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                            {/* mail */}
                            <a href = 'mailto:m43syed@uwaterloo.ca' rel="noopener noreferrer" target="_blank"> 
                                <i className="fa fa-envelope-o"  aria-hidden="true"/>
                            </a>
                            {/* LinkedIn */}
                            <a href = 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' rel="noopener noreferrer" target="_blank"> 
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    </Cell>    
                </Grid> 
            </div>
        )
    }
}

export default landingpage;