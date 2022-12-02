import React from "react"

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import firebase from "firebase";

export default class ClassCVVAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({text: value})
    }
    pushgataprogrammeCVV() {
        const dataprogrammeCVV = document.getElementById("CVVTEXT").innerText
        console.log(dataprogrammeCVV)
        firebase.database().ref().child("CVV").child("TEXTCVV").set(dataprogrammeCVV);
    }

    render() {
        return (
            <>
                <ReactQuill value={this.state.text}
                            onChange={this.handleChange}/>
                <div id="CVVTEXT">{this.state.text}</div>
                <button onClick={this.pushgataprogrammeCVV}>validé</button>
            </>
        )
    }
}
