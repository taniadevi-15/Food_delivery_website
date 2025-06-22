import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";

export const categories = [
    {
        id : 1,
        name : "all",
        image : <TiThSmallOutline className="w-[60px] h-[60px]
        text-green-600"/>
    },
    {
        id : 2,
        name : "breakfast",
        image : <MdOutlineFreeBreakfast className="w-[60px] h-[60px]
        text-green-600"/>
    },
    {
        id : 3,
        name : "soups",
        image : <TbSoup className="w-[60px] h-[60px]
        text-green-600"/>
    },
    {
        id : 4,
        name : "pasta",
        image : <CiBowlNoodles className="w-[60px] h-[60px]
        text-green-600"/>
    },
    {
        id : 5,
        name : "main_course",
        image : <MdOutlineFoodBank className="w-[60px] h-[60px]
        text-green-600"/>
    },
    {
        id : 6,
        name : "pizza",
        image : <GiFullPizza className="w-[60px] h-[60px]
        text-green-600"/>
    },
    {
        id : 7,
        name : "burger",
        image : <GiHamburger className="w-[60px] h-[60px]
        text-green-600"/>
    },
]