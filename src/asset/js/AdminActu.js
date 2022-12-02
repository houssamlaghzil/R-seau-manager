import firebase from "firebase";


export default class AdminActu {
    static firebasedataarticle(value) {
        //firebase.database().ref().child("article").child("article1").set(value = "hello")

        const dbRefObjectArticleCONTENU = firebase.database().ref().child('article').child('article1').child("CONTENU");
        dbRefObjectArticleCONTENU.on('value', snap =>{snap.val()});

    }

    static adminActu() {

        //firebase.database().ref().child("article").child("article1").set(value = "hello")

        /* <form method="get">
            <p>TITRE : <input id="TITRE" type="text" name="TITRE"/></p>
            <p>LIEN : <input type="text" name="LIEN"/></p>
            <p>IMAGE : <input type="text" name="IMAGE"/></p>
            <p>CONTENU : <input type="text" name="CONTENU"/></p>
            <p>ID : <input type="text" name="ID"/></p>
            <button type="button" onClick='getValue()'>Récupérer la valeur</button>
        </form>*/

        //Data Object Change Listener
        /*const dbRefObjectArticleLIEN = firebase.database().ref().child('article').child('article1').child("LIEN");
        const dbRefObjectArticleLIENW = firebase.database();

        dbRefObjectArticleLIEN.on('value', snap => {
            let varLIEN = snap.val()
            //console.log(snap.val());

            document.getElementById('LIEN').innerHTML = snap.val()
            return varLIEN

        });


       const dbRefObjectArticleIMG = firebase.database().ref().child('article').child('article1').child("IMG");
        dbRefObjectArticleIMG.on('value', snap => {
            document.getElementById('IMG').innerHTML = '<img class="imgatelier2"'+snap.val()+'/>';

        });


        const dbRefObjectArticleTITRE = firebase.database().ref().child('article').child('article1').child("TITRE");
        dbRefObjectArticleTITRE.on('value', snap => {

            //console.log(snap.val());
            document.getElementById('TITRE').innerHTML = snap.val()

        });*/

        //const dbRefObjectArticleCONTENU = firebase.database().ref().child('article').child('article1').child("CONTENU");
        //dbRefObjectArticleCONTENU.on('value', snap => {document.getElementById('CONTENU').innerHTML = snap.val()});


        /* Stop */

    }
}