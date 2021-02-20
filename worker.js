const { start } = require('@nexrender/worker')

const main = async () => {
    const serverHost = 'http://68.183.9.73:3000'
    const serverSecret = '!#?8F9mr#R@873'

    await start(serverHost, serverSecret, {
        workpath: '/Users/Administrator/.nexrender/',
        binary: '/Program Files/Adobe/Adobe After Effects 2020/Support Files/aerender.exe',
        skipCleanup: false,
        addLicense: false,
        multiFrames: true,
		aeParams: ['RStemplate OneVid_LQ','reuse']
    })
}

main().catch(console.error);