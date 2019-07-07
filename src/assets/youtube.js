import React, {Component} from 'react';

const API = 'AIzaSyCe6qMs75yrW7Ob5AMGknLKoRmpCcOIKVI';
const channelID = 'UCj1J3QuIftjOq9iv_rr7Egw'
const MaxResults = 50;

var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${channelID}&maxResults=${MaxResults}&key=${API}`;

class Youtube extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            youtubeInfo: [],
        };
        this.clicked = this.clicked.bind(this);
    }
    
    clicked() {
        
        var showBtn = document.getElementById('showReplays');
        // HIDE SHOW BUTTON
        showBtn.style.display = 'none';
        fetch(youtubeUrl)
        .then((response) => response.json())
        .then((responseJson) => {
            // GET VIDEO ID AND LINK TO VIDEO
            const youtubeLinks = responseJson.items.map(object => 'https://www.youtube.com/watch?v=' + object.id.videoId);
            const youtubeTitles = responseJson.items.map(object => object.snippet.title);
            
            // PUSH URL AND TITLE TO ARRAY
            // var youtubeInfo = [];
            for (let i = 0; i < youtubeLinks.length; i++) {
                var youtubeInfos = {
                    'url': youtubeLinks[i],
                    'title': youtubeTitles[i],
                };
                // KEEP ONLY SSBU
                var fighterName = this.props.fighter.toLowerCase();
                var fighterName = fighterName.charAt(0).toUpperCase() + fighterName.slice(1);
                if (youtubeTitles[i].includes('SSBU') && youtubeTitles[i].includes(fighterName)) {
                    // console.log(fighterName);
                    this.state.youtubeInfo.push(youtubeInfos);
                }
            }
            // this.setState({youtubeInfo: youtubeInfo});
            // SET YOUTUBEURL WITH NEXTTOKEN TO GET NEXT RESULTS
            var nextToken = responseJson.nextPageToken;
            youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${channelID}&maxResults=${MaxResults}&key=${API}&pageToken=${nextToken}`;
            // SHOW 'SHOW'
            console.log(this.state.youtubeInfo);
            this.clicked();
        })
        .catch((error) => {
            console.error(error);
        });

    }

    render() {

        return(
            <div className="text-center">
                <button id="showReplays" className="btn btn-lg btn-outline-dark border rounded mb-4" onClick={this.clicked}>Load replays</button>
                <div id="replayResults">
                    {
                        this.state.youtubeInfo.map((link, i) => {
                            // console.log(link);
                            var youtubeLink = <div className="replayCard card mb-2" key={i}>
                                                    <a href={link.url} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                                                        <div className="card-body text-dark">
                                                            {link.title}
                                                            <br/>
                                                        </div>
                                                    </a>
                                                </div>;
                            return youtubeLink;
                        })
                    }
                    {this.youtubeLink}
                    <br/>
                </div>
            </div>
        );

    }

}

export default Youtube;