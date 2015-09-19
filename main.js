var casper = require("casper").create();

casper.start("https://stackoverflow.com/users/login", function() {
    this.fill("form#se-login-form", {
        "email":    "your email",
        "password":    "your password"
    }, true);
});

casper.then(function() {
    this.evaluateOrDie(function() {
        return document.querySelector(".reputation").innerText.trim() === "220";
    }, "Error.");
});

casper.run(function() {
    this.echo("Done.").exit();
});