function myEvent(full_name){
	console.log('viewing event: ', full_name)

	$.get("/git-jquery/templates/eventView.jade", function(template) {

		var html = jade.render(template, {item: full_name})
		   
		$("#details").html(html)

	})
}