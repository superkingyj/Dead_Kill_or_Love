# Dead_Kill_or_Love
2019-1 게임 프로그래밍 기초 기말 프로젝트

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

# Must be improved ...
1. Dead 애니메이션 실행 시의 pivot 문제
- 게임이 결판 날 때(한 명의 hp라도 0이 되면), 죽는 애니메이션이 캐릭터(Dead)이 실행되는데 몸이 바닥과 맞닿아야 하는데 공중에 뜨게 됨. 그를 통해 Dead 캐릭터 애니메이션과 캐릭터 기본 상태(Idle)의 pivot이 다르다는 것을 앎 (캐릭터의 기본 상태는 pivot이 정 중앙에 있음. 하지만 죽는 애니메이션(Dead)의 pivot은 캐릭터의 바닥에 있음)  3ds max를 통해 pivot의 위치를 캐릭터의 바닥으로 옮기는 생각을 하였지만 이미 다른 애니메이션에 다 pivot이 정 중앙에 있는 캐릭터를 사용하였기에 하지 않았음
2. 승리 애니메이션과 패배 애니메이션
Sprite와 애니메이션을 사용하여 만든 YouWin(승리 시 화면에 "You win!”이라는 글자가 나타났다가 사라짐)과 YouLose (패배 시 화면에 "You Lose!”이라는 글자가 나타났다가 사라짐)를 실행하기 위한 코드를 ~~~.cs 내에 작성하였지만 조건의 문제 인지 실행이 되지 않음 
3. 카메라 무빙
카메라 무빙 코드를 짜서 대결하는 두 상대의 거리에 따라 카메라를 줌인, 줌아웃하는 코드를 작성하였지만 카메라가 캐릭터 너머의 빈공간만을 촬영하여 실현하지 못 함
4. 중력의 영향
프랑캔을 제외한 스켈레톤과 고스트는 –y방향으로 중력을 주는 코드는 적용했음에도 불구하고 중력의 영향을 받지 못해 위로 떠오르는 현상이 일어남.
5. 체력 스크립트 계산 문제
 - 프랑캔을 제외한 스켈레톤과 고스트는 코드가 동일함에도 불구하고 collider끼리 충돌이 있었을 때 체력감소가 일어나지 않음.
6. 게임 종료 및 다시 시작
게임을 종료하거나 다시 시작하는 것을 구현하지 못함

# Retrospect
- 여러 시도 끝에 AI와의 대결을 할 수 있는 격투 게임을 만들었지만, 캐릭터를 하나밖에 성공하지 못했다는 아쉬움이 있다. 지금은 아쉬운 점이 많지만 더 보완해서 완벽한 게임을 만들어보고 싶다. 


