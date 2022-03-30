import WebFont from 'webfontloader'

const loadFont = () =>
    WebFont.load({
        google: {
            families: [
                'Roboto:100,300,400,500,600,700,900',
                'Fredoka:300,400,500,600,700',
                'Lato:300,400,500,600,700',
                'Nunito:300,400,500,600,700',
            ],
        },
    })

export default loadFont
