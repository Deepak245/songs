import React,{Component} from 'react';
import {selectSong} from '../actions';

import {connect} from 'react-redux';


class SongList extends Component{

        renderList(){
                return this.props.songs.map((song)=>{        // this returns and array of div elements
                    return (                                 // this returns a div which tagged to each select.
                        <div className="item" key={song.title}>
                            <div className='right floated content'>
                                <button 
                                    className='ui button primary'
                                    onClick={()=>this.props.selectSong(song)}
                                
                                >
                                    select
                                </button>
                            </div>
                            <div className="content">{song.title}</div>
                        </div>
                    );
                });

            
        }
    render(){
        // console.log(this.props);
        return <div className='ui divided list'>{this.renderList()}</div>;
    }

}

const mapStateToProps=(state)=>{
    console.log(state);
    return state;

}

export default connect(mapStateToProps,{selectSong:selectSong})(SongList);