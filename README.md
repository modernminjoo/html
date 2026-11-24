# 보도자료 HTML 정리기 (html.theminjoo.kr)

한글(HWP·HWPX)로 만든 보도자료를 당 홈페이지 게시판(국감자료실)에 올릴 수 있는 깨끗한 HTML로 바꿔 주는 웹 페이지입니다.

## 쓰는 법
두 가지 방법 중 편한 쪽을 쓰면 됩니다.

1. **한글 파일 올리기**: "한글 파일(HWP·HWPX) 올리기" 버튼을 누르거나, 파일을 붙여넣기 칸으로 끌어다 놓습니다.
2. **복사·붙여넣기**: 한글에서 본문을 복사(Ctrl+C)하고, 변환기 화면에서 Ctrl+V를 누릅니다.

변환 뒤 "확인할 점"과 미리보기를 확인하고, "코드 복사" → 게시판 에디터의 **HTML(소스) 모드**에 붙여넣어 등록합니다. 이미지와 붙임 파일은 게시판에서 직접 넣습니다.

> 한글 파일은 **브라우저 안에서만 읽고 서버로 보내지 않습니다.**

## 파일 구성
| 파일 | 역할 |
|---|---|
| `index.html` | 변환기 본체(화면 + 변환 규칙). 외부 의존은 구글 웹폰트뿐 |
| `kordoc.js` | 한글 파일 읽기용(약 1.3MB). 파일을 처음 올릴 때만 불러옴. 붙여넣기만 쓰면 불러오지 않음 |
| `README.md` | 이 문서 |
| `kordoc-build/` | kordoc.js를 다시 만들 때만 쓰는 개발자용 파일 |

`index.html`과 `kordoc.js`는 **반드시 저장소 맨 위(같은 위치)**에 있어야 합니다.

## 업데이트·배포
- `main` 브랜치에 커밋하면 Vercel이 자동 배포합니다.
- 반영 확인: Vercel → Deployments 맨 위가 Ready면 반영됨. 화면이 그대로면 Ctrl+F5.
- 되돌리기: Vercel Deployments에서 이전 배포를 골라 Promote.
- 코드를 고친 뒤에는 회귀 테스트(`regression-test.js`, 저장소 밖에서 따로 관리)를 돌려 모두 통과하는지 확인합니다.

## 지원 범위
| 됨 | 안 됨 |
|---|---|
| HWP(5.x), HWPX | PDF, 배포용(암호) 문서 |
| 표 병합 칸, 표 제목·단위, 배포 정보, 글머리 단계 | 이미지 자동 옮김(게시판에서 직접 넣기) |

## kordoc.js 다시 만들기
`kordoc.js`는 오픈소스 [kordoc](https://github.com/chrisryugj/kordoc)(MIT)을 브라우저에서 돌도록 묶은 파일입니다. 평소에는 손댈 일이 없고, kordoc을 새 버전으로 바꿀 때만 다시 만듭니다. 만드는 방법과 대체 파일(shim)은 이 저장소의 `kordoc-build/` 폴더에 있습니다(개발자용, 사이트 동작과는 무관).

## 오픈소스 라이선스
`kordoc.js`에는 다음 오픈소스가 들어 있습니다.

| 이름 | 라이선스 |
|---|---|
| kordoc 4.24.1 (© 2026 chrisryugj) | MIT |
| cfb (SheetJS) | Apache-2.0 |
| jszip | MIT |
| @xmldom/xmldom | MIT |
| pako | MIT, Zlib |
| buffer, path-browserify, markdown-it | MIT |
