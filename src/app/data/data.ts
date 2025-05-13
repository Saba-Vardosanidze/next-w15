type FooterVariant = {
    href:string;
    value:string;
}
type Footer = {
    title:string;
    href?:string;
    value?:string;
    variant:FooterVariant[];
}
type Pages = {
    page:string;
}
export const pagesName:Pages[] = [{
    page:"Home"
},
{
    page:"Services"
},
{
    page:"Blog"
},
{
    page:"Help Center"
},
{
    page:"About"
}]
export const footerInfo:Footer[] = [
    {
        title:"Column One",
        variant:[
            {
                href:"#", value:"Twenty One",
            },
            {
                href:"#", value:"Thirty Two",
            },
            {
                href:"#", value:"Fourty Three",
            },
            {
                href:"#", value:"Fifty Four",
            }
        ],
    },
        {
        title:"Column Two",
        variant:[
            {
                href:"#", value:"Sixty Five",
            },
            {
                href:"#", value:"Seventy Six",
            },
            {
                href:"#", value:"Eighty Seven",
            },
            {
                href:"#", value:"Ninety Eight",
            }
        ],
    },
     {
        title:"Column Three",
        variant:[
            {
                href:"#", value:"One Two",
            },
            {
                href:"#", value:"Three Four",
            },
            {
                href:"#", value:"Five Six",
            },
            {
                href:"#", value:"Seven Eight",
            }
        ],
    },
]