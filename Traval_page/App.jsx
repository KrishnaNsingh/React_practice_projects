import Enter from "./component/entry.jsx";
import CountryData from "./Data/country.js"
import PageBar from "./component/pageBar.jsx";

export default function App(){
    const country = CountryData.map((data)=>{
        return (<Enter 
                    key = {data.id}
                    img = {{
                        src : data.img.src,
                        alt : data.img.alt
                    }} 
                    title = {data.title}
                    country = {data.country}
                    googleMapsLink = {data.googleMapsLink}
                    dates = {data.dates}
                    text = {data.text}

                    // {...data}    this can be used directly if all property and objects match exactlly ! 
        />  
        )    
    });
    return (
    <>
        <PageBar />
        <main>
            {country}
        </main>
    </>
    );
}