function setupExamples(json_file,card_deck,example_folder,github_name){

	$.ajax({
		type:"GET",
		"dataType":"json",
		"url":json_file

	}).done(function(data){
		var deck = $("#"+card_deck)
		for (var i in data){
			var item = data[i];
			var card =$("<div>").attr("class","card mlv-card");
			var header = $("<div>").attr("class","card-header").html("<h6>"+item.id+". "+item.title+"</h6>");
			var body = $("<div>").attr("class","card-body")
			body.append("<p class='card-text'>"+item.desc+"</p>");
			var footer = $("<div>").attr("class","card-footer").appendTo(card);
			let bt_class = "btn btn-secondary btn-sm float-left";
			if (item.disable_view){
				bt_class+=" disabled";
			}
			$("<a>").attr({
						"class":bt_class,
						"href":"https://martinsergeant.github.io/"+example_folder+"/example"+item.id+".html"
						}).text("view").appendTo(footer)
			$("<a>").attr({
						"class":"btn btn-secondary btn-sm float-right",
						"href":"https://github.com/Hughes-Genome-Group/"+github_name+"/blob/master/examples/example"+item.id+".html"
						}).text("source").appendTo(footer)
			
			card.append(header).append(body).append(footer).appendTo(deck);


		}

	})



}