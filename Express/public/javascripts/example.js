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

        var filename = this.state.filename.trim();

        if(! filename) {
            return ;
        }

        this.props.handleReadFile( filename );


    },
    handleFilenameChange : function (event){
        this.setState({filename : event.target.value})
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
                    value="GET FILE CONTENT"
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

    handleRequest : function (filename) {

        var request = {file: filename};

        $.ajax({
            url: this.props.url,
            type: 'GET',
            data: request,

            success: function (data) {
                this.setState( {state_file_content : data} );
            
            }.bind(this),

            error: function (xhr, status, err) {

                console.error(this.props.url, status, err.toString());
                var err_str = this.props.url +  " Status : " + status + " Error + " + err.toString();

                this.setState({state_file_content : err_str});

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