export default function Entry(props){
    return(
        <>
            <article>
                <img src={props.img.src} alt={props.img.alt} className="photo"/>
                <div className="info">
                    <section>
                        <img src="src\assets\icons8-location-48.png" alt="location" className="location_mark"/>
                        <p>{props.country}</p>
                        <a href={props.googleMapsLink} className="map-link">View on Google Maps</a>
                    </section>
                    <h2>{props.title}</h2>
                    <p className="date">{props.dates}</p>
                    <p>{props.text}</p>
                </div>
            </article>
        </>
    );
}