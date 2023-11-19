import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player/lazy';

const CustomBox = styled.div`
  .player-wrapper {
    padding-top: inherit;
    position: relative;
    min-height:90vh;
    height:90vh;
  }
`;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    let youtubelink = "";

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      youtubelink = params.get('v') ? `https://www.youtube.com/watch?v=${params.get('v')}` : '';
    }

    this.state = {
      youtubelink,
      isActive: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
  }

  handleShow() {
    this.setState({
      isActive: true
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const Url = this.state.youtubelink;
    const urlNoProtocol = Url.replace(/^.*((youtu.be\/))/i, "");
    const FinalUrl = "https://www.youtube.com/embed/" + urlNoProtocol + "?controls=1&amp;showinfo=1&amp;color=white&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=0&amp;playlist=" + urlNoProtocol;

    function Iframer() {
      return (
        <ReactPlayer
          className='react-player'
          url={FinalUrl}
          width='100%'
          height='100%'
          config={{
            youtube: {
              playerVars: { showinfo:1, controls:1, mute:1 }
            },
          }}
          playing
          color="white"
        />
      )
    }

    return (
      <>
        <CustomBox>
          <div className='player-wrapper' style={{position:'relative', width:'100vw', height:'content-fill', minHeight:'90vh', overflow:'hidden'}}>
            {urlNoProtocol ? <Iframer /> : ""}
          </div>

          {!this.state.isActive ? (
            <div style={{display:'block', justifyContent:'center', width:'100%', margin:'5px auto', flexDirection:'row', maxWidth:'1000px'}}>
              <form className="youtubeform frontdrop" onSubmit={this.handleSubmit} style={{ padding:'2rem', border:'3px solid #333', borderRadius:'12px', height:'50px', width:'100%', maxWidth:'90vw', margin:'0 auto', zIndex:'1', position:'fixed', bottom:'0', background: 'rgba(0,0,0,0.50)', transition:' all 1.85s', animation:'fade 1.5s forwards', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize:'90%', color:'#fff', fontWeight:'bold', textAlign:'right', width:'100px', margin:'5px 15px 0 0'}}>Paste Link:</p>
                <input
                  type="text"
                  name="youtubelink"
                  value={this.state.youtubelink}
                  onInput={this.handleInputChange}
                  onChange={this.handleShow}
                  style={{background: 'rgba(0,0,0,0.50)',
                  padding:'1vh .5vw', minWidth:'300px', outline:'1px solid #333', borderRadius:'8px'}}
                  placeholder="example: https://youtu.be/cVsQLlk-T0s"
                  className="youtubelinker"
                />
              </form>
            </div>
          ) : (
            <div className="" style={{display:'flex', justifyContent:'space-around', width:'100%', margin:'0 auto'}}>
              <form className="youtubeform frontdrop" onSubmit={this.handleSubmit} style={{ padding:'2rem', borderRadius:'12px', height:'50px', width:'100%', maxWidth:'90vw', margin:'5px auto', zIndex:'1', position:'relative', bottom:'0',transition:' all 1.85s', animation:'fade 1.5s forwards', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <p className="" style={{fontSize:'90%', color:'#fff', fontWeight:'bold', textAlign:'right', width:'100px', margin:'5px 15px 0 0'}}>Pasted Link:</p>
                <input
                  type="text"
                  name="youtubelink"
                  value={this.state.youtubelink}
                  onInput={this.handleInputChange}
                  onChange={this.handleShow}
                  style={{background: 'rgba(0,0,0,0.50)', padding:'1vh .5vw', minWidth:'300px', outline:'1px solid #333', borderRadius:'8px'}}
                  placeholder="example: https://youtu.be/cVsQLlk-T0s"
                  className="youtubelinker"
                />
              </form>
            </div>
          )}
        </CustomBox>
      </>
    )
  }
}
