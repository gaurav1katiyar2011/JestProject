import React from 'react'
class CommentBox extends React.Component{
    state={comment:""}
    handleChange= event => {
        this.setState({comment: event.target.value});
    }
    handleSubmit = event=>{
        event.preventDefault();
        this.setState({comment: ''});
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <h4>Add Commments</h4>
            <textarea onChange={this.handleChange} value={this.state.comment}/>
            <div>
                <button> Submit Comments </button>
            </div>
        </form>
        )
    }
}

export default CommentBox;