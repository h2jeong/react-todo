import React, { Component } from "react";

class UserDetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectUserId: 1
  //   };
  // }

  // componentDidMount() {
  //   console.log("UserDetail compnentDidMount");
  //   let _selectUserId = this.state.selectUserId;
  //   const myInit = {
  //     method: "GET",
  //     dataType: "json",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-type": "application/json"
  //     }
  //   };

  //   fetch(`https://koreanjson.com//todos?userId=${_selectUserId}`, myInit)
  //     .then(response => response.json())
  //     .then(json =>
  //       this.setState({
  //         selectUser: json
  //       })
  //     )
  //     .catch(err => console.log(err));
  // }

  _getUser() {
    if (!this.props.selectUserId) return;
    var i = 0;
    while (i < this.props.users.length) {
      var user = this.props.users[i];
      if (user.id === this.props.selectUserId) {
        return user;
      }
      i += 1;
    }
  }

  render() {
    console.log("UserDetail rendered:", this.props);
    let _user = this._getUser();
    console.log("_user;", _user);
    return (
      <div className="userDetail">
        <div>
          <img
            src="https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*3SVfBkNZI2f-sspiq59xcw.png?resize=391%2C321&ssl=1"
            alt=""
            width="150px"
          />
          {/* <p>이름 : {_user.name}</p>
          <p>이메일 : {_user.email}</p>
          <p>연락처 : {_user.phone}</p> */}
        </div>
      </div>
    );
  }
}

export default UserDetail;
