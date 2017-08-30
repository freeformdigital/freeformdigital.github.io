$("#signupButton").click(function (e) {
    e.preventDefault();
    var URL = "https://hooks.zapier.com/hooks/catch/175623/r1ss2z/";
    var formData = $("#signupForm").serializeObject();

    try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", URL);
        xhr.send(JSON.stringify(formData));
        $("#signupForm").fadeOut(400, function(){
            $('#signedUp').hide().html('<p>Thanks! We will get back to you ASAP.</p>').fadeIn(400);
        });
    } catch(e) {
        console.error(e);
    }
});
