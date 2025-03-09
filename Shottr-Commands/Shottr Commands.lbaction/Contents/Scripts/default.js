// LaunchBar Action Script

// Icons from: https://github.com/raycast/extensions/tree/main/extensions/shottr
function run() {
    LaunchBar.debugLog('running shottr command');
    return [
        {
            title: 'show',
            subtitle: 'show Shottr',
            url: 'shottr://show',
            icon: 'cc.ffitch.shottr'
        },
        // TODO: Add `then` parameter to the url
        {
            title: 'capture fullscreen',
            subtitle: 'takes a fullscreen screenshot',
            url: 'shottr://grab/fullscreen',
            icon: 'grab-fullscreen.png'
        },
        {
            title: 'capture area',
            subtitle: 'takes an area screenshot',
            url: 'shottr://grab/area',
            icon: 'grab-area.png'
        },
        {
            title: 'repeat capture',
            subtitle: 'repeats area screenshot in the same location',
            url: 'shottr://grab/repeat',
            icon: 'grab-area.png'
        },
        {
            title: 'capture window',
            subtitle: 'takes a window screenshot',
            url: 'shottr://grab/window',
            icon: 'grab-window.png'
        },
        {
            title: 'scrolling capture',
            subtitle: 'takes a scrolling capture',
            url: 'shottr://grab/scrolling',
            icon: 'grab-scrolling.png'
        },
        {
            title: 'reverse scrolling capture',
            subtitle: 'takes a reverse scrolling capture (scrolling up)',
            url: 'shottr://grab/scrolling/reverse',
            icon: 'grab-scrolling-reverse.png'
        },
        {
            title: 'delayed capture (5s)',
            subtitle: 'takes a screenshot with a 5 seconds delay',
            label: 'Press Spacebar to change delay time',
            url: 'shottr://grab/delayed=5',
            icon: 'grab-delayed.png'
        },
        {
            title: 'add capture',
            subtitle: 'adds a capture to the current capture group',
            url: 'shottr://grab/append',
            icon: 'grab-append.png'
        },
        {
            title: 'ocr',
            subtitle: 'initiates text recognition command',
            url: 'shottr://ocr',
            icon: 'grab-ocr.png'
        },
        {
            title: 'edit clipboard image',
            subtitle: 'loads image from the clipboard',
            url: 'shottr://load/clipboard',
            icon: 'load-clipboard.png'
        },
        {
            title: 'shottr cloud',
            subtitle: 'opens a web page that allows you to review and manage your uploads to Shottr Cloud',
            url: 'shottr://uploads',
            icon: 'uploads.png'
        },
        {
            title: 'settings',
            subtitle: 'opens up app preferences',
            url: 'shottr://settings',
            icon: 'settings.png'
        },
    ]
}