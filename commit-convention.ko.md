# Sonmat Game Server 커밋 메시지 규칙

> 참조 [AngularJS](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelineses), [ESLint](https://eslint.org/docs/developer-guide/contributing/pull-requests#step-2-make-your-changes)

## 중요

- 모든 커밋 메시지는 영어로 작성되어야 합니다.
- 이슈는 한글로 작성이 가능합니다.
- 코드 제출물은 두 번 확인하세요. 특히 Eslint 규칙에 따르고 있는지 확인하세요.

## 커밋 메시지 형식

```
<타입>: 짧은 설명 (fix #1234)

필요한 경우 긴 설명

BREAKING CHANGE: 하위 호환성이 없는 변경 사항이 있는 경우
```

- 커밋 메시지의 어떤 줄도 100자를 넘지 않아야 합니다!

### 되돌리기

```
revert: 커밋 <짧은 해시>

이는 커밋 <전체 해시>를 되돌립니다
필요한 경우 추가 설명
```

### 타입

다음 중 하나여야 합니다:

- **feat**: 새로운 기능
- **fix**: 버그 수정
- **docs**: 문서만 변경
- **style**: 코드의 의미에 영향을 주지 않는 변경 (공백, 서식, 누락된 세미콜론 등)
- **refactor**: 버그를 수정하거나 기능을 추가하지 않는 코드 변경
- **perf**: 성능을 향상시키는 코드 변경
- **test**: 누락된 테스트 추가 또는 기존 테스트 수정
- **chore**: 빌드 프로세스, 보조 도구, 라이브러리 변경 (문서 생성 등)

### 제목

- 명령형, **현재** 시제를 사용하세요: "change"가 아니라 "changed" 또는 "changes"가 아님
- 첫 글자를 대문자로 하지 마세요
- 마지막에 마침표(.)를 사용하지 마세요
- GitHub 이슈를 끝에 참조하세요. 커밋이 문제를 완전히 해결하지 않는 경우 `(fixes #1234)` 대신 `(refs #1234)`를 사용하세요.

### 본문

- 편안하게 명령형, 현재 시제를 사용하여 작성하세요: 예를 들어 "change"를 사용하되, "changed"나 "changes"는 피하도록 노력하세요.
- 변경 사항에 대한 동기와 이전 동작과의 차이를 상세하게 설명하세요. 자유롭게 길게 작성하셔도 괜찮습니다.
