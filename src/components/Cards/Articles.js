import microservice from "../../img/microservice.jfif";
import eventdriven from "../../img/eventdriven.jfif";
import solid from "../../img/solid.jfif";

export const articles = [
    {
        id: 1,
        path_suffix: "microservice_architecture", 
        title: "Microservice Architecture",
        subtitle: "တကယ်တန်းရေးချင်တာက Event Driven Architecture အကြောင်းရေးချင်တာ ဒါပေမယ့် Microservice မသိဘဲနားမလည်နိုင်တော့ Microservice အကြောင်းအရင်ရှင်းပြချင်တယ် Microservices အကြောင်းမပြောခင် Monolithic အကြောင်းအရင်သိဖိုလိုပြန်တယ်။",
        bg_image: microservice,
        date: "Aug 16, 2022",
        genre: "Software Architecture"
    },
    {
        id: 2,
        path_suffix: "event_driven_architecture", 
        title: "Event Driven Architecture",
        subtitle: "Event Driven Architecture အကြောင်းကိုမဖတ်ခင်အရင်ဆုံး Microservice အကြောင်းကိုဖတ်စေလိုပါတယ်။ Microservice အကြောင်းကိုဒီမှာသွားဖတ်လိုရပါတယ်",
        bg_image: eventdriven,
        date: "Aug 17, 2022",
        genre: "Software Architecture"
    },
    {
        id: 3,
        path_suffix: "solid",
        title: "SOLID Principal",
        subtitle: "ကျွန်တော်တို code တွေရေးကြတဲ့အခါ business logic အရမှန်သွားရုံနဲ့ကိုရေးတဲ့ code ကအဆင်ပြေသွားပြီလိုပြောလိုမရဖူးဗျ။ ကို code က maintainable, understandable, flexible ဖြစ်ရဲ့လားဆိုတာတွေထည့်စင်းစားဖိုလိုတယ်။",
        bg_image: solid,
        date: "Oct 03, 2022",
        genre: "Software Architecture"
    }
]