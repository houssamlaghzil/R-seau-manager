import firebase from "firebase";


export default class Firebasedataarticle {

    static firebasedataarticle(value) {

        const dbRefObjectArticleCONTENU1 = firebase.database().ref().child('article').child('article1').child("CONTENU1");
        dbRefObjectArticleCONTENU1.on('value', snap => {document.getElementById('CONTENU1').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU2= firebase.database().ref().child('article').child('article1').child("CONTENU2");
        dbRefObjectArticleCONTENU2.on('value', snap => {document.getElementById('CONTENU2').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU3 = firebase.database().ref().child('article').child('article1').child("CONTENU3");
        dbRefObjectArticleCONTENU3.on('value', snap => {document.getElementById('CONTENU3').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU4 = firebase.database().ref().child('article').child('article1').child("CONTENU4");
        dbRefObjectArticleCONTENU4.on('value', snap => {document.getElementById('CONTENU4').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU5 = firebase.database().ref().child('article').child('article1').child("CONTENU5");
        dbRefObjectArticleCONTENU5.on('value', snap => {document.getElementById('CONTENU5').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU6 = firebase.database().ref().child('article').child('article1').child("CONTENU6");
        dbRefObjectArticleCONTENU6.on('value', snap => {document.getElementById('CONTENU6').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU7 = firebase.database().ref().child('article').child('article1').child("CONTENU7");
        dbRefObjectArticleCONTENU7.on('value', snap => {document.getElementById('CONTENU7').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU8 = firebase.database().ref().child('article').child('article1').child("CONTENU8");
        dbRefObjectArticleCONTENU8.on('value', snap => {document.getElementById('CONTENU8').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU9 = firebase.database().ref().child('article').child('article1').child("CONTENU9");
        dbRefObjectArticleCONTENU9.on('value', snap => {document.getElementById('CONTENU9').innerHTML = snap.val()});

        const dbRefObjectArticleCONTENU10 = firebase.database().ref().child('article').child('article1').child("CONTENU10");
        dbRefObjectArticleCONTENU10.on('value', snap => {document.getElementById('CONTENU10').innerHTML = snap.val()});


        /* Stop */

    }
    static firebasedataprogramme(value) {

        const dbRefObjectprogrammeCONTENU1 = firebase.database().ref().child('programme').child("CONTENU1");
        dbRefObjectprogrammeCONTENU1.on('value', snap => {document.getElementById('ProgrammeCONTENU1').innerHTML = snap.val()});

        const dbRefObjectprogrammeCONTENU2= firebase.database().ref().child('programme').child("CONTENU2");
        dbRefObjectprogrammeCONTENU2.on('value', snap => {document.getElementById('ProgrammeCONTENU2').innerHTML = snap.val()});

        const dbRefObjectprogrammeCONTENU3 = firebase.database().ref().child('programme').child("CONTENU3");
        dbRefObjectprogrammeCONTENU3.on('value', snap => {document.getElementById('ProgrammeCONTENU3').innerHTML = snap.val()});

        const dbRefObjectprogrammeCONTENU4 = firebase.database().ref().child('programme').child("CONTENU4");
        dbRefObjectprogrammeCONTENU4.on('value', snap => {document.getElementById('ProgrammeCONTENU4').innerHTML = snap.val()});

        const dbRefObjectprogrammeCONTENU5 = firebase.database().ref().child('programme').child("CONTENU5");
        dbRefObjectprogrammeCONTENU5.on('value', snap => {document.getElementById('ProgrammeCONTENU5').innerHTML = snap.val()});

        const dbRefObjectprogrammeCONTENU6 = firebase.database().ref().child('programme').child("CONTENU6");
        dbRefObjectprogrammeCONTENU6.on('value', snap => {document.getElementById('ProgrammeCONTENU6').innerHTML = snap.val()});

        const dbRefObjectprogrammeCONTENU7 = firebase.database().ref().child('programme').child("CONTENU7");
        dbRefObjectprogrammeCONTENU7.on('value', snap => {document.getElementById('ProgrammeCONTENU7').innerHTML = snap.val()});

        const dbRefObjectprogrammeCONTENU8 = firebase.database().ref().child('programme').child("CONTENU8");
        dbRefObjectprogrammeCONTENU8.on('value', snap => {document.getElementById('ProgrammeCONTENU8').innerHTML = snap.val()});

        const dbRefObjectprogrammeBUTTON= firebase.database().ref().child('programme').child("BUTTON");
        dbRefObjectprogrammeBUTTON.on('value', snap => {document.getElementById('icondownload').innerHTML = snap.val()});


        /* Stop */

    }
}