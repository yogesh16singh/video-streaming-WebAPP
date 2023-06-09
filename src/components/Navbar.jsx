import React from 'react'

const Navbar = () => {
    return (
        <div className='grid grid-cols-12 shadow-lg'>
            <div className='flex col-span-3 '>
                <img className='h-9 p-1 m-2 cursor-pointer' alt='hambuger' src='data:image/png;base64,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'></img>
                <img className='h-10 py-3 my-2' alt='youtube' src='data:image/png;base64,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'></img>
            </div>
            <div className='col-span-8'>
                <input className='w-2/3 h-10  p-2 border-slate-300 border rounded-full' placeholder='Search'></input>
                <button className='h-8'>
                    <img className='h-8' alt='search' src='data:image/png;base64,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'></img></button>
            </div>
            <div className='flex col-span-1'>
                <img className='h-8 m-2 ' alt='bell' src='data:image/png;base64,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'></img>
                <img className='h-8 m-2' alt='user' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD7+/vg4OD19fXp6enBwcHc3NyGhoby8vK1tbUoKCi+vr4fHx+mpqbt7e2Ojo5qampQUFB/f3+enp7T09MrKysVFRVxcXEwMDA4ODitra1KSkqWlpZjY2M/Pz/Ly8sYGBhcXFx2dnZOTk4NDQ233REeAAAJ20lEQVR4nO2diXqyPBOGK5sIAqJQrYhGred/iv/fvdWQ7ZkkvN/FfQCGQTL7JE9PExMTExMTExMTExP/GYJFHLbJMuu6suuyZdKG8SLw/VA0RPOkTOv1vrjN/nIr9us6LZN55PsRzYnabnMoZjKKw6Zr/z0xF6w/5lLhfsiPPVv4fmh1wrLWke5byroMfT+6CmFzMpDui1MzciGr7AiI98Exq3yLMUibPsPyvfGctr5F4RF0axLxPlh3Y7OWcWOiW0TkTexbqF/Eqdzs6VOkY5GxWtmQ713G1RiUzqLfWpLvjW3v2w+ISur9d09eevXoloh1V+W09CZfVTuQ743a03bM7gMie9wyD/LFO2fyvbFzbjmSF6cCzmYviVP5gpVj+d5YOXTkwoMHAWezg7PIamnbBg6RO7IbjSf53mgcyLdwq0Pv2Vn34mI/W/CHg2WzMXdtJB55mdsUkNmMI1TZMnsCJr6F+8Sa8V/6luwbS1ZjPAJaEnFMAloRcSx78Avyvch8S/QAoxUwPPsW6IEzqR9e7X3Lw2FPmNuILr6l4XKhy8L5dbaH2VEJ6DNcEkMUTI3LEP6FxCyGviJ6FXIChRr4DgjFHPD0lI+smg4rVMCxOWuPgO5b7D+ml/GCpTXGagl/A1nFzPfTKwGUbSp31SWEm7mD6qo+iFKbCmjFmbGSrTN0bSLSEnZx2TRsHsZVHM5Zs7mQ9m+czKKMku4JXnt2v1cq1r/SLVCaCLig8kfztOW7VkGbkq1hUs7oadbeC7tFopIoe9DrC1iRqISXTOYZBxmJ27TVtxgkHneqsm6VUiyl7YHHBLouZ4qLMYLtWOi6pwTv9aL+4VQEqa5UT0CCv1BvRfyNav6JePJJd1/g+14rLRXAG0PfBMMORq6T0OjQ1UzSfPB302kshjalmyVP0A91rb5UCy51MUuABahGVR9iABXbs2lEWoHzGsrqG12IGQoIVymVXy2YndkYC/j0tMGWVs3YYLNLxt/oG+Dnc1RbJYQW0dLZj4B2Sq2Mgdklw4TCF2DqRM0OY2sY5RN+gbk2J5UlsI/0jFaeozO0vspnir1ERJF+gKlTlU8I06T4bCTmUClo0wqKDE94wTKA9EAht1WYWwHXK59QB5xJfx9LIlJ0m2FFWXlaEdqGZ4om7PiMPIJ0I0ZQdL+mGGsJoOg0l5krTJNdCQR8erpCzyDT5phfaJBb54CpAplfjNlbmjFBLHqT+RxYfxDNWQjYTjmIfzzCMsE0wx5z6BkKsarBflwxPJMBBqji14xZ2xvNTFKMtYCIvQ4w8TyK/1AcXoB5xDHsQ0lOEeygYSQSgjlFcXcNmM4fgz0UJ/cDsG9gDD7NbC9yjhdgYXQMfumsEHWegHp69koSW4CdREKbBerp2ZYkPkT7XEQ2Cy2rkUwHwA2DIu8Y7urWbIjgAjctiJwa+PUJ9ZgaqD4Xf0h41zOeisKnA0RWGe5QMG/X/QZvTBZF+biEM1SbxvgjiCQkaJpF3RqCpk9RcEHwHz5jR3MsCA6XtPyVggVEitZrkYQUEyTabZC/oWj6FOpSkvkDZEqHZApJZA9pJtXMo0SaKSSRTYb90ne2pumakGbcROSXorHFJ2uzYn5EdIqt6AWj8eEXRxP3NMBPWX5HGB+iMf43Jg0LYMfXN8IYH/frv9B3bYgmWGTxDd15zrqRIsnQxTviRlrCicNaR91ElAs7epOz2au60QgJx9gkXw/hRN5sdlY1/dmZclmxY0w8fn9U+RtDIivxhTjNABZFHtg2sh6lqqGemxWXh8AaMIfnlcgAxyuaywZ+IakBg3V8LttdMjBDmuwszD1L6vhkjsVf8msW/pUyCLOrnWNhZO4URZTP51SvuoTNwzlLulVt76hzWT8NTfzkE1nHC9bXNgKkfW1gi7B/5E3CZC6+J+RBzfgOSNSDSSUkO0rBDyqHKxDEMadrk7Eka3Zqhwk87/osYVlzJTAhKpUhOLy4/hyDESU7Webntku+X3vQgk0Kahl3MN+2u3N840b0R77c33k0B3PCSjEp8q3UHHsbZQMXzeV1xjFeLbJNlOaegNm1NRv4yWqZ3t2EWBzS5VBgxcyzRWqza8afaSNMckXzpGv69Jr2TSe5uTIwfsmKiRMzt0YpnlfFMO5XnCE1qo/csNHRRzqT9LtqYshgGPdEf59fq6/x1EeQtXOKOxsXMlXahkM9C60bJNI0XT6iGwVofEha6npr77qpTCuPo3EuhlYu48zsSPcOO2s8iY6y0zifZm/3iqJQvRqmdT6Nul9zsH2zzUI5v6l3Jo5q18fJ/nVosaLV0O1yUTMYuYv73mK1LaNbsFT6EylO01ZA6URx/UYlhYnqs6uLiduz/GH0p8gVzk10d1+fvOhncG6i3KFAz/jQQZpaMXGrZEk3isMF1JFsGqPzSyXv7UItgwTxOWBm35PwMBxHavQHoUI1PfZH1Ivp/o5eK08znPWimBzRZdgJMR8QGDyTHTwMyozBXQOcyT6YsXF7c+0XQ1YRik/5iQSyO3pG8DTc+y1ob8vSgHtzGHi/BffLcOnM/IVnouEdw3EmbCWe5HA8Sdy14t0V5OtP5PyFBHcFcZ0JH5e5czU7jWvFcyYYxQ9rwuswIHKteGmpcXhtZJdY8+yQ6w+V53zQ2WVuRs+tuuHZCcpMJtfwuzQavIQDaur/Mudlbezfc/4J9z73LfH93NxWqYOjbCI37c2ol+E69mcXKnV55i1tIbzhx9grirM+RAT8HJTDa6vXlmtP/FKm06vHC5tf6pJfXLC25ECQfbVRxX+jGmhzs5hiYGfuirfSxm4MSn6a6MwsLPbNUEl2sN/LnKHeL8tF5+FbfWpaAzwfymRq3EBkSDTU5XJL6byoOB3KY+5c5DGHa/zCESd14uEyDFm4JGY5WEIoVvi3Ol8Nlp9zZ1Ep31H8oB4Y41IjSAT9s47c4I8HEZXzXnrjMxV6Uce0dQfxL4mwDf/ShbqPE4SdsET44rySEIs7B2/rFVMPHxdstRb3k+5c9LXck8l6XPNL08qVe9Q2F1k7yc1P+vKpUuiqv502WRvy5YzCNtucFHqBa+tWfpClWkfWrTgdN32ZJYy1bctYkpX95ngq1BqdT+4zl7+ISttjUrnwplYXLHortzR/su1dZbtEVMNOCEix8rcB/xKnNmQsCF15nLih3o/5/cyXd4KO7myb/0fUnVsXTZE2pTkC4jl11dapT5Xho+DHbCzqZYCwQeYXT42vPg8twvJooluLY/lPiPdBxfqjjnbNjz0b+cfJIWq7zUH+ZxaHTacQgoyWaJ6Uab3eP3jZt2K/rtNSMk367xAs4rBNllnXlV2XLZM2jBejtHgTExMTExMTExMTE2b8D1JWpcJHIHUeAAAAAElFTkSuQmCC'></img>
            </div>
        </div>
    )
}

export default Navbar