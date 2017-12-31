import { auth, db } from './FireBaseConfig';

var Backend = {

	// get_all_posts: async function() {
	//     const response = await fetch('https://data.diesel16.hasura-app.io/v1/template/get_all_posts')
	//     const json = await response.json()
	//     return json
	// },

	// get_current_post: async function(id){
	//     const response = await fetch("https://data.diesel16.hasura-app.io/v1/template/get_post", {
	// 	    method: 'post',
	// 	    body: JSON.stringify({"id": id})
	//   	})
	//     const json = await response.json();
	//     return json
	// },

	save_current_post: async function(item){
	    const response = await fetch("https://data.diesel16.hasura-app.io/v1/template/update_post", {
		    method: 'post',
		    body: JSON.stringify({	
		    	id: item.id,
		    	title: item.title,
		    	content: item.content,
		    })
	  	})
	    const json = await response.json();
	    return json
	},
	delete_current_post: async function(id){
	    const response = await fetch("https://data.diesel16.hasura-app.io/v1/template/delete_post", {
		    method: 'post',
		    body: JSON.stringify({"id": id})
	  	})
	    const json = await response.json();
	    return json
	},	

	get_all_posts : async () => {

	    console.log("Getting all posts")
	    try {
		    const ref = db.collection('posts');
	        const response = await ref.get();
	        const items = [];

	        response.forEach((doc) => {
	        	const item = {
	        		'id' : doc.id,
	        		'title' : doc.data().title,
	        		'content' : doc.data().content,
	        		'author' : doc.data().author
	        	}
	            items.push(item);
	        })
	        console.log("Fetched " + items.length + " items")
	    	return items
	    }
	    catch (err) {
	        console.log('Error getting documents', err);
	    }
	},

	get_current_post: async (id) => {
	    console.log("Getting post " + id )
	    try {
		    const ref = db.collection('posts').doc(id);
	        const response = await ref.get();

	        console.log("Document data:", response.data());

    	    const json = await response.json();
    		return json
	    }
	    catch (err) {
	        console.log('Error getting documents', err);
	    }
	},

    login: async (email, pass) => {
        try {
            await auth.signInWithEmailAndPassword(email, pass);
            console.log("Logged In!");

        } catch (error) {
            console.log(error.toString())
        }

    },

    logout: async () => {
        try {
        	alert("Logging Out")
            await auth.signOut();
            console.log("Logged Out!");
            // Navigate to login view
        } catch (error) {
            console.log(error);
        }
    },
}

export default Backend