# kordoc 브라우저용 파일(kordoc.js) 다시 만드는 법

kordoc(MIT, github.com/chrisryugj/kordoc)은 Node.js용이라, 브라우저에 없는 기능을 대체 파일(shim)로 바꿔 한 파일로 묶습니다.

```
npm i kordoc@4.24.1 esbuild pako buffer path-browserify --omit=optional
node build.mjs          # → kordoc.browser.js (약 1.3MB). 이름을 kordoc.js로 바꿔 index.html 옆에 둠
```

- `shim/zlib.js`: 압축 풀기를 pako로 대체
- `shim/crypto.js`: 해시는 간단한 대체, 암호화(배포용 문서 해제)는 미지원
- `shim/stub.js`: 파일·OS 기능은 쓰지 않으므로 빈 대체. `cfb`만 실제로 연결
- `shim/pdf.js`: PDF는 미지원
- `build.mjs`: HWPX 읽기에 쓰는 `nodeStream`을 브라우저용 `async`로 바꿔 끼움

kordoc을 새 버전으로 올리면 이 대체 부분이 깨질 수 있으니, 4개 시험 문서로 Node 결과와 같은지 다시 확인하세요.
