export function isDesktop(): boolean {
    // Chrome Desktop
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36

    // Mobile Safari - Request Desktop
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15

    // Mobile Safari
    // Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1
    const userAgent = window.navigator.userAgent;

    if (userAgent.includes("iPhone")) {
        return false;
    }

    return true
}

export function disableMobile(): void {
    document.getElementsByTagName('meta')['viewport'].content = 'min-width: 980px;';
}
