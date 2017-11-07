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

	get_post: async function(id) {
		fetch('https://api.github.com/gists', {
		    method: 'post',
		    body: JSON.stringify(opts)
		  }).then(function(response) {
		    return response.json();
		  }).then(function(data) {
		    console.log('data.content');
		  });
		}
}

export default Backend