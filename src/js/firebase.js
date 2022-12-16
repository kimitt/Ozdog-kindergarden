const db = firebase.firestore();
db.collection('info').get().then((result) => {
    console.log(result)
})