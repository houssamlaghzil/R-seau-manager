import firebase from "firebase";

export default class Firebasedataarticle {

    static firebasedataarticle() {
        //Data Object Change Listener
        const dbRefObjectArticle = firebase.database().ref().child('object').child('title');

        dbRefObjectArticle.on('value', snap => {
            const preObjectArticle = document.getElementById('h1page');

            //console.log(snap.val());
            document.getElementById('h3page').innerText = JSON.stringify(snap.val(), null, 3);

        }, function (error) {
            // The fetch failed.
            console.error(error);
        });

        /* Stop */

    }
}