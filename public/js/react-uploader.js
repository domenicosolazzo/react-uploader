var ReactUploader = React.createClass({
    handleChange: function(e){
                  
    },
    handleSubmit: function(e){
                    
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleChange}/>
            </form>
        );        
    }
});
