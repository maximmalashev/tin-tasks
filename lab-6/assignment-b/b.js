addParagraph = function() {
    var body = document.getElementById("body");
    var p = document.createElement("p");

    var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quidem cum similique impedit, quam qui commodi quas optio porro voluptatum doloribus. Corrupti labore assumenda recusandae cumque tempora perferendis, nam, voluptates incidunt aliquam expedita enim laborum explicabo maxime neque quasi odit beatae ut quidem modi ex temporibus magnam tempore ab voluptas. Distinctio, est! Architecto nesciunt odio quibusdam ex corrupti quam libero a nisi doloremque cumque omnis sint quidem, mollitia saepe et asperiores beatae nemo? Error a laudantium accusamus repellendus ex voluptatibus, eligendi obcaecati amet consequuntur praesentium exercitationem dolores? Qui delectus esse voluptate beatae, vel mollitia quis cupiditate culpa, quibusdam doloremque expedita.";
    p.innerText = text;
    body.appendChild(p);
}

delay = function(func, ms) {
    setTimeout(() => func.apply(this, arguments), ms);
} 

delay(addParagraph, 5000);