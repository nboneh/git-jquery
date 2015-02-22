function myRepos(){

    console.log('listing my repos')    
    
    $.get("https://api.github.com/users/nboneh/repos", github, function(data) {
        var repos = data
        
        $.get("/git-jquery/templates/repoList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: repos})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            myRepo(repos[0].full_name)

        })

    })

}