// $(function () {... is same as $(document).ready(function ())...
// so this function is called after all other resources are loaded
$(function() {

	var tmpl,		// Main template HTML
	tdata = {};		// JSON data object that feeds the template

	// Initialize page
	var initPage = function() {
		// Load the HTML template
		$.get("/templates/home.html", function(d) {
			tmpl = d;
		});

		// Retrieve the server data and then initialize the page
		$.getJSON("/albums.json", function (d) {
			$.extend(tdata, d.data);
		});

		// When AJAX calls are complete parse the template
		// replacing mustache tags with vars
		$(document).ajaxStop(function () {
			var renderedPage = Mustache.to_html(tmpl, tdata);
			$("body").html(renderedPage);
		})
	}();
});