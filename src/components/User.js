import React, {Component} from 'react'
import {connect} from 'react-redux'

class User extends Component{
    state={
        img:[]
    }
    componentDidMount(){
        const urls=["https://img.icons8.com/office/30/000000/gold-medal.png",
                    "https://img.icons8.com/office/30/000000/olympic-medal-silver.png",
                    "https://img.icons8.com/office/30/000000/olympic-medal-bronze.png"]
        this.setState({
            img:urls
        })
    }
    render(){
        const {user, index}=this.props
        const aQ=Object.keys(user.answers).length
        const cQ=user.questions.length
        const result=aQ+cQ
        return(
            <div className=''>
                 <div className='tabcontent'>
                    <div className='user'>
                        <div className='grid-container'>
                            <div className='item1U'>
                                {index<3  && (<div> <img src={this.state.img[index]} alt=''/> </div>)}
                                <div>
                                    <img src={user.avatarURL} alt='' width='150' height='150'/>
                                </div>
                            </div>
                            <div className='item2U'>
                                <p>{user.name}</p>
                                <span>Answered questions</span> <span>{aQ}</span>
                                <br/>
                                <span>Created questions</span> <span className='span2'>{cQ}</span>
                            </div>
                            <div className='item3U'>
                                <div className='score'>
                                   <div className='textScore'>
                                       <span>Score</span>
                                    </div> 
                                    <br/>
                                    <div className='pointsScore'>
                                        {result}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {id, index}){
    return{
        user:users[id],
        index
    }
}
export default connect(mapStateToProps)(User)