(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['instructionButton'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button type=\"button\" id=\"how-to-play-button\">HOW TO PLAY?<i class=\"how-to-play\"></i></button>\n\n<div id=\"instruction-backdrop\" class=\"hidden\"></div>\n<div id=\"instruction-modal\" class=\"hidden\">\n    <div class=\"instruction-dialog\">\n\n        <div class=\"instruction-header\">\n            <h2 class=\"how-to-play-button-instruction\">HOW TO PLAY?</h2>\n            <button type=\"button\" id=\"instruction-close\" class=\"instuction-hide-button\">&times;</button>\n        </div>\n\n        <div class=\"instruction-body\">\n\n            <div class=\"instructions\">\n                <p>\n                    There are 2 players connected to the website. The game will start as soon as 2 players\n                    will be in the lobby. The game will randomly decide who starts first. Then, if the 2nd player will\n                    guess correctly the player that drawing will give points to another 2nd player. The winner will be\n                    the player who scores 3 points first.\n                </p>\n            </div>\n\n        </div>\n\n    </div>";
},"useData":true});
})();