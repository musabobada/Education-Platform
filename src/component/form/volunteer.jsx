import React, { Component } from "react";
import Input from "../include/_input";
import Select from "../include/_select";
import "../../scss/addvolunteer.scss"
import ImgUpload from "../include/_imgUpload"


const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ogt', 'Sep', 'Oct', 'Nov', 'Dec']
const date = new Date();
class AddVolunteer extends Component {

  submit = async (e) => {
    e.preventDefault()
    await this.props.name === "add" ?
      this.props.create(e, "volunteers")
      :
      this.props.update(e, "volunteers")
  }


  render() {
    const { onChange, temporary, subjects } = this.props;
    return (
      <>
        <div className="_volunteer">
          <div className="title">
            <h2>{this.props.name === "add" ? "New Volunteer" : "Edit Volunteer"}</h2>
          </div>
          <div className="body">
            <form className="_form" onSubmit={(e) => { this.submit(e) }}>
              <div className="_image">
                <p>Profile image</p>
                <ImgUpload temporary={this.props.temporary} name="profileCover" />
              </div>
              <div className="_inputs">
                <Input onChange={onChange} type="text" name="name" label="Name" value={temporary.name} />
                <Input onChange={onChange} type="text" name="age" label="Age" value={temporary.age} />
                <Input onChange={onChange} type="email" name="email" label="Email" value={temporary.email} />
                <Input onChange={onChange} type="text" name="address" label="Address" value={temporary.address} />
                <Input onChange={onChange} type="text" name="phone" label="Phone" value={temporary.phone} />
                <Select onChange={onChange} name="subject" resourceArray={subjects} resourceProperty="code" value={temporary.subject && temporary.subject.code ? temporary.subject.code : temporary.subject} />
                {this.props.name === "add" ? "" : <Input type="hidden" name="_id" value={this.props.temporary._id} />}
                {/* 
                time is set from backend
                <Input type="hidden" name="time" label="time" value={date} /> 
                */}
                <div className="_button">
                  <button className="btn btn-primary" type="submit">
                    {this.props.name == "add" ? "Submit" : "Save"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default AddVolunteer;