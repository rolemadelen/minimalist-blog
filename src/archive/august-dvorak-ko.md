---
title: '효율을 추구한 박사 Dvorak'
posttitle: '효율을 추구한 박사 Dvorak'
date: '2023-02-24 10:00:00'
updated: '2023-02-26 14:10:00'
uid: 'jd'
---

## August Dvorak (오거스트 드보락)

August Dvorak은 미네소타 글렌코 출신으로 University of Washington (UW)의 박사였으며, 2차 세계대전 당시 미 해군 잠수함의 장교로 복무한 인물이다.

![August Dvorak](/images/august-dvorak.webp)

Dvorak이 타자와 자판에 흥미를 느끼게 된 계기는 당시 타자기로 타자 수업을 하던 한 교수의 질문에서 비롯된다.

> "저희 학생들은 왜 4자 이하의 짧은 단어들을 칠 때 매번 실수하는 걸까요?"

타입스크립트(타자기로 친 문서)에서 흔히 실수하는 단어들을 확인해보니 정말로 _the, to, of, and, is, here, it, that, ..._ 와 같이 짧은 단어들이 주를 이뤘다. Dvorak은 타자 치는 법을 몰랐고 배워본 적도 없다. 하지만 반복되는 오류에 대해 생각하며 연구하기 시작한다.

우선 필기에서 오류를 범하는 주요인으로는 크게 세 가지가 있다는 것을 알게 된다.

1. 익숙하지 않은 단어 (자주 사용되지 않는 단어)
2. 철자가 어려운 단어
3. 연습 부족

하지만 세 가지 이유 모두 타자기의 경우와는 연관이 없었다. 앞에서 말했듯이 타자기에서의 실수는 주로 _the, that, it, here, ..._ 와 같이 익숙하면서도 너무나 간단한 단어들이었기 때문에, 개인의 연습 부족이라고 보기에도 어렵다. 여기서 Dvorak은 사람이 아니라 타자기의 자판이 문제라고 생각하게 된다.

## 비효율적인 자판

Dvorak은 타자기의 자판을 보면서 의문을 품기 시작했다. 자주 사용되는 문자가 멀리 떨어져 있고, _th, ph, sh, br, ec, ce, un, um, nu, ..._ 와 같이 주로 쓰이는 조합들이 각각 위아래 행에 자리 잡고 있어 같은 손가락이 위아래로 이동하는 횟수가 많다는 것이었다.

이런 비효율적인 움직임을 최소화하면, 자잘한 실수를 하지 않게 될 거로 생각하며 연구를 시작하게 된다.[^a]

약 10년 후, 1936년에 [드보락 자판](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/2040248)이 세상에 모습을 드러냈다.

![dvorak layout](/images/dvorak-layout.webp)
< 드보락 자판의 초기 모습 From Typewriting Behavior via [Kristina Panos](https://hackaday.com/author/cornbreadninja/) >

단어마다 하나 이상의 모음이 거의 무조건 들어가는 영어이기에, 모음 다섯 개를 전부 홈 행(home row) 왼쪽에 배치했다. 그리고 조합으로 자주 쓰이는 자음(consonant) 다섯 개를 오른쪽에 배치했다.

왼손의 주된 움직임과 위아래 행으로의 이동이 잦았던 이전 자판과 달리, 드보락 자판은 대부분 홈 행에서 타자가 가능하다.

---

아래는 내가 작성한 영어 블로그의 글을 드보락 자판을 사용했을 때와 사용하지 않았을때의 히트맵이다.[^b]

현재 전세계적으로 널리 쓰이는 자판:
![qwerty heat map](/images/qwerty-heatmap.webp)
드보락 자판:
![dvorak heat map](/images/dvorak-heatmap.webp)

---

이렇게 효율적인 자판이라면 지금 대부분의 사람이 쓰고 있거나 알고 있어야 하지만, 주류로 올라오는 데는 실패했다.

지금의 자판을 별문제 없이 잘 사용하고 있는데, 굳이 하는 일을 모두 멈춰가며 새로운 자판을 배울 필요가 없었기 때문이다.

한 번 새로운 자판을 배우기 시작하면 기존 자판에서의 근육 기억(muscle memory)이 사라져버린다. 도중에 "아 포기!"를 외쳐도, 원래의 자판으로 간단히 돌아갈 수 없다는 얘기다.

이런 시간과 비용을 감당하면서 지금의 자판을 버려야 할 정도로, 효율적인 자판의 필요성을 느끼지 못했다.

> I’m tired of trying to do something worthwhile for the human race. They simply don’t want to change! - August Dvorak

## Source

- <https://hackaday.com/2020/03/31/perhaps-august-dvorak-is-more-your-type/>
- <https://www.historylink.org/File/20997>

[^a]: brother-in-law이자 대학교 박사였던 William Dealey와 함께 진행했다.
[^b]: [@patrickwied](https://twitter.com/patrickwied)가 만든 [웹사이트](https://www.patrick-wied.at/projects/heatmap-keyboard/)를 사용했다.
