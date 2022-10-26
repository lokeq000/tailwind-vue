module.exports = {
    mode : "jit",
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    darkMode: false, // or 'media' or 'class'
    theme   : {
        extend: {
            borderRadius: {
                '4xl' : '45px'
            },
            spacing: {
              '29': '7.5rem',
              '130': '22rem',
              '132': '31.3375rem',
              '144': '38.75rem',
            },
            lineHeight: {
                '11': '46px',
            },  
        },

        screens: {
            sm: '360px',
            md   : "768px",
            xl   : "1280px",
            "2xl": "1440px"
        },
        fontFamily: {
            roboto: [ "Roboto", "sans-serif" ]
        },
        fontSize: {
            10: "10px",
            12: "12px",
            13: "13px",
            14: "14px",
            15: "15px",
            16: "16px",
            17: "17px",
            18: "18px",
            20: "20px",
            22: "22px",
            24: "24px",
            26: "26px",
            28: "28px",
            30: "30px",
            32: "32px",
            34: "34px",
            36: "36px",
            40: '40px',
            50: "50px",
        },
        colors: {
            primary   : "#0F4471",
            secondary : "#EEF5FF",

            gray: "#F8F8F8",
            red: "#E02025",

            text: {
                main: "#404456",
                dark: "#2C3A4B",
                gray: {
                    300: "#A0A3BD",
                    500: "#666666",
                    700: "#343434",
                    900: "#1C1C1C",
                    950: "#111111"
                }
            },

            background : "#FFFFFF",
            black      : "#000000",
            white      : "#FFFFFF",
            transparent: "transparent",

            input: {
                gray: '#DFDFDF',
            }
        },
        container: {
            center : true,
            padding: {
                DEFAULT: "1rem",
                sm     : "1rem",
                md     : "1rem",
                xl     : "4rem",
                '2xl' : "1rem",
            }
        }
    },
    variants: {
        extend: {
        }
    },
    plugins: []
}
