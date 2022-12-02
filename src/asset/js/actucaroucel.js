import firebase from "firebase";


export default class CVVDynamique {

    static CVVDynamique(value) {

        const dbRefObjectArticleCONTENU1 = firebase.database().ref().child('CVV').child('TEXTCVV');
        dbRefObjectArticleCONTENU1.on('value', snap => {
            document.getElementById('divtextCVV').innerHTML = snap.val()
        });
        const dbRefObjectArticleCONTENU2 = firebase.database().ref().child('CVV').child('IFRAMECVV');
        dbRefObjectArticleCONTENU2.on('value', snap => {
            document.getElementById('IFRAMECVV').innerHTML = snap.val()
        });

        /* Stop */

    }
}