
jQuery.fn.loadGitHubRepos = function(username) {
  this.html('<p class="text-centered">Loading GitHub repositories</p>');
  var target = this;
  $.getJSON('http://api.github.com/users/' + username + '/repos',{},function(data) {
    var list = '';
    $(data).each(function(){
      console.log(this.language);
      list = list + '<p class="content"><a href = "'
      + this.svn_url
      + '"><strong>'
      + this.name
      + '</strong></a>'
      + '<span class="text-italics text-right">'
      + this.language
      + '</span></p>'
      + '<p class="content">'
      + this.description
      + '</p>' ;
    });
    console.log(list)
    target.html(list);
  });
}

$(function() {
  $('#github').loadGitHubRepos('jamiebrynes7');
});
