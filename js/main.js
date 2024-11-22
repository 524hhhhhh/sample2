// Submit 버튼 클릭 이벤트 추가
document
	.querySelector("button[type='submit']")
	.addEventListener('click', function (event) {
		// 기본 동작 막기 (폼 전송 방지)
		event.preventDefault();

		// 알림창 띄우기
		alert('전송완료!');
	});
