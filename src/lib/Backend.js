var Backend = {

	get_all_posts: async function() {
	    const response = await fetch('https://data.diesel16.hasura-app.io/v1/template/get_all_posts')
	    const json = await response.json()
	    return json
	},

	get_current_post: async function(id){
	    const response = await fetch("https://data.diesel16.hasura-app.io/v1/template/get_post", {
		    method: 'post',
		    body: JSON.stringify({"id": id})
	  	})
	    const json = await response.json();
	    return json
	},

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
	login: async function(item){
		try {
		    const response = await fetch("https://auth.diesel16.hasura-app.io/login", {
			    method: 'post',
			    body: JSON.stringify({
			    	"username": item.uname,
			     	"password": item.pwd			  
				})
		  	})
		    const json = await response.json();
		    console.log(json)
		    return json
		}
		catch (error) {
			console.log(error)
		}
	},
}

export default Backend