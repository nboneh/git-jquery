function myRepo(full_name){

    console.log('viewing repo: ', full_name)

    $.get("https://api.github.com/repos/" + full_name, github, function(data) {
        
        var repo = data
        // console.log(repo)

        $.get("/git-jquery/templates/repoView.jade", function(template) {

            var html = jade.render(template, {item: repo})
            
            $("#details").html(html)

        })

    })

}