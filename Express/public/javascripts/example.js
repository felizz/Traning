/**
 * Created by vuvantu on 24/05/2016.
 */
var Title = React.createClass({
   render : function () {
       return (
           <h1>READ FILE APP</h1>
       )
   }
});

var ReadFileForm = React.createClass({
    getInitialState : function() {
        return {filename : ""};
    },

    handleSubmit : function (event) {
        event.preventDefault();

        var filename = this.state.filename;

        var request = {key_filename : filename};

        this.props.handleReadFile(request);

    },
    handleFilenameChange : function (event){
        this.setState({filename : event.target.value.toUpperCase()})
    },
    render : function() {
       return (
            <form  className = "readFileForm"
                    onSubmit = {this.handleSubmit}
            >
                <h4> File name </h4>

                <input
                    type = "text"
                    placeholder="Enter filename here"
                    value = {this.state.filename}
                    onChange = {this.handleFilenameChange}
                />
                <input
                    type="submit"
                    value="GET"
                />
            </form>
       )
   }

});

var FileContent = React.createClass({
    render : function() {
        var filecontent = this.props.fileContent;
       return (
           <div>
           <h5>File content</h5>
            <p>{filecontent}

                </p>
               </div>
       )
   }
});

var ReadFile = React.createClass({
    getInitialState : function () {
       return {state_file_name : "", state_file_content : "nothing"};
    },

    handleRequest : function (request) {

        $.ajax({
            url: this.props.url,
            dataType : 'json',
            type: 'POST',
            data: request,
            success: function (data) {
                this.setState({state_file_content: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)

        });



    },
   render : function () {
        return (
            <div>
                <Title />
                <ReadFileForm  handleReadFile = {this.handleRequest}/>
                <FileContent fileContent = {this.state.state_file_content}/>
            </div>
        )
   }

});
ReactDOM.render(
    <ReadFile url = '/getFile'/>,
    document.getElementById('content')
);