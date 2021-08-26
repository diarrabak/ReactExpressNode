import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
//Component used to display the list of all the seminars

class ShowGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      picture: "",
      researchers: [], //List of all users
      groupResearchers: [],
    };
  }

  //When the component is active on the DOM
  //The values pulled from database to fill the dropdown menu
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("RS= "+id);
    // Use of the get controllers through the axios API
    axios
      .get("http://localhost:5000/group/" + id)
      .then((Response) => {
        this.setState({
          title: Response.data.title,
          description: Response.data.description,
          picture: Response.data.picture,
          researchers: Response.data.researchers,
        })

        for (let i=0;i< this.state.researchers.length;i++) {
            console.log("RS= "+i);
          axios
            .get("http://localhost:5000/researcher/"+this.state.researchers[i])
            .then((Res) => {
              this.setState({
                groupResearchers: [...this.state.groupResearchers,Res.data],
              });
              console.log("element=" + Response.data);
            })
            
        }


      })
      .catch((error) => {
        console.log(error);
      });

   
  }

  render() {
    const { title, description, picture, groupResearchers } = this.state;

    return (
      <main>
        <h1>Details about {title} group </h1>

        <div className="row">
          <div className="col-12 col-sm-6">
            <Link to="/groups"> Back to group list </Link>
          </div>
        </div>
        <div className="row">
          {/*List of seminar from the state variable*/}
          {groupResearchers.map((group, id) => (
            <div
              className="card col-12 col-sm-4"
              onClick={() => this.setCurrentGroup(group, id)}
              key={id}
            >
              <img
                className="card-img-top"
                src={group.picture}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title"><Link to={"/showGroup/"+ this.state.id }>{group.username} </Link> </h5>
                <p className="card-text">{group.first_name}</p>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <button
                    className="btn btn-danger"
                    onClick={this.deleteGroup}
                  >
                    Delete
                  </button>
                </div>

                <div className="col-12 col-sm-6">
                  {/*Link to the page of updating a seminar */}
                  <Link className="btn btn-success" to={"/group/" + this.state.id }> Update </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    );
  }
}

export default withRouter(ShowGroup);
