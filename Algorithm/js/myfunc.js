function myFunc() {
    let 배포리스트 = [
        // 황민욱
        'http://jira.duzon.com:8080/browse/HELP-167381',
        // 조정우
        'http://jira.duzon.com:8080/browse/HELP-168087',
        // 심창현
        'http://jira.duzon.com:8080/browse/HELP-168196',
        'http://jira.duzon.com:8080/browse/HELP-168197',
        // 염희수
        'http://jira.duzon.com:8080/browse/HELP-168226',
        // 김정인
        'http://jira.duzon.com:8080/browse/HELP-167969',
        'http://jira.duzon.com:8080/browse/HELP-168260',
        'http://jira.duzon.com:8080/browse/HELP-167830',
        // 오원준
        'http://jira.duzon.com:8080/browse/HELP-167971',
        // 김휘진
        'http://jira.duzon.com:8080/browse/HELP-168192',
        'http://jira.duzon.com:8080/browse/HELP-168193',
        'http://jira.duzon.com:8080/browse/HELP-168230',
        // 강지은
        'http://jira.duzon.com:8080/browse/HELP-167520',
        // 추문영
        'http://jira.duzon.com:8080/browse/HELP-168261',
        // 신종진
        'http://jira.duzon.com:8080/browse/HELP-168216',
        'http://jira.duzon.com:8080/browse/HELP-168262',
        'http://jira.duzon.com:8080/browse/HELP-168276',
        // 박도현
        'http://jira.duzon.com:8080/browse/HELP-168023',
    ];

    let returnLIST = [];


    for (let i = 0; i < 배포리스트.length; i++) {
        returnLIST.push(배포리스트[i].split('/')[4]);
    }

    console.log('지라 갯수 = ', 배포리스트.length);
    console.log('지라 추가 = ', returnLIST.join(','));

}


console.log(myFunc());