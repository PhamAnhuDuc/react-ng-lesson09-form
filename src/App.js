import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: 'zaq', //chu y name phai luon trung vs state
            txtPassword: '123456',
            txtDec: 'eee',
            sltGenger: 1,
            rdLang: 'en',
            chkbStatus : false
            
        }
    }
    onHandleChange = (event) => {
        //console.log(event.target.value); //lay ra duoc gia tri khi input thay doi
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }
    onHandleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault(); //chan su kien submit
    }
    render() {
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={ this.onHandleSubmit}>
                        <div className="form-group">
                            <label >User name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                onChange={this.onHandleChange}
                                value = {this.state.txtName}
                            />
                        </div>

                        <div className="form-group">
                            <label >Password</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtPassword"
                                onChange={this.onHandleChange}
                                value = {this.state.txtPassword}
                            />
                        </div>

                        <div className="form-group">
                            <label >Mo ta :</label>
                            <textarea
                                name="txtDec"
                                onChange={this.onHandleChange}
                                className="form-control" rows="3"
                                value = {this.state.txtDec}
                            ></textarea>
                            
                        </div>

                        <label >Gioi Tinh</label>
                        <select name="sltGenger" className="form-control"
                            value={this.state.sltGenger}
                            onChange={this.onHandleChange}
                            value = {this.state.sltGenger}
                        >
                            <option value={0} >Nu</option>
                            <option value={1} >Nam</option>
                        </select>

                        <label >Ngon Ngu</label>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="rdLang"
                                    value="en"
                                    onChange={this.onHandleChange}
                                    checked = {this.state.rdLang === 'en'}
                                />
                                Tieng Anh
                            </label>
                            <br/>
                            <label>
                                <input
                                    type="radio"
                                    name="rdLang"
                                    value="vi"
                                    onChange={this.onHandleChange}
                                    checked = {this.state.rdLang === 'vi'}
                                />
                                Tieng Viet
                            </label>
                        </div>
                        
                        
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name = "chkbStatus"
                                    value={true}
                                    onChange={this.onHandleChange}
                                    checked = { this.state.chkbStatus === true }
                                />
                                Trang Thai
                            </label>
                        </div>
                        

                        <button type="submit" className="btn btn-primary">Luu lai </button>
                        <button type="reset" className="btn btn-default">Xoa TRang </button>
                    </form>
                </div>
            </div>

        );
    }
}

export default App;
