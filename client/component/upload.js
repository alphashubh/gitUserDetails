import React from 'react'
import axios, { post } from 'axios';

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        document.getElementById('loading').style.display = "block";
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response) => {
            //   console.log(response.data);

        })

    }
    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }
    fileUpload(UploadFile) {
        const url = 'http://localhost:3000/upload';
        const formData = new FormData();
        formData.append('file', UploadFile)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config).then((res) => {
            if (res.status === 200) {
                document.getElementById('loading').style.display = "none";
                // alert("File Uploaded SuccessFully");
                document.getElementById('popup').style.display = "block";
            }
            else {
                alert("Error Uploading Files");
            }
        })
            .catch((err) => {
                console.log("erorrrrrrrrrrrr", err);
            })
    }

    render() {
        return (
            <div>
                <div className="loading" id="loading">
                    <img src="https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif" />
                </div>
                <div className="popup" id="popup">

                    <div>
                        <center>
                            <h3>File Uploaded Sucessfully :)</h3>
                            <button className="btn btn-primary" onClick={() => {
                                document.getElementById('popup').style.display = "none";
                                window.location.reload();
                            }}>Okay</button>
                        </center>
                    </div>

                </div>
                <form onSubmit={this.onFormSubmit}>
                    <h1>File Upload</h1>
                    <input type="file" name="upload" onChange={this.onChange} required  />
                    <button type="submit" className="btn btn-primary">Upload</button>
                </form>
            </div>

        )
    }
}



export default Upload