 import ClassCard from "../../classes/ClassCard";
import useClassessHook from "../../Hooks/ClassessHook";
 import TitleBar from "../../utility/TitleBar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Holder from "./Holder";

 

const PopulerClass = () => {
   
    const data = ['machine learning', '3d design', 'motion grapich', 'visual effect', 'grapich design', 'photoGraphy', 'videoGraphy']
     


     
 
    return (
        <section className="mt-28 w-[90%] mx-auto">
            <TitleBar title='popular Classess' />
            <div className="mt-16 font-semibold">
                <Tabs>
                    <TabList>
                        {data.map(v => <Tab key={Math.random()}>{v}</Tab>)}
                    </TabList>

                    {data.map(v => {
                        return (
                            <TabPanel key={Math.random()}>
                                <h1 className="text-2xl font-semibold mt-10">Recommanded for you the professional certificate course</h1>
                                <Holder categroy={v} />
                            </TabPanel>
                        )
                    })}
                     
                </Tabs>  
       </div>
        </section>
    );
};

export default PopulerClass;