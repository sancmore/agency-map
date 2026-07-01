# GitHub 업로드 & GitHub Pages 호스팅 가이드
(공개 저장소 · GitHub Desktop 방식)

> 목표: 현재 프로젝트를 GitHub로 버전관리하고, GitHub Pages로 폰에서도 접속.

## 0. 준비
- GitHub 계정: https://github.com 가입
- GitHub Desktop 설치: https://desktop.github.com (로그인)

## ⚠️ 중요 — 구글 드라이브 폴더 주의
현재 프로젝트는 구글 드라이브 동기화 폴더 안에 있습니다. **여기에 git 저장소를 만들면 동기화와 충돌해 깨질 수 있습니다.** 아래처럼 **드라이브 밖(예: 문서 폴더)** 에 저장소를 두고, 파일을 복사해 관리하세요.

## 1. GitHub에 저장소 만들기
1. github.com 로그인 → 우측 상단 **＋ → New repository**
2. Repository name: 예) `agency-map` (이 이름이 주소에 들어감)
3. **Public** 선택 → **Create repository**

## 2. GitHub Desktop으로 내려받기(Clone)
1. GitHub Desktop → **File → Clone repository** → 방금 만든 `agency-map` 선택
2. Local path를 **드라이브 밖 위치**로 지정 (예: `C:\Users\sancm\Documents\agency-map`)
3. Clone

## 3. 파일 복사해 넣기
`GA 영업 마스터\BestRouteFinder` 안에서 아래 파일들을 Clone한 폴더(`Documents\agency-map`)로 **복사**:
- `index.html` (호스팅 실행 파일 — 필수)
- **PWA 파일(필수)**: `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — 홈화면 아이콘·전체화면에 필요
- `agency_map.html`, `_build_template.html`, `_build_agencies.json`, `_build_stations.json`
- `담당대리점목록.xlsx`
- 문서들: `README.md`, `.gitignore`, `요구사항정의서.md`, `설계안_대리점관리시스템.md`, `설계안2_활동관리시스템_종합설계.md`, `UI목업_활동관리시스템.html`
- 제외: `~$…`(잠금), `*_백업*`, `*_원본*` 파일

## 4. 커밋 & 업로드(Push)
1. GitHub Desktop이 변경 파일을 자동 인식
2. 좌측 하단 Summary에 예) `초기 업로드` 입력 → **Commit to main**
3. 상단 **Push origin** 클릭 → GitHub에 업로드 완료

## 5. GitHub Pages 켜기(호스팅)
1. github.com의 `agency-map` 저장소 → **Settings → Pages**
2. Source: **Deploy from a branch** → Branch: **main** / 폴더: **/(root)** → Save
3. 1~2분 후 상단에 사이트 주소 표시: `https://<사용자명>.github.io/agency-map/`

## 6. 네이버 지도 도메인 등록 (필수)
NCP 콘솔 → 사용하는 Maps Application → **Web 서비스 URL**에 다음 추가:
- `https://<사용자명>.github.io`
(등록 후 몇 분 뒤 반영. 미등록 시 지도 인증 실패)

## 7. 폰에서 접속
1. 폰 브라우저에서 `https://<사용자명>.github.io/agency-map/` 접속
2. 첫 화면에서 Naver Maps Client ID 입력(1회)
3. 브라우저 메뉴 → **홈 화면에 추가** → 앱 아이콘처럼 사용

## 8. 이후 업데이트 방법
- **코드/파일 변경**: 파일 교체 → GitHub Desktop에서 Commit → Push (Pages 자동 갱신)
- **대리점 목록만 변경**: 앱의 **"목록 업데이트"** 버튼으로 엑셀 업로드(브라우저에 저장, 재배포 불필요)

## 참고 — 데이터 노출
공개 저장소·공개 Pages는 URL을 아는 누구나 접근 가능하고, 목록의 연락처·주소가 노출됩니다. 노출이 우려되면 저장소명을 추측 어렵게 하거나, 추후 **Cloudflare Pages + Access(무료 로그인)** 로 이전을 검토하세요.
