function myEvents(){
     console.log('listing events')    
    
    $.get("https://api.github.com/users/nboneh/events", github, function(data) {
        var events = data
        
        $.get("/git-jquery/templates/eventList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: events})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first event to view
            myEvent(events[0].repo.name)

        })

    })
}