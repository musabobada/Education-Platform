import React, { Component } from "react";
import Sidebar from "../sidebar";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import PopupComponent from "../dashboardComponent/popupComponent";
// import '../../scss/dashboard.scss';
import '../../scss/sessionTable.scss';
import Chart from "../dashboardComponent/chart";
class SessionTable extends Component {
  render() {
    return (
      <>
        < div className='main' >
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className='content_area'>
              <div className="_topContent">
                <h1>Sessions</h1>
                <Link to="/addSession">
                  <button className="btn btn-outline-primary m-3" onClick={() => this.props.setTemporaryEmpty()}>
                    Add Session
                  </button>
                </Link>
              </div>
              <div className="propabilties">
                {/* for propabilties ##################
                ###########################
                 */}
                {/*  Start */}
                <div className="card rounded overflow-hidden shadow">
                  <div className="row g-0">
                    {/* <!-- Image --> */}
                    <div className="col">
                      <img className="session_image" src="src/assets/71 brilliant Photoshop tutorials to boost your skills.jpg" alt="card image" />
                    </div>
                    {/* <!-- Card body --> */}
                    <div className="col-md-8">
                      <div className="card-body">
                        {/* <!-- Title --> */}
                        <div className="d-flex justify-content-between mb-2 mb-sm-3">
                          <h5 className="card-title mb-0"><a href="#">Graphic Design Masterclass</a></h5>
                          {/* <!-- Wishlist icon --> */}
                          <a href="#"><i className="far fa-heart text-dark"></i></a>
                          <div>
                            <button className="btn btn-info btn-sm m-1">
                              Update
                            </button>
                            <button className="btn btn-danger btn-sm m-1">
                              Delete
                            </button>
                          </div>
                        </div>
                        {/* <!-- Content --> */}
                        {/* <!-- Info --> */}
                        <ul className="list-inline mb-2">
                          <i className="far fa-clock text-danger me-2">MATH</i>
                          <i className="fas fa-table text-orange me-2">Room A-4</i>
                          <i className="fas fa-signal text-success me-2">All level</i>
                        </ul>
                        {/* <!-- Rating --> */}
                        <ul className="list-inline mt-2">
                          <li className="item me-0 small mb-1"><i className="fas fa-star text-info">Volunteer :</i> Mosab Obada</li>
                          <li className="item me-0 small mb-1"><i className="fas fa-star text-warning">Start Date</i> time</li>
                          <li className="item me-0 small mb-1"><i className="fas fa-star text-warning">End Date</i> time</li>
                          <li className="list-inline-item ms-2 text-dark"><button className="btn btn-outline-primary mt-3">more details</button></li>
                          <li className="list-inline-item me-0 small">

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  End */}
              </div>
              {/* Table style */}
              {/* End Table style */}
            </div>
          </div>
        </div >
      </>
    );
  }
}
export default SessionTable;
{/*
<table className="table caption-top mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">subject</th>
      <th scope="col">lesson</th>
      <th scope="col">lesson Content</th>
      <th scope="col">room</th>
      <th scope="col">volunteer</th>
      <th scope="col">start</th>
      <th scope="col">end</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.props.sessions.length > 0 ? (
      this.props.sessions.map((session, i) => (
        <tr key={session._id}>
          <td>{i + 1}</td>
          <td>{session.lesson && session.lesson.subject && session.lesson.subject.code}</td>
          <td>{session.lesson && session.lesson.name}</td>
          <td>{session.lesson && <PopupComponent lesson={session.lesson} />}</td>
          <td>{session.room && session.room.name}</td>
          <td>{session.volunteer && session.volunteer.name}</td>
          <td>{session.start}</td>
          <td>{session.end}</td>
          <td>
            <Link to={`/updateSession?id=${session._id}`}>
              <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(session)}>
                Update
              </button>
            </Link>
            <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(session._id, "sessions")}>
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td>Databse is Empty</td>
      </tr>
    )}
  </tbody>
</table>
*/}