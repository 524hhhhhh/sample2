document.querySelector('#moveButton').addEventListener('click', function () {
	window.location.href = 'cat.html';
});

document.querySelectorAll('.likeButton').forEach(function (button) {
	button.addEventListener('click', function () {
		alert('먕');
	});
});
