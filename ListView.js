import * as firebase from 'firebase';
 
const ListView = {
    databaseURL: "https://jsonplaceholder.typicode.com/photos",
};
firebase.initializeApp(ListView);

export default ListView;