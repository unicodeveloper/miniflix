import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Upload extends Component {

  state = { jokes: [] };

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'unicodeveloper',
        upload_preset: 'b9ej8dr5',
        tags: ['miniflix']
      },
      function(error, result) {
          console.log("This is the result of the last upload", result);
      });
  }

  render() {

    const { jokes } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Upload Your 20-second Video in a Jiffy</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
