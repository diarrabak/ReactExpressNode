import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory  } from "react-router-dom";



const SubmitButton=()=> {
    let history = useHistory();
  
    function handleClick() {
      history.push("/groups");
    }
  
    return (
      <button className="btn btn-success" type="submit" onClick={handleClick}>
        Submit
      </button>
    );
  }

// This component is used to create a new seminar and save to the database
class DeleteGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentGroupId: "", //Selected seminar id
    };
  }
  //method appending the form data to the seminar fields
 
  submitGroup(event) {
    event.preventDefault();

    //Our controller endpoint to save data to the database
    axios
      .delete("http://localhost:5000/group/" + this.state.currentGroupId)
      .then((response) => {
        console.log(response);
      })
      //Error message in case saving does not work
      .catch((error) => {
        console.log(error);
      });
  }

  //redirect function to be included so that we go back to seminar list each time a new seminar is added

  render() {
    return (
      <>
        <main>
          <h1>Remove group {this.state.currentGroupId}</h1>
          {/*Form used to fill the seminar component*/}
          <form onSubmit={this.submitGroup.bind(this)}>
            <div className="row">
              <div className="offset-sm-2 col-12 col-sm-4">
               <input
                
                  type="submit"
                  className="btn btn-success"
                />
               {/*} <SubmitButton />*/}
                 {/* onClick={(event) => (window.location.href = "/seminar")}*/}
              </div>
              {/*Link back to seminar list*/}
              <div className="col-12 col-sm-6">
                <Link to="/groups"> Back to group list </Link>
              </div>
            </div>
          </form>
        </main>
      </>
    );
  }
}

export default CreateGroup;
