/**
 * Created by vuvantu on 24/05/2016.
 */
var Title = React.createClass({
   render : () => {
       return (
           "READ FILE APP"
       )
   }
});


var ReadFileForm = React.createClass({
    render : () => {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter filename here"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input type="submit" value="GetFile" />
            </form>
        )
    }
});


var FileContent = React.createClass({

});
var ReadFile = React.createClass({

    render : () => {
        return (
            <div className="readFile">
                <h1>READ FILE APP</h1>
            </div>
        )

    }
});

ReactDOM.render(
    <ReadFile url="getFile" />,
    document.getElementById("content")
);