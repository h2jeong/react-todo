import React, { Component } from "react";
import { post } from "axios";

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //file: null,
      name: "",
      userName: "",
      email: "",
      phone: "",
      website: "",
      province: "",
      city: "",
      district: "",
      street: "",
      zipcode: ""
      // ,
      // fileName: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefalut();
    this.addUser().then(response => {
      console.log(response.data);
    });

    // 데이터 전송 후 폼 초기화 후 새로고침하여 등록된 고객 데이터 확인
    // 테스트용 전체 페이지 새로고침/ 배포 전 수정요망
    this.setState({
      //file: null,
      name: "",
      userName: "",
      email: "",
      phone: "",
      website: "",
      province: "",
      city: "",
      district: "",
      street: "",
      zipcode: ""
    });
    window.location.reload();
  };

  handleFileChange = e => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    });
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addUser() {
    const url = "/api/addUser";
    const formData = new FormData();
    //formData.append("image", this.state.file);
    formData.append("name", this.state.name);
    formData.append("userName", this.state.userName);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    formData.append("website", this.state.website);
    formData.append("province", this.state.province);
    formData.append("city", this.state.city);
    formData.append("district", this.state.district);
    formData.append("street", this.state.street);
    formData.append("zipcode", this.state.zipcode);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    return post(url, formData, config);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>User Registration</h1>
        {/* 프로필 이미지:
        <input
          type="file"
          name="file"
          file={this.state.file}
          value={this.state.fileName}
          onChange={this.handleFileChange}
        /> */}
        <br />
        이름:
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleValueChange}
        />
        <br />
        id:
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.handleValueChange}
        />
        <br />
        이메일:
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleValueChange}
        />
        <br />
        연락처:
        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleValueChange}
        />
        <br />
        웹사이트:
        <input
          type="text"
          name="website"
          value={this.state.website}
          onChange={this.handleValueChange}
        />
        <br />
        주소:
        <input
          type="text"
          name="province"
          value={this.state.province}
          onChange={this.handleValueChange}
          placeholder="특별시/도"
        />
        -
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleValueChange}
          placeholder="시/군"
        />
        -
        <input
          type="text"
          name="district"
          value={this.state.district}
          onChange={this.handleValueChange}
          placeholder="구/읍"
        />
        -
        <input
          type="text"
          name="street"
          value={this.state.street}
          onChange={this.handleValueChange}
          placeholder="도로/동/면 상세주소"
        />
        <br />
        우편번호:
        <input
          type="text"
          name="zipcode"
          value={this.state.zipcode}
          onChange={this.handleValueChange}
        />
        <br />
        <button type="submit">추가하기</button>
      </form>
    );
  }
}

export default UserAdd;
