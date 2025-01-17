function getHTMLRegisterConfirm({
    full_name,
    otp,
}){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                .root {
                    width: 500px;
                    background-color: cyan;
                    margin: 0 auto;
                    padding: 20px;
                    border-radius: 12px;
                }

                .btn_confirm {
                    background-color: yellow;
                    margin: 0 auto;
                    width: fit-content;
                    border-radius: 12px;
                    padding: 16px;
                }
            </style>
        </head>
        <body>
            <div class="root">
                <h1>Chúc mừng bạn ${full_name} đăng ký tài khoản thành công</h1>
                <p>
                    Để xác nhận tài khoản, nhập mã OTP: ${otp}
                </p>
                <p class="btn_confirm">
                    Xác nhận ngay tại đây
                </p>
                <div class="contact">
                    <h1>Liên hệ</h1>
                    <a href="https://www.facebook.com/duongwebapp22">Facebook</a>
                </div>
            </div>
        </body>
        </html>
    `
}

module.exports = getHTMLRegisterConfirm;