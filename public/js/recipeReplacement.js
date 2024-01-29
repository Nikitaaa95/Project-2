

        document.addEventListener("DOMContentLoaded", function() {
            var information = {
                replacementData: `
                {{#if recipes.length}}
                <div class="col-md-6 blog-list">
                <h3>Current Recipes:</h3>
                   {{#each recipes as |recipe|}}
                <section class="md:w-1/2 bg-white p-8 my-8 md:ml-4 rounded-lg shadow-md">
                   <div class="row mb-2 w-full">
                   <div class="col-md-8">
                       <h4><a href="/api/recipes/{{recipe.id}}">{{recipe.title}}</a></h4>
                       <p>{{recipe.difficulty}}</p>
                   </div>
                   </div>
                   </section>
                    {{/each}}
                   </div>
                   {{/if}}
                </div>`          
                };
        
             // Compile the template
            var templateSource = document.getElementById("yourTemplateId").innerHTML;
            var template = Handlebars.compile(templateSource);

            // Render the initial data
            document.getElementById("welcomeMessage").innerHTML = template(data);
});

function replaceData() {
    var newInformation = {
        replacementData: //"enter new data"
                };
        // Compile the template
            var templateSource = document.getElementById("replacement").innerHTML;
            var template = Handlebars.compile(templateSource);
            
        // Render the updated data
            document.getElementById("replacement").innerHTML = template(newInformation);
            }