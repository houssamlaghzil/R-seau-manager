import React from "react"
import 'react-quill/dist/quill.snow.css';
import firebase from "firebase";

export default class AdminMediadoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({text: value})
    }
    pushgataprogrammesrc() {
        const dataprogrammesrc = this.state.text.innerText
        console.log(dataprogrammesrc)
        firebase.database().ref().child("Media").child("titre").set(dataprogrammesrc);
    }

    firebasedata() {
        const dbRefObjectArticleCONTENU1 = firebase.database().ref().child('Media').child('src');
        dbRefObjectArticleCONTENU1.on('value', snap => {document.getElementById('divnew').innerHTML = snap.val()});
        console.log(dbRefObjectArticleCONTENU1)

        /* Stop */

    }

    render() {
        return (
            <>
                <label for="src">src</label>
                <input class="inputadminmedia" name="src" id="src" type="text" onChange={this.state.text}/>
                <button onClick={this.pushgataprogrammesrc}>validé</button>
            </>
        )
    }
}