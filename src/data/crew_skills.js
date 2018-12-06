(function() {

    LAM.crewSkills = {
        "0": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 0
        },
        "1": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 1
        },
        "2": {
            "name": "망자 내성:강인 레벨 1",
            "type": "2",
            "text": "망자 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 2
        },
        "3": {
            "name": "망자 내성:보통 레벨 1",
            "type": "2",
            "text": "망자 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 3
        },
        "4": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 4
        },
        "5": {
            "name": "탐색:해적의 깃발 레벨 1",
            "type": "1",
            "text": "'모험물: 해적의 깃발'을 발견할 수 있게 된다.",
            "id": 5
        },
        "6": {
            "name": "폭풍우 내성:강인 레벨 1",
            "type": "2",
            "text": "폭풍우 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 6
        },
        "7": {
            "name": "세이렌 내성:강인 레벨 1",
            "type": "2",
            "text": "세이렌 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 7
        },
        "8": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 8
        },
        "9": {
            "name": "한파 내성:강인 레벨 1",
            "type": "2",
            "text": "한파 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 9
        },
        "10": {
            "name": "투혼:유령선 레벨 4",
            "type": "2",
            "text": "유령선 내부에서 물리 피해 감소량과 마법 피해 감소량이 각각 60% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 10
        },
        "11": {
            "name": "투지:유령선 레벨 3",
            "type": "2",
            "text": "유령선 내부에서 공격력이 90%, 공격 속도가 20%, 이동 속도가 40% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 11
        },
        "12": {
            "name": "선상 만찬 레벨 4",
            "type": "1",
            "text": "5분 동안 선박의 이동 속도를 2.5 노트 증가시킨다.<br>상선에서 판매하는 선상 만찬용 아이템 1개가 필요 하다.",
            "id": 12
        },
        "13": {
            "name": "알뜰 인양꾼 레벨 4",
            "type": "2",
            "text": "보물 인양 시, 소모되는 행운의 기운이 12 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 13
        },
        "14": {
            "name": "급속 발진 레벨 3",
            "type": "1",
            "text": "선박 내구도 400을 소모하여, 자기 주변 최대 4인에게 15 초동안 선박 이동 속도를 5 노트 증가 시킨다.",
            "id": 14
        },
        "15": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 15
        },
        "16": {
            "name": "모래폭풍 내성:강인 레벨 1",
            "type": "2",
            "text": "모래폭풍 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 16
        },
        "17": {
            "name": "탐색:유니콘 레벨 1",
            "type": "1",
            "text": "'모험물: 유니콘'을 발견할 수 있게 된다.",
            "id": 17
        },
        "18": {
            "name": "모래폭풍 내성:보통 레벨 1",
            "type": "2",
            "text": "모래폭풍 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 18
        },
        "19": {
            "name": "특화:무한 동력 레벨 2",
            "type": "2",
            "text": "쾌속운항 사용 시 10% 확률로 쾌속운항 게이지를 200 회복 한다.",
            "id": 19
        },
        "20": {
            "name": "수초 내성:강인 레벨 1",
            "type": "2",
            "text": "수초 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 20
        },
        "21": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 21
        },
        "22": {
            "name": "재물:난파선 레벨 3",
            "type": "2",
            "text": "난파선 내부에서 몬스터 처치로 획득하는 실링이 75% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 22
        },
        "23": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 23
        },
        "24": {
            "name": "순풍 레벨 1",
            "type": "2",
            "text": "일정 거리마다 획득 하는 쾌속운항 게이지 회복량이 5 증가 한다.",
            "id": 24
        },
        "25": {
            "name": "탐색:죽은자의 눈 레벨 1",
            "type": "1",
            "text": "'모험물: 죽은자의 눈'을 발견할 수 있게 된다.",
            "id": 25
        },
        "26": {
            "name": "알뜰 잠수부 레벨 4",
            "type": "2",
            "text": "수중 탐사 시, 소모되는 행운의 기운이 14 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 26
        },
        "27": {
            "name": "전문 갑판원 레벨 2",
            "type": "2",
            "text": "부유물 습득 시, 7% 확률로 보상을 1번 더 획득 한다.",
            "id": 27
        },
        "28": {
            "name": "탐색:헤스티아호 레벨 1",
            "type": "1",
            "text": "'모험물: 헤스티아호'를 발견할 수 있게 된다.",
            "id": 28
        },
        "29": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 29
        },
        "30": {
            "name": "사기 진작 레벨 3",
            "type": "2",
            "text": "부유물을 습득 할 때마다 50의 쾌속운항 게이지를 획득 한다.",
            "id": 30
        },
        "31": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 31
        },
        "32": {
            "name": "탐색:맨드릴 레벨 1",
            "type": "1",
            "text": "'모험물: 맨드릴'을 발견할 수 있게 된다.",
            "id": 32
        },
        "33": {
            "name": "폭풍우 내성:강인 레벨 1",
            "type": "2",
            "text": "폭풍우 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 33
        },
        "34": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 34
        },
        "35": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 35
        },
        "36": {
            "name": "탐색:용과 레벨 1",
            "type": "1",
            "text": "'모험물: 용과'를 발견할 수 있게 된다.",
            "id": 36
        },
        "37": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 37
        },
        "38": {
            "name": "탐색:고대 금화 레벨 1",
            "type": "1",
            "text": "'모험물: 고대 금화'를 발견할 수 있게 된다.",
            "id": 38
        },
        "39": {
            "name": "선상 만찬 레벨 3",
            "type": "1",
            "text": "5분 동안 선박의 이동 속도를 2 노트 증가시킨다.<br>상선에서 판매하는 선상 만찬용 아이템 1개가 필요 하다.",
            "id": 39
        },
        "40": {
            "name": "사기 진작 레벨 2",
            "type": "2",
            "text": "부유물을 습득 할 때마다 40의 쾌속운항 게이지를 획득 한다.",
            "id": 40
        },
        "41": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 41
        },
        "42": {
            "name": "순풍 레벨 2",
            "type": "2",
            "text": "일정 거리마다 획득 하는 쾌속운항 게이지 회복량이 10 증가 한다.",
            "id": 42
        },
        "43": {
            "name": "수중 탐사 레벨 3",
            "type": "1",
            "text": "수중 탐사 포인트에 선원을 잠수시켜 보물을 획득 한다.<br>보라색 수중 탐사 포인트를 공략 할 때 적합하며, 행운의 기운이 있을 때 더 깊은 곳에서 추가 보상을 기대 할 수 있다.",
            "id": 43
        },
        "44": {
            "name": "전문 잠수부 레벨 2",
            "type": "2",
            "text": "수중 탐사 시 잠수 거리가 45 미터 증가 한다.",
            "id": 44
        },
        "45": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 45
        },
        "46": {
            "name": "특화:세이렌 레벨 1",
            "type": "2",
            "text": "쾌속운항 사용 시 25% 확률로 5초 동안 세이렌 해역에 면역 상태가 된다.",
            "id": 46
        },
        "47": {
            "name": "항해술 레벨 3",
            "type": "2",
            "text": "선박 이동 속도가 4 노트 증가한다.",
            "id": 47
        },
        "48": {
            "name": "특화:수초 해역 레벨 1",
            "type": "2",
            "text": "쾌속운항 사용 시 25% 확률로 5초 동안 수초 해역에 면역 상태가 된다.",
            "id": 48
        },
        "49": {
            "name": "탐색:오로라 레벨 1",
            "type": "1",
            "text": "'모험물: 오로라'를 발견할 수 있게 된다.",
            "id": 49
        },
        "50": {
            "name": "재물:난파선 레벨 3",
            "type": "2",
            "text": "난파선 내부에서 몬스터 처치로 획득하는 실링이 75% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 50
        },
        "51": {
            "name": "신속:난파선 레벨 3",
            "type": "2",
            "text": "난파선 내부에서 이동 속도가 20% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 51
        },
        "52": {
            "name": "수중 탐사 레벨 3",
            "type": "1",
            "text": "수중 탐사 포인트에 선원을 잠수시켜 보물을 획득 한다.<br>보라색 수중 탐사 포인트를 공략 할 때 적합하며, 행운의 기운이 있을 때 더 깊은 곳에서 추가 보상을 기대 할 수 있다.",
            "id": 52
        },
        "53": {
            "name": "특화:무한 동력 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 10% 확률로 쾌속운항 게이지를 300 회복 한다.",
            "id": 53
        },
        "54": {
            "name": "암초 폭파 레벨 4",
            "type": "1",
            "text": "암초에 걸린 난파선 주변에 폭탄을 설치 한다.<br>행운의 기운을 65 소모하며, 기운이 부족할 경우 폭탄의 성공 확률이 대폭 하락하여 난파선 까지 폭파 될 수 있다.<br>스킬 레벨이 높을 수록 난파선 내부에서 좋은 보상을 기대 할 수 있다.",
            "id": 54
        },
        "55": {
            "name": "신속:난파선 레벨 2",
            "type": "2",
            "text": "난파선 내부에서 이동 속도가 15% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 55
        },
        "56": {
            "name": "망자 내성:보통 레벨 1",
            "type": "2",
            "text": "망자 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 56
        },
        "57": {
            "name": "급속 발진 레벨 3",
            "type": "1",
            "text": "선박 내구도 400을 소모하여, 자기 주변 최대 4인에게 15 초동안 선박 이동 속도를 5 노트 증가 시킨다.",
            "id": 57
        },
        "58": {
            "name": "수중 탐사 레벨 4",
            "type": "1",
            "text": "수중 탐사 포인트에 선원을 잠수시켜 보물을 획득 한다.<br>주황색 수중 탐사 포인트를 공략 할 때 적합하며, 행운의 기운이 있을 때 더 깊은 곳에서 추가 보상을 기대 할 수 있다.",
            "id": 58
        },
        "59": {
            "name": "전문 잠수부 레벨 3",
            "type": "2",
            "text": "수중 탐사 시 잠수 거리가 55 미터 증가 한다.",
            "id": 59
        },
        "60": {
            "name": "항해술 레벨 1",
            "type": "2",
            "text": "선박 이동 속도가 2 노트 증가한다.",
            "id": 60
        },
        "61": {
            "name": "조범술 레벨 1",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 1 노트 증가한다.",
            "id": 61
        },
        "62": {
            "name": "알뜰 어선장 레벨 3",
            "type": "2",
            "text": "황금 어장에서 끌망 사용 시, 소모되는 행운의 기운이 4 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 62
        },
        "63": {
            "name": "탐색:불타는 얼음 레벨 1",
            "type": "1",
            "text": "'모험물: 불타는 얼음'을 발견할 수 있게 된다.",
            "id": 63
        },
        "64": {
            "name": "암초 폭파 레벨 4",
            "type": "1",
            "text": "암초에 걸린 난파선 주변에 폭탄을 설치 한다.<br>행운의 기운을 65 소모하며, 기운이 부족할 경우 폭탄의 성공 확률이 대폭 하락하여 난파선 까지 폭파 될 수 있다.<br>스킬 레벨이 높을 수록 난파선 내부에서 좋은 보상을 기대 할 수 있다.",
            "id": 64
        },
        "65": {
            "name": "신속:난파선 레벨 4",
            "type": "2",
            "text": "난파선 내부에서 이동 속도가 25% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 65
        },
        "66": {
            "name": "수중 탐사 레벨 3",
            "type": "1",
            "text": "수중 탐사 포인트에 선원을 잠수시켜 보물을 획득 한다.<br>보라색 수중 탐사 포인트를 공략 할 때 적합하며, 행운의 기운이 있을 때 더 깊은 곳에서 추가 보상을 기대 할 수 있다.",
            "id": 66
        },
        "67": {
            "name": "조범술 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 2 노트 증가한다.",
            "id": 67
        },
        "68": {
            "name": "특화:폭풍우 레벨 1",
            "type": "2",
            "text": "쾌속운항 사용 시 25% 확률로 5초 동안 폭풍우 해역에 면역 상태가 된다.",
            "id": 68
        },
        "69": {
            "name": "작살 던지기 레벨 3",
            "type": "1",
            "text": "해양 생물에게 작살을 던져 23 만큼의 피해를 입힌다.<br>처치 시 기여도에 따라 부산물을 획득 한다. 행운의 기운이 있을 때 부산물에서 더 좋은 보상을 기대 할 수 있다.",
            "id": 69
        },
        "70": {
            "name": "순풍 레벨 3",
            "type": "2",
            "text": "일정 거리마다 획득하는 쾌속운항 게이지 회복량이 15 증가 한다.",
            "id": 70
        },
        "71": {
            "name": "특화:무한 동력 레벨 3",
            "type": "2",
            "text": "쾌속운항 사용 시 10% 확률로 쾌속운항 게이지를 300 회복 한다.",
            "id": 71
        },
        "72": {
            "name": "암초 폭파 레벨 3",
            "type": "1",
            "text": "암초에 걸린 난파선 주변에 폭탄을 설치 한다.<br>행운의 기운을 60 소모하며, 기운이 부족할 경우 폭탄의 성공 확률이 대폭 하락하여 난파선 까지 폭파 될 수 있다.<br>스킬 레벨이 높을 수록 난파선 내부에서 좋은 보상을 기대 할 수 있다.",
            "id": 72
        },
        "73": {
            "name": "폭풍우 내성:보통 레벨 1",
            "type": "2",
            "text": "폭풍우 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 73
        },
        "74": {
            "name": "수초 내성:보통 레벨 1",
            "type": "2",
            "text": "수초 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 74
        },
        "75": {
            "name": "투혼:유령선 레벨 3",
            "type": "2",
            "text": "유령선 내부에서 물리 피해 감소량과 마법 피해 감소량이 각각 45% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 75
        },
        "76": {
            "name": "투지:유령선 레벨 3",
            "type": "2",
            "text": "유령선 내부에서 공격력이 90%, 공격 속도가 20%, 이동 속도가 40% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 76
        },
        "77": {
            "name": "보물 인양 레벨 3",
            "type": "1",
            "text": "보물 인양 포인트에서 크레인을 사용해 보물을 획득한다.<br>보라색 보물 인양 포인트를 공략 할 때 적합하다.<br>행운의 기운이 있을 때 대성공 확률이 발생하여 더 좋은 보상을 기대 할 수 있다.",
            "id": 77
        },
        "78": {
            "name": "끌망 레벨 3",
            "type": "3",
            "text": "끌망을 펼친 채 황금어장을 지나 물고기자원을 획득한다.<br>끌망이 펼쳐진 동안 이동 속도가 65% 수준으로 감소 하지만, 일정 거리마다 행운의 기운을 10 소모해 추가적인 물고기 자원을 얻을 수 있다.<br>보라색 황금 어장 포인트를 공략할 때 적합하며,<br>주황색 이상의 포인트에서는 행운의 기운을 더 소모해도 온전한 보상을 얻을 수 없다.",
            "id": 78
        },
        "79": {
            "name": "전문 어선장 레벨 2",
            "type": "2",
            "text": "황금 어장에서 대성공 확률이 7% 증가 한다.<br>단, 행운의 기운 부족 시에는 효과가 적용 되지 않는다.",
            "id": 79
        },
        "80": {
            "name": "보물 인양 레벨 4",
            "type": "1",
            "text": "보물 인양 포인트에서 크레인을 사용해 보물을 획득한다.<br>주황색 보물 인양 포인트를 공략 할 때 적합하다.<br>행운의 기운이 있을 때 대성공 확률이 발생하여 더 좋은 보상을 기대 할 수 있다.",
            "id": 80
        },
        "81": {
            "name": "순풍 레벨 3",
            "type": "2",
            "text": "일정 거리마다 획득하는 쾌속운항 게이지 회복량이 15 증가 한다.",
            "id": 81
        },
        "82": {
            "name": "항해술 레벨 2",
            "type": "2",
            "text": "선박 이동 속도가 3 노트 증가한다.",
            "id": 82
        },
        "83": {
            "name": "자동 습득 레벨 1",
            "type": "2",
            "text": "습득 거리 이내의 부유물을 자동으로 습득한다.",
            "id": 83
        },
        "84": {
            "name": "전문 갑판원 레벨 3",
            "type": "2",
            "text": "부유물 습득 시, 10% 확률로 보상을 1번 더 획득 한다.",
            "id": 84
        },
        "85": {
            "name": "알뜰 어선장 레벨 3",
            "type": "2",
            "text": "황금 어장에서 끌망 사용 시, 소모되는 행운의 기운이 4 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 85
        },
        "86": {
            "name": "알뜰 인양꾼 레벨 3",
            "type": "2",
            "text": "보물 인양 시, 소모되는 행운의 기운이 6 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 86
        },
        "87": {
            "name": "탐색:난파선 잔해 레벨 1",
            "type": "1",
            "text": "'모험물: 난파선 잔해'를 발견할 수 있게 된다.",
            "id": 87
        },
        "88": {
            "name": "전문 작살수 레벨 2",
            "type": "2",
            "text": "작살 피해량이 추가로 2 만큼 증가 한다.",
            "id": 88
        },
        "89": {
            "name": "탐색:세이렌 레벨 1",
            "type": "1",
            "text": "'모험물: 세이렌'을 발견할 수 있게 된다.",
            "id": 89
        },
        "90": {
            "name": "모래폭풍 내성:보통 레벨 1",
            "type": "2",
            "text": "모래폭풍 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 90
        },
        "91": {
            "name": "탐색:라마 레벨 1",
            "type": "1",
            "text": "'모험물: 라마'를 발견할 수 있게 된다.",
            "id": 91
        },
        "92": {
            "name": "선상 만찬 레벨 3",
            "type": "1",
            "text": "5분동안 선박의 이동 속도를 2 노트 증가 시킨다.<br>상선에서 판매하는 선상 만찬용 아이템 1개가 필요 하다.",
            "id": 92
        },
        "93": {
            "name": "조범술 레벨 2",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 1.5 노트 증가한다.",
            "id": 93
        },
        "94": {
            "name": "세이렌 내성:보통 레벨 1",
            "type": "2",
            "text": "세이렌 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 일 경우 효과가 없다.",
            "id": 94
        },
        "95": {
            "name": "탐색:고대 지팡이 레벨 1",
            "type": "1",
            "text": "'모험물: 고대 지팡이'를 발견할 수 있게 된다.",
            "id": 95
        },
        "96": {
            "name": "망자 내성:보통 레벨 1",
            "type": "2",
            "text": "망자 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 96
        },
        "97": {
            "name": "탐색:의문의 상자 레벨 1",
            "type": "1",
            "text": "'모험물: 의문의 상자'를 발견할 수 있게 된다.",
            "id": 97
        },
        "98": {
            "name": "수초 내성:강인 레벨 1",
            "type": "2",
            "text": "수초 해역에 대한 내성을 강인 으로 바꿔 준다.<br>이미 강인 일 경우 효과가 없다.",
            "id": 98
        },
        "99": {
            "name": "조범술 레벨 2",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 1.5 노트 증가한다.",
            "id": 99
        },
        "100": {
            "name": "항해술 레벨 2",
            "type": "2",
            "text": "선박 이동 속도가 3 노트 증가한다.",
            "id": 100
        },
        "101": {
            "name": "탐색:신의 창 레벨 1",
            "type": "1",
            "text": "'모험물: 신의 창'을 발견할 수 있게 된다.",
            "id": 101
        },
        "102": {
            "name": "작살 던지기 레벨 3",
            "type": "1",
            "text": "해양 생물에게 작살을 던져 23 만큼의 피해를 입힌다.<br>처치 시 기여도에 따라 부산물을 획득 한다. 행운의 기운이 있을 때 부산물에서 더 좋은 보상을 기대 할 수 있다.",
            "id": 102
        },
        "103": {
            "name": "신경독 레벨 1",
            "type": "2",
            "text": "작살로 해양 생물을 맞추면, 대상의 이동 속도를 5% 확률로 5초간 30% 느리게 한다.",
            "id": 103
        },
        "104": {
            "name": "작살 던지기 레벨 4",
            "type": "1",
            "text": "해양 생물에게 작살을 던져 30 만큼의 피해를 입힌다.<br>처치 시 기여도에 따라 부산물을 획득 한다. 행운의 기운이 있을 때 부산물에서 더 좋은 보상을 기대 할 수 있다.",
            "id": 104
        },
        "105": {
            "name": "신경독 레벨 2",
            "type": "2",
            "text": "작살로 해양 생물을 맞추면, 대상의 이동 속도를 10% 확률로 5초간 30% 느리게 한다.",
            "id": 105
        },
        "106": {
            "name": "전문 작살수 레벨 3",
            "type": "2",
            "text": "작살 피해량이 추가로 3 만큼 증가 한다.",
            "id": 106
        },
        "107": {
            "name": "탐색:유령 가오리 레벨 1",
            "type": "1",
            "text": "'모험물: 유령 가오리'를 발견할 수 있게 된다.",
            "id": 107
        },
        "108": {
            "name": "순풍 레벨 3",
            "type": "2",
            "text": "일정 거리마다 획득하는 쾌속운항 게이지 회복량이 15 증가 한다.",
            "id": 108
        },
        "109": {
            "name": "탐색:스타더스트 레벨 1",
            "type": "1",
            "text": "'모험물: 스타더스트'를 발견할 수 있게 된다.",
            "id": 109
        },
        "110": {
            "name": "보물 인양 레벨 3",
            "type": "1",
            "text": "보물 인양 포인트에서 크레인을 사용해 보물을 획득한다.<br>보라색 보물 인양 포인트를 공략 할 때 적합하다.<br>행운의 기운이 있을 때 대성공 확률이 발생하여 더 좋은 보상을 기대 할 수 있다.",
            "id": 110
        },
        "111": {
            "name": "항해술 레벨 2",
            "type": "2",
            "text": "선박 이동 속도가 3 노트 증가한다.",
            "id": 111
        },
        "112": {
            "name": "선상 만찬 레벨 2",
            "type": "1",
            "text": "5분동안 선박의 이동 속도를 1.5 노트 증가 시킨다.<br>상선에서 판매하는 선상 만찬용 아이템 1개가 필요 하다.",
            "id": 112
        },
        "113": {
            "name": "전문 작살수 레벨 1",
            "type": "2",
            "text": "작살 피해량이 추가로 1 만큼 증가 한다.",
            "id": 113
        },
        "114": {
            "name": "사기 진작 레벨 3",
            "type": "2",
            "text": "부유물을 습득 할 때마다 50의 쾌속운항 게이지를 획득 한다.",
            "id": 114
        },
        "115": {
            "name": "탐색:침묵하는 섬 레벨 1",
            "type": "1",
            "text": "'모험물: 침묵하는 섬'을 발견할 수 있게 된다.",
            "id": 115
        },
        "116": {
            "name": "폭풍우 내성:보통 레벨 1",
            "type": "2",
            "text": "폭풍우 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 116
        },
        "117": {
            "name": "탐색:오색앵무새 레벨 1",
            "type": "1",
            "text": "'모험물: 오색앵무새'를 발견할 수 있게 된다.",
            "id": 117
        },
        "118": {
            "name": "급속 발진 레벨 3",
            "type": "1",
            "text": "선박 내구도 400을 소모하여, 자기 주변 최대 4인에게 15 초동안 선박 이동 속도를 5 노트 증가 시킨다.",
            "id": 118
        },
        "119": {
            "name": "끌망 레벨 3",
            "type": "3",
            "text": "끌망을 펼친 채 황금어장을 지나 물고기자원을 획득한다.<br>끌망이 펼쳐진 동안 이동 속도가 65% 수준으로 감소 하지만, 일정 거리마다 행운의 기운을 10 소모해 추가적인 물고기 자원을 얻을 수 있다.<br>보라색 황금 어장 포인트를 공략할 때 적합하며,<br>주황색 이상의 포인트에서는 행운의 기운을 더 소모해도 온전한 보상을 얻을 수 없다.",
            "id": 119
        },
        "120": {
            "name": "알뜰 잠수부 레벨 3",
            "type": "2",
            "text": "수중 탐사 시, 소모되는 행운의 기운이 6 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 120
        },
        "121": {
            "name": "탐색:크래바스 레벨 1",
            "type": "1",
            "text": "'모험물: 크래바스'를 발견할 수 있게 된다.",
            "id": 121
        },
        "122": {
            "name": "전문 갑판원 레벨 3",
            "type": "2",
            "text": "부유물 습득 시, 10% 확률로 보상을 1번 더 획득 한다.",
            "id": 122
        },
        "123": {
            "name": "탐색:반달 가면 레벨 1",
            "type": "1",
            "text": "'모험물: 반달 가면'을 발견할 수 있게 된다.",
            "id": 123
        },
        "124": {
            "name": "모래폭풍 내성:보통 레벨 1",
            "type": "2",
            "text": "모래폭풍 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 124
        },
        "125": {
            "name": "순풍 레벨 1",
            "type": "2",
            "text": "일정 거리마다 획득 하는 쾌속운항 게이지 회복량이  증가 한다.",
            "id": 125
        },
        "126": {
            "name": "가벼운 그물 레벨 2",
            "type": "2",
            "text": "끌망이 활성화 될때 발생하는 이동 속도 감소 패널티를 20% 만큼 경감 시킨다.",
            "id": 126
        },
        "127": {
            "name": "알뜰 어선장 레벨 3",
            "type": "2",
            "text": "황금 어장에서 끌망 사용 시, 소모되는 행운의 기운이 4 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 127
        },
        "128": {
            "name": "선상 만찬 레벨 3",
            "type": "1",
            "text": "5분동안 선박의 이동 속도를 2 노트 증가 시킨다.<br>상선에서 판매하는 선상 만찬용 아이템 1개가 필요 하다.",
            "id": 128
        },
        "129": {
            "name": "한파 내성:보통 레벨 1",
            "type": "2",
            "text": "한파 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 129
        },
        "130": {
            "name": "전문 인양꾼 레벨 3",
            "type": "2",
            "text": "보물인양 시 대성공 확률이 10% 증가 한다.<br>단, 행운의 기운 부족 시에는 효과가 적용 되지 않는다.",
            "id": 130
        },
        "131": {
            "name": "알뜰 인양꾼 레벨 3",
            "type": "2",
            "text": "보물 인양 시, 소모되는 행운의 기운이 6 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 131
        },
        "132": {
            "name": "암초 폭파 레벨 3",
            "type": "1",
            "text": "암초에 걸린 난파선 주변에 폭탄을 설치 한다.<br>행운의 기운을 60 소모하며, 기운이 부족할 경우 폭탄의 성공 확률이 대폭 하락하여 난파선 까지 폭파 될 수 있다.<br>스킬 레벨이 높을 수록 난파선 내부에서 좋은 보상을 기대 할 수 있다.",
            "id": 132
        },
        "133": {
            "name": "한파 내성:보통 레벨 1",
            "type": "2",
            "text": "한파 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 133
        },
        "134": {
            "name": "알뜰 잠수부 레벨 3",
            "type": "2",
            "text": "수중 탐사 시, 소모되는 행운의 기운이 6 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 134
        },
        "135": {
            "name": "순풍 레벨 1",
            "type": "2",
            "text": "일정 거리마다 획득 하는 쾌속운항 게이지 회복량이  증가 한다.",
            "id": 135
        },
        "136": {
            "name": "끌망 레벨 3",
            "type": "3",
            "text": "끌망을 펼친 채 황금어장을 지나 물고기자원을 획득한다.<br>끌망이 펼쳐진 동안 이동 속도가 65% 수준으로 감소 하지만, 일정 거리마다 행운의 기운을 10 소모해 추가적인 물고기 자원을 얻을 수 있다.<br>보라색 황금 어장 포인트를 공략할 때 적합하며,<br>주황색 이상의 포인트에서는 행운의 기운을 더 소모해도 온전한 보상을 얻을 수 없다.",
            "id": 136
        },
        "137": {
            "name": "가벼운 그물 레벨 3",
            "type": "2",
            "text": "끌망이 활성화 될때 발생하는 이동 속도 감소 패널티를 25% 만큼 경감 시킨다.",
            "id": 137
        },
        "138": {
            "name": "열혈 잠수부 레벨 1",
            "type": "2",
            "text": "수중 탐사 시, 행운의 기운 소모량이 3배로 늘어나지만, 보상을 2번 획득한다.",
            "id": 138
        },
        "139": {
            "name": "갈고리 레벨 1",
            "type": "2",
            "text": "부유물 습득 거리가 5미터 증가한다.",
            "id": 139
        },
        "140": {
            "name": "열혈 인양꾼 레벨 1",
            "type": "2",
            "text": "보물 인양 시, 행운의 기운 소모량이 3배로 늘어나지만, 보상을 2번 획득 한다.",
            "id": 140
        },
        "141": {
            "name": "갈고리 레벨 1",
            "type": "2",
            "text": "부유물 습득 거리가 5미터 증가한다.",
            "id": 141
        },
        "142": {
            "name": "갈고리 레벨 2",
            "type": "2",
            "text": "부유물 습득 거리가 10미터 증가한다.",
            "id": 142
        },
        "143": {
            "name": "자동 습득 레벨 1",
            "type": "2",
            "text": "습득 거리 이내의 부유물을 자동으로 습득한다.",
            "id": 143
        },
        "144": {
            "name": "급속 발진 레벨 2",
            "type": "1",
            "text": "선박 내구도 450을 소모하여, 자기 주변 최대 4인에게 15 초 동안 선박 이동 속도를 5 노트 증가 시킨다.",
            "id": 144
        },
        "145": {
            "name": "전문 어선장 레벨 2",
            "type": "2",
            "text": "황금 어장에서 대성공 확률이 7% 증가 한다.<br>단, 행운의 기운 부족 시에는 효과가 적용 되지 않는다.",
            "id": 145
        },
        "146": {
            "name": "가벼운 그물 레벨 1",
            "type": "2",
            "text": "끌망이 활성화 될때 발생하는 이동 속도 감소 패널티를 15% 만큼 경감 시킨다.",
            "id": 146
        },
        "147": {
            "name": "선상 만찬 레벨 3",
            "type": "1",
            "text": "5분동안 선박의 이동 속도를 2 노트 증가 시킨다.<br>상선에서 판매하는 선상 만찬용 아이템 1개가 필요 하다.",
            "id": 147
        },
        "148": {
            "name": "탐색:고급 해생물 레벨 1",
            "type": "1",
            "text": "일정 범위 내에서 가장 가까운 고급 해양 생물을 찾는다.<br>목표물을 찾으면 지시선으로 방향과 거리를 표시해 주지만, 목표물이 없을 경우 탐색이 실패 할 수 있다.",
            "id": 148
        },
        "149": {
            "name": "탐색:다이빙 스팟 레벨 1",
            "type": "1",
            "text": "일정 범위 내에서 가장 가까운 수중 탐사 포인트를 찾는다.<br>목표물을 찾으면 지시선으로 방향과 거리를 표시해 주지만, 목표물이 없을 경우 탐색이 실패 할 수 있다.",
            "id": 149
        },
        "150": {
            "name": "항해술 레벨 1",
            "type": "2",
            "text": "선박 이동 속도가 2 노트 증가한다.",
            "id": 150
        },
        "151": {
            "name": "탐색:인양 포인트 레벨 1",
            "type": "1",
            "text": "일정 범위 내에서 가장 가까운 보물 인양 포인트를 찾는다.<br>목표물을 찾으면 지시선으로 방향과 거리를 표시해 주지만, 목표물이 없을 경우 탐색이 실패 할 수 있다.",
            "id": 151
        },
        "152": {
            "name": "탐색:암초 난파선 레벨 1",
            "type": "1",
            "text": "일정 범위 내에서 가장 가까운 암초 난파선을 찾는다.<br>목표물을 찾으면 지시선으로 방향과 거리를 표시해 주지만, 목표물이 없을 경우 탐색이 실패 할 수 있다.",
            "id": 152
        },
        "153": {
            "name": "투혼:유령선 레벨 2",
            "type": "2",
            "text": "유령선 내부에서 물리 피해 감소량과 마법 피해 감소량이 각각 30% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 153
        },
        "154": {
            "name": "투지:유령선 레벨 2",
            "type": "2",
            "text": "유령선 내부에서 공격력이 60% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 154
        },
        "155": {
            "name": "한파 내성:보통 레벨 1",
            "type": "2",
            "text": "한파 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 155
        },
        "156": {
            "name": "탐색:유령 도마뱀 레벨 1",
            "type": "1",
            "text": "'모험물: 유령 도마뱀'을 발견할 수 있게 된다.",
            "id": 156
        },
        "157": {
            "name": "조범술 레벨 1",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 1 노트 증가한다.",
            "id": 157
        },
        "158": {
            "name": "탐색:바람의 석판 레벨 1",
            "type": "1",
            "text": "'모험물: 바람의 석판'을 발견할 수 있게 된다.",
            "id": 158
        },
        "159": {
            "name": "신경독 레벨 3",
            "type": "2",
            "text": "작살로 해양 생물을 맞추면, 대상의 이동 속도를 15% 확률로 5초간 30% 느리게 한다.",
            "id": 159
        },
        "160": {
            "name": "순풍 레벨 2",
            "type": "2",
            "text": "일정 거리마다 획득하는 쾌속운항 게이지 회복량이 10 증가 한다.",
            "id": 160
        },
        "161": {
            "name": "탐색:스타후르츠 레벨 1",
            "type": "1",
            "text": "'모험물: 스타후르츠'를 발견할 수 있게 된다.",
            "id": 161
        },
        "162": {
            "name": "열혈 어선장 레벨 1",
            "type": "2",
            "text": "황금 어장에서 끌망 사용 시, 행운의 기운 소모량이 3배로 늘어나지만, 보상을 2번 획득한다.",
            "id": 162
        },
        "163": {
            "name": "갈고리 레벨 1",
            "type": "2",
            "text": "부유물 습득 거리가 5미터 증가한다.",
            "id": 163
        },
        "164": {
            "name": "알뜰 어선장 레벨 2",
            "type": "2",
            "text": "황금 어장에서 끌망 사용 시, 소모되는 행운의 기운이 2 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 164
        },
        "165": {
            "name": "탐색:마법진 레벨 1",
            "type": "1",
            "text": "'모험물: 마법진'을 발견할 수 있게 된다.",
            "id": 165
        },
        "166": {
            "name": "수중 탐사 레벨 2",
            "type": "1",
            "text": "수중 탐사 포인트에 선원을 잠수시켜 보물을 획득 한다.<br>파랑색 수중 탐사 포인트를 공략 할 때 적합하며, 행운의 기운이 있을 때 더 깊은 곳에서 추가 보상을 기대 할 수 있다.",
            "id": 166
        },
        "167": {
            "name": "선상 만찬 레벨 2",
            "type": "1",
            "text": "5분동안 선박의 이동 속도를 1.5 노트 증가 시킨다.<br>상선에서 판매하는 선상 만찬용 아이템 1개가 필요 하다.",
            "id": 167
        },
        "168": {
            "name": "작살 던지기 레벨 2",
            "type": "1",
            "text": "해양 생물에게 작살을 던져 18 만큼의 피해를 입힌다.<br>처치 시 기여도에 따라 부산물을 획득 한다. 행운의 기운이 있을 때 부산물에서 더 좋은 보상을 기대 할 수 있다.",
            "id": 168
        },
        "169": {
            "name": "암초 폭파 레벨 2",
            "type": "1",
            "text": "암초에 걸린 난파선 주변에 폭탄을 설치 한다.<br>행운의 기운을 55 소모하며, 기운이 부족할 경우 폭탄의 성공 확률이 대폭 하락하여 난파선 까지 폭파 될 수 있다.<br>스킬 레벨이 높을 수록 난파선 내부에서 좋은 보상을 기대 할 수 있다.",
            "id": 169
        },
        "170": {
            "name": "보물 인양 레벨 2",
            "type": "1",
            "text": "보물 인양 포인트에서 크레인을 사용해 보물을 획득한다.<br>파랑색 보물 인양 포인트를 공략 할 때 적합하다.<br>행운의 기운이 있을 때 대성공 확률이 발생하여 더 좋은 보상을 기대 할 수 있다.",
            "id": 170
        },
        "171": {
            "name": "전문 인양꾼 레벨 2",
            "type": "2",
            "text": "보물인양 시 대성공 확률이 7% 증가 한다.<br>단, 행운의 기운 부족 시에는 효과가 적용 되지 않는다.",
            "id": 171
        },
        "172": {
            "name": "탐색:잊혀진 호수 레벨 1",
            "type": "1",
            "text": "'모험물: 잊혀진 호수'를 발견할 수 있게 된다.",
            "id": 172
        },
        "173": {
            "name": "투혼:유령선 레벨 1",
            "type": "2",
            "text": "유령선 내부에서 물리 피해 감소량과 마법 피해 감소량이 각각 15% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 173
        },
        "174": {
            "name": "투지:유령선 레벨 1",
            "type": "2",
            "text": "유령선 내부에서 공격력이 30% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 174
        },
        "175": {
            "name": "전문 잠수부 레벨 2",
            "type": "2",
            "text": "수중 탐사 시 잠수 거리가 45 미터 증가 한다.",
            "id": 175
        },
        "176": {
            "name": "탐색:붉은낙타 레벨 1",
            "type": "1",
            "text": "'모험물: 붉은낙타'를 발견할 수 있게 된다.",
            "id": 176
        },
        "177": {
            "name": "알뜰 인양꾼 레벨 2",
            "type": "2",
            "text": "보물 인양 시, 소모되는 행운의 기운이 2 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 177
        },
        "178": {
            "name": "탐색:극지 맘모스 레벨 1",
            "type": "1",
            "text": "'모험물: 극지 맘모스'를 발견할 수 있게 된다.",
            "id": 178
        },
        "179": {
            "name": "신경독 레벨 2",
            "type": "2",
            "text": "작살로 해양 생물을 맞추면, 대상의 이동 속도를 10% 확률로 5초간 30% 느리게 한다.",
            "id": 179
        },
        "180": {
            "name": "순풍 레벨 1",
            "type": "2",
            "text": "일정 거리마다 획득 하는 쾌속운항 게이지 회복량이  증가 한다.",
            "id": 180
        },
        "181": {
            "name": "사기 진작 레벨 2",
            "type": "2",
            "text": "부유물을 습득 할 때마다 40의 쾌속운항 게이지를 획득 한다.",
            "id": 181
        },
        "182": {
            "name": "탐색:바다꽃 레벨 1",
            "type": "1",
            "text": "'모험물: 바다꽃'을 발견할 수 있게 된다.",
            "id": 182
        },
        "183": {
            "name": "급속 발진 레벨 1",
            "type": "1",
            "text": "선박 내구도 500을 소모하여, 자기 주변 최대 4인에게 15 초 동안 선박 이동 속도를 5 노트 증가 시킨다.",
            "id": 183
        },
        "184": {
            "name": "끌망 레벨 2",
            "type": "3",
            "text": "끌망을 펼친 채 황금어장을 지나 물고기자원을 획득한다.<br>끌망이 펼쳐진 동안 이동 속도가 65% 수준으로 감소 하지만, 일정 거리마다 행운의 기운을 10 소모해 추가적인 물고기 자원을 얻을 수 있다.<br>파랑색 황금 어장 포인트를 공략할 때 적합하며,<br>보라색 이상의 포인트에서는 행운의 기운을 더 소모해도 온전한 보상을 얻을 수 없다.",
            "id": 184
        },
        "185": {
            "name": "알뜰 잠수부 레벨 2",
            "type": "2",
            "text": "수중 탐사 시, 소모되는 행운의 기운이 3 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 185
        },
        "186": {
            "name": "탐색:달의 탑 레벨 1",
            "type": "1",
            "text": "'모험물 달의 탑'을 발견할 수 있게 된다.",
            "id": 186
        },
        "187": {
            "name": "전문 어선장 레벨 2",
            "type": "2",
            "text": "황금 어장에서 대성공 확률이 7% 증가 한다.<br>단, 행운의 기운 부족 시에는 효과가 적용 되지 않는다.",
            "id": 187
        },
        "188": {
            "name": "탐색:남해의 눈 레벨 1",
            "type": "1",
            "text": "'모험물: 남해의 눈'을 발견할 수 있게 된다.",
            "id": 188
        },
        "189": {
            "name": "전문 갑판원 레벨 2",
            "type": "2",
            "text": "부유물 습득 시, 7% 확률로 보상을 1번 더 획득 한다.",
            "id": 189
        },
        "190": {
            "name": "탐색:붉은바다거북 레벨 1",
            "type": "1",
            "text": "'모험물: 붉은바다거북'을 발견할 수 있게 된다.",
            "id": 190
        },
        "191": {
            "name": "알뜰 어선장 레벨 1",
            "type": "2",
            "text": "황금 어장에서 끌망 사용 시, 소모되는 행운의 기운이 1 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 191
        },
        "192": {
            "name": "암초 폭파 레벨 1",
            "type": "1",
            "text": "암초에 걸린 난파선 주변에 폭탄을 설치 한다.<br>행운의 기운을 50 소모하며, 기운이 부족할 경우 폭탄의 성공 확률이 대폭 하락하여 난파선 까지 폭파 될 수 있다.<br>스킬 레벨이 높을 수록 난파선 내부에서 좋은 보상을 기대 할 수 있다.",
            "id": 192
        },
        "193": {
            "name": "재물:난파선 레벨 1",
            "type": "2",
            "text": "난파선 내부에서 몬스터 처치로 획득하는 실링이 25% 증가 한다.<br>해당 효과는 최대 20분간 유지 된다.",
            "id": 193
        },
        "194": {
            "name": "전문 인양꾼 레벨 1",
            "type": "2",
            "text": "보물인양 시 대성공 확률이 5% 증가 한다.<br>단, 행운의 기운 부족 시에는 효과가 적용 되지 않는다.",
            "id": 194
        },
        "195": {
            "name": "탐색:고인돌 레벨 1",
            "type": "1",
            "text": "'모험물: 고인돌'을 발견할 수 있게 된다.",
            "id": 195
        },
        "196": {
            "name": "전문 잠수부 레벨 1",
            "type": "2",
            "text": "수중 탐사 시 잠수 거리가 35 미터 증가 한다.",
            "id": 196
        },
        "197": {
            "name": "전문 잠수부 레벨 1",
            "type": "2",
            "text": "수중 탐사 시 잠수 거리가 35 미터 증가 한다.",
            "id": 197
        },
        "198": {
            "name": "탐색:소용돌이 레벨 1",
            "type": "1",
            "text": "'모험물: 소용돌이'를 발견할 수 있게 된다.",
            "id": 198
        },
        "199": {
            "name": "알뜰 인양꾼 레벨 1",
            "type": "2",
            "text": "보물 인양 시, 소모되는 행운의 기운이 1 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 199
        },
        "200": {
            "name": "조범술 레벨 1",
            "type": "2",
            "text": "쾌속운항 사용 시 이동 속도가 1 노트 증가한다.",
            "id": 200
        },
        "201": {
            "name": "전문 작살수 레벨 1",
            "type": "2",
            "text": "작살 피해량이 추가로 1 만큼 증가 한다.",
            "id": 201
        },
        "202": {
            "name": "탐색:참돌고래 레벨 1",
            "type": "1",
            "text": "'모험물: 참돌고래'를 발견할 수 있게 된다.",
            "id": 202
        },
        "203": {
            "name": "수초 내성:보통 레벨 1",
            "type": "2",
            "text": "수초 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 203
        },
        "204": {
            "name": "탐색:토토이끼 배 레벨 1",
            "type": "1",
            "text": "'모험물: 토토이끼 배'를 발견할 수 있게 된다.",
            "id": 204
        },
        "205": {
            "name": "수초 내성:보통 레벨 1",
            "type": "2",
            "text": "수초 해역에 대한 내성을 보통 으로 바꿔 준다.<br>이미 보통 이상일 경우 효과가 없다.",
            "id": 205
        },
        "206": {
            "name": "탐색:기에나 석상 레벨 1",
            "type": "1",
            "text": "'모험물: 기에나 석상'을 발견할 수 있게 된다.",
            "id": 206
        },
        "207": {
            "name": "알뜰 잠수부 레벨 1",
            "type": "2",
            "text": "수중 탐사 시, 소모되는 행운의 기운이 1 감소한다.<br>단, 해당 수치는 기본 소모량의 50%를 넘지 않는다.",
            "id": 207
        },
        "208": {
            "name": "전문 어선장 레벨 1",
            "type": "2",
            "text": "황금 어장에서 대성공 확률이 5% 증가 한다.<br>단, 행운의 기운 부족 시에는 효과가 적용 되지 않는다.",
            "id": 208
        },
        "209": {
            "name": "탐색:북해의 눈 레벨 1",
            "type": "1",
            "text": "'모험물: 북해의 눈'을 발견할 수 있게 된다.",
            "id": 209
        },
        "210": {
            "name": "전문 갑판원 레벨 1",
            "type": "2",
            "text": "부유물 습득 시, 5% 확률로 보상을 1번 더 획득 한다.",
            "id": 210
        },
        "211": {
            "name": "탐색:모코코 버섯 레벨 1",
            "type": "1",
            "text": "'모험물: 모코코 버섯'을 발견할 수 있게 된다.",
            "id": 211
        }
    };

}());