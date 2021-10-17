# Dead_Kill_or_Love
2019-1 게임 프로그래밍 기초 기말 프로젝트

# Developed by ..
김유진, 한채윤

# Game Cover
![게임커버](https://user-images.githubusercontent.com/43868490/121031529-61f7cc80-c7e5-11eb-9452-c0c424424a6a.png)

# How to play
![howtoplay2](https://user-images.githubusercontent.com/43868490/121035589-fdd70780-c7e8-11eb-9521-2c5a8e22754f.png)

# Screen shots
![그림1](https://user-images.githubusercontent.com/43868490/121031912-bf8c1900-c7e5-11eb-9f81-eca7ea176e25.png)
![그림2](https://user-images.githubusercontent.com/43868490/121031905-bdc25580-c7e5-11eb-86af-e4aaa1e5d7dc.png)
![그림3](https://user-images.githubusercontent.com/43868490/121031892-bb5ffb80-c7e5-11eb-929c-5b2a69894ee6.png)

# Modeling & Desing & Sound
1. 캐릭터 모델링 ( 마녀, 스켈레톤, 유령, 프랑켄)
- Magica Voxel 프로그램으로 모델링 후 Unity 내에서 사용
2. 캐슬 모델링
- Magica Voxel 프로그램으로 모델링 후 Unity 내에서 사용
3. 타이틀, 카피라이트, 팀 명 바 모델링
- Magica Voxel 프로그램으로 모델링 후 Unity 내에서 사용
4. How to Play (설명서) 디자인 및 제작
- 포토샵을 사용하여 png로 제작한 후 Unity 내에서 plane에 적용
5. Hp바 및 화면에 나오는 글자들
- 포토샵을 사용하여 png로 제작한 후 Unity 내에서 sprite로 활용 
6. SkyBox, 바닥 texture
- 구글 이미지 다운로드 후 skybox / plane에 적용 후 사용
7. Bgm
- The Champs-Tequila 사용
8. 캐릭터 애니메이션
- 3d 캐릭터 애니메이션 사이트 믹사모(https://www.mixamo.com/) 에서 애니메이션 적용 후 Unity에서 사용

# Developed
1. 캐릭터 모델에 대한 애니메이션 수정 및 활용
- 3d 캐릭터 애니메이션 사이트 믹사모(https://www.mixamo.com/#/)에서 캐릭터마다 애니메이션을 적용시키는데 한 캐릭터에 대한 모든 애니메이션에 skin을 포함하여 저장하면 애니메이션 적용이 되지 않는 문제가 발생. 해결을 위해 여러 가지 방법으로 저장하여 unity로 불러왔고 결국엔 메인 캐릭터 애니메이션은 skin을 포함한 형태로, 나머지 부수적인 캐릭터 애니메이션은 skin을 불포함하는 형태로 저장하여 unity에서 한 아바타에 여러 애니메이션 적용하기를 성공함
2. 애니메이션 파일 계층구조 수정
- 캐릭터 파일이 너무 작아 전체적으로 3ds max 프로그램을 통해 10000%씩 scale을 늘려줬는데 이후 unity에서 사용하기 위해 fbx 파일로 저장하였을 때, 가장 상위 계층인 hip이 사라지는 문제를 발견 (hip이 없으면 unity에서 애니메이션 적용이 불가능함) hip의 보존을 위해 그 보다 한 층 더 상위 계층을 만들어 저장 시, hip이 아닌 그 상위 계층이 사라지게 함
3. 애니메이션 컨트롤러 FSM 제작
한 캐릭터에 대한 많은 애니메이션들을 조건과 함께 연동시키기 위해 FSM을 직접 구현함. 조건은 float, bool, Trigger 형태로 다양하게 주었음
4. 실행된 애니메이션의 중력 문제
- 게임이 결판 날 때(한 명의 hp라도 0이 되면), 죽는 애니메이션이 캐릭터(Dead)이 실행되는데 몸이 바닥과 맞닿아야 하는데 공중에 뜨게 됨. 그런데 공중에 뜬 상태로 계속 있다 보면 캐릭터가 점점 두둥실 위쪽으로 올라감. 중력의 문제가 아닐까 생각하게 되어 캐릭터 > Rigidbody > Use Gravity를 해제해주니 문제가 해결됨
1. StartGM.cs (0_startAndHowTo.unity에서 1_play.unity scene으로 넘어가게 하는 코드)
- Input.GetButtonDown(“Fire1”) 을 사용하여 왼쪽 마우스 버튼을 입력 받아 첫 클릭에는 소스코드를 적용한 parent object인 메인 카메라를 사용설명서가 보이는 위치로 옮기고, 두번째 클릭에는 소스 코드를 적용한 empty object가 Application.LoadLevel으로 scene을 옮기도록 함. 또 OnGUI 함수를 만들어 사용자가 쉽게 게임을 진행할 수 있도록 메시지를 띄움.
2. CharacterSelection (캐릭터 선택하는 코드)
- 빈 게임오브젝트에 캐릭터들을 넣은 뒤, unity에서 canvas 와 button 기능을 사용하여 마우스로 사용자에게 입력 받아 캐릭터를 고를 수 있도록 함. 선택한 캐릭터는 index를 사용하여  사용자가 선택한 캐릭터로 play 할 수 있는 scene으로 넘어가게 함. 
3. Fighter.cs (애니메이터 컨트롤러 실행 코드)
- Animator animator = GetComponent<Animator>(); 으로 애니메이터를 선언해주고 Input.GetKeyDown을 사용하여 키 값에 따라 각각의 조건이 설정되고 그에 따라 애니메이션이 실행되도록 함
- Input.GetKeyDown을 통해 KeyCode값을 받아 애니메이터 컨트롤러를 재생시키는데, 
if(Input.GetKeyDown(KeyCode.RightArrow 혹은 LeftArrow){
	animator.SetTrriger(“Walk”); // RightArrow일 때
	//animator.SetTrriger(“Backstep”); // LeftArrow일 때 }
이렇게만 코드를 짜면 앞, 뒤로 이동하는 애니메이션인데도 불구하고 제자리 걸음을 함.
따라서, Horizontal 값과 Vertical 값을 이용하여 속도까지 줄 수 있도록 코드를 수정함.
+ 후에 코드를 더 수정하여 Horizontal 값과 Vertical 값을 모든 애니메이션에 직접 입력으로 줄 수 있도록 구현함

# Must be improved ...
1. Dead 애니메이션 실행 시의 pivot 문제
- 게임이 결판 날 때(한 명의 hp라도 0이 되면), 죽는 애니메이션이 캐릭터(Dead)이 실행되는데 몸이 바닥과 맞닿아야 하는데 공중에 뜨게 됨. 그를 통해 Dead 캐릭터 애니메이션과 캐릭터 기본 상태(Idle)의 pivot이 다르다는 것을 앎 (캐릭터의 기본 상태는 pivot이 정 중앙에 있음. 하지만 죽는 애니메이션(Dead)의 pivot은 캐릭터의 바닥에 있음)  3ds max를 통해 pivot의 위치를 캐릭터의 바닥으로 옮기는 생각을 하였지만 이미 다른 애니메이션에 다 pivot이 정 중앙에 있는 캐릭터를 사용하였기에 하지 않았음
2. 승리 애니메이션과 패배 애니메이션
- Sprite와 애니메이션을 사용하여 만든 YouWin(승리 시 화면에 "You win!”이라는 글자가 나타났다가 사라짐)과 YouLose (패배 시 화면에 "You Lose!”이라는 글자가 나타났다가 사라짐)를 실행하기 위한 코드를 ~~~.cs 내에 작성하였지만 조건의 문제 인지 실행이 되지 않음 
3. 카메라 무빙
- 카메라 무빙 코드를 짜서 대결하는 두 상대의 거리에 따라 카메라를 줌인, 줌아웃하는 코드를 작성하였지만 카메라가 캐릭터 너머의 빈공간만을 촬영하여 실현하지 못 함
4. 중력의 영향
- 프랑캔을 제외한 스켈레톤과 고스트는 –y방향으로 중력을 주는 코드는 적용했음에도 불구하고 중력의 영향을 받지 못해 위로 떠오르는 현상이 일어남.
5. 체력 스크립트 계산 문제
 - 프랑캔을 제외한 스켈레톤과 고스트는 코드가 동일함에도 불구하고 collider끼리 충돌이 있었을 때 체력감소가 일어나지 않음.
6. 게임 종료 및 다시 시작
- 게임을 종료하거나 다시 시작하는 것을 구현하지 못함

# Retrospect
- 여러 시도 끝에 AI와의 대결을 할 수 있는 격투 게임을 만들었지만, 캐릭터를 하나밖에 성공하지 못했다는 아쉬움이 있다. 지금은 아쉬운 점이 많지만 더 보완해서 완벽한 게임을 만들어보고 싶다. 


