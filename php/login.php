<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NAVIGATION</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="header.css" />
</head>

<body>
    <nav>
        <div class="logo">
            <h4>The Nav</h4>
        </div>
        <!-- 메뉴 안에 나오는 글 -->
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Ya Caramba!</a></li>
        </ul>
        <!-- 줄 새개 -->
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    <script src="buguer.js"></script>

    <!--카카오 로그인-->
    <a href="javascript:kakaoLogin();"><img src="./img/kakao_login_large_narrow.png"></a>
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    <script>
        //ef6fb7525a29abe77a30cf5a30beb805
        window.Kakao.init("ef6fb7525a29abe77a30cf5a30beb805");

        function kakaoLogin() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, account_email,',
                success: function(auth0bj) {
                    console.log(auth0bj);
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: res => {
                            const kakao_account = res.kakao_account;
                            console.log(kakao_account);
                        }
                    })
                }
            });
        }
    </script>
</body>

</html>