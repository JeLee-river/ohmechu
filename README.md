# **Project 오늘의 메뉴 추천**

> 밀키트를 판매하는 쇼핑몰

<br>
<br>

## **1. 프로젝트 소개**

### :bulb:기획 배경

**1인 가구 증가로 인한 간편식 성행**

- 통계청에서 발표한 2022년 1인 가구 통계에 따르면, '21년 1인가구는 전체 가구의 33.4%인 716만 6천 가구이며, 2030년에는 35.6%에 이를 것으로 예상됨.

- 대량의 묶음 재료 소비에 대한 부담, 외식 및 배달 물가 상승으로 인해 밀키트가 새로운 음식 소비 패턴으로 자리 잡고 있음.

- 온라인 밀키트 쇼핑몰은 오프라인에 비해 종류에 구애받지 않고 다양한 상품을 판매할 수 있으며, 대량으로 구매하기 간편한 점에서 강점이 있음.

<br>

[출처1-2022 통계로 보는 1인 가구(2022, 통계청)](https://kostat.go.kr/board.es?mid=a10301010000&bid=10820&tag=&act=view&list_no=422143&ref_bid=)

[출처2-"외식 물가·배달비 부담에 '밀키트' 찾는 소비자↑"(2023, 경기신문)](https://www.kgnews.co.kr/mobile/article.html?no=743717)

<br>

### :dart:기획 목적 및 목표

- 이용자가 원하는 밀키트 상품을 선택하여 구매할 수 있도록 서비스를 제공하는 것을 목적으로 함.

- 이용자는 회원 가입을 하지 않아도 상품을 구경하고 장바구니에 넣을 수 있으며, 최소한의 클릭으로 상품을 구매하는 것을 목표로 함.

<br>

### :bust_in_silhouette:서비스 대상(페르소나)

- **김키트 / 20세 / 자취생**

  "자취를 시작하면서 직접 요리를 만드는 저녁에 소소한 행복을 느끼고 있어요. 하지만 혼자 살다보니 한 번 사면 남는 재료들이 냉장고에 굴러다니더라구요."

- **임리수 / 35세 / 직장인 주부**

  "퇴근 후 항상 일이 바빠 가족과 함께 배달 음식을 자주 먹었어요. 그런데 음식이 대부분 자극적이라 우리 아이의 아토피가 심해지더라구요. 좀 더 건강한 식사를 하려면 직접 요리하는 수 밖에 없는데 퇴근이 늦어서 요리할 시간이 없네요."

<br>
<br>

## **2. 서비스 기능**

### :sparkles:주요 기능

- 상품 열람

  - 사용자가 메인화면에서 신상품 목록, 인기 상품 목록을 조회할 수 있습니다.
  - 사용자가 카테고리를 클릭하여 필터링된 상품 목록을 조회할 수 있습니다.
  - 사용자가 상품을 클릭하여 가격, 양, 설명을 포함한 상세 정보를 확인할 수 있습니다.

- 장바구니

  - 로그인하지 않은 사용자도 장바구니에 원하는 상품을 담을 수 있습니다.
  - 사용자는 장바구니 페이지에서 자신이 담은 상품의 가격, 담은 갯수, 지불해야 할 총 비용을 확인할 수 있습니다.
  - 로그인 한 사용자는 장바구니 페이지에서 결제 페이지로 이동할 수 있습니다.

- 상품 주문

  - 로그인 한 사용자는 장바구니 또는 상품 상세페이지에서 상품을 주문할 수 있습니다.

<br>
<br>

## **3. 팀원 및 역할 분담**

### :star:팀원 소개

| 이름                                         | 담당 업무            |
| -------------------------------------------- | -------------------- |
| [조정현](https://github.com/whThswh)         | 팀장/프론트엔드 개발 |
| 이채연                                       | 프론트엔드 개발      |
| [이주영](https://github.com/1004ljy980)      | 프론트엔드 개발      |
| [장준희](https://github.com/junhui324)       | 백엔드 개발          |
| [**이정은**](https://github.com/JeLee-river) | 백엔드 개발          |

<br>
<br>

## **4. 프로젝트 구조**

### :wrench:기술 스택

| 부문       | 주요 기술 스택                   |
| ---------- | -------------------------------- |
| 프론트엔드 | JavaScript, HTML, Tailwind CSS   |
| 백엔드     | NodeJS, Express, MongoDB, AWS S3 |

<br>

<img src="https://res.cloudinary.com/dr26wooar/image/upload/v1694700627/ohmechu/ohmechuTechStack.png" alt='Tech Stack' width="526" height="150"/>

<br>

### :art:Figma

[**Figma 보러가기**:arrow_forward:](https://www.figma.com/file/FGOhDnY882fP7IrECS2mg8/%EC%98%A4%EB%8A%98%EC%9D%98-%EB%A9%94%EB%89%B4-%EC%B6%94%EC%B2%9C?type=design&node-id=0%3A1&mode=design&t=4bfXzc5QNGopWlFZ-1)

<img src="https://res.cloudinary.com/dr26wooar/image/upload/v1694701096/ohmechu/ohmechuFigma.png" alt='Figma' width="240" height="427"/>

<br>

### :file_folder:DB diagram

<img src=https://res.cloudinary.com/dr26wooar/image/upload/v1694781109/ohmechu/DB-Schema.png alt='DB diagram' width="700" height="318"/>

<br>

### :arrow_down:User Flow

[**User Flow 보러가기**:arrow_forward:](https://miro.com/app/board/uXjVMSA3Tig=/?share_link_id=706623537216)

<img width="700" height="558" src="https://res.cloudinary.com/dr26wooar/image/upload/v1694782319/ohmechu/Flowchart.jpg">
  
<br>  
  
### :page_with_curl:API 문서
  
[**API 문서 보러가기**:arrow_forward:](https://dent-ulna-126.notion.site/API-4ac1683866434513acc6439642924df2?pvs=4)

<img width="700" height="336" src="https://res.cloudinary.com/dr26wooar/image/upload/v1694782651/ohmechu/API-Document.png">


<br>
<br>

## **5. 시연 영상**

### :clapper:시연 영상

[**시연 연상 보러가기**:arrow_forward:](https://youtu.be/zMI9B9oE6iU)