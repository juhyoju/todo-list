## TodoInput
- input 내용 변경 시 state 업데이트
- 버튼이 클릭되면 새로운 todo 생성 후 업데이트
- input 엔터 클릭 시 버튼으로 추가한 것과 동일한 액션 적용

##### props
- value : input 내용
- onChange : input 내용이 변경될 때 실행할 함수
- onKeyPress : input에서 키를 입력할 때 실행되는 함수. (Enter 누를 때 onAdd 되는 동일한 작업을 하기 위함)
- onAdd : 버튼 클릭 시 실행할 함수
